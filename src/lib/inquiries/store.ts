/**
 * Inquiry persistence.
 *
 * The route handler depends on this interface, not on Supabase — so the
 * site keeps working (degraded, with an explicit warning) when credentials
 * are missing, and a different store can be swapped in later without
 * touching the API surface.
 *
 * Supabase is called through its PostgREST endpoint with `fetch` rather
 * than the client library: one table, three operations, no dependency.
 */

export interface InquiryRecord {
  readonly id: string;
  readonly createdAt: string;
  readonly name: string;
  readonly company: string;
  readonly email: string;
  readonly country: string;
  readonly phone: string;
  readonly intent: string;
  readonly model: string;
  readonly category: string;
  readonly quantity: string;
  readonly message: string;
  /** Best-effort, from proxy headers. Stored for spam triage only. */
  readonly sourceIp: string;
  readonly userAgent: string;
  readonly status: InquiryStatus;
}

export type InquiryStatus = "new" | "replied" | "quoted" | "closed" | "spam";

export interface InquiryStore {
  readonly name: string;
  create(record: InquiryRecord): Promise<void>;
  list(limit: number): Promise<readonly InquiryRecord[]>;
  setStatus(id: string, status: InquiryStatus): Promise<void>;
}

const TABLE = "inquiries";

function supabaseConfig(): { url: string; key: string } | null {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return { url, key };
}

/**
 * Supabase / PostgREST implementation. Uses the service-role key, so this
 * module must only ever run on the server — importing it from a client
 * component would leak the key into the bundle.
 */
class SupabaseStore implements InquiryStore {
  readonly name = "supabase";
  private readonly url: string;
  private readonly key: string;

  constructor(url: string, key: string) {
    this.url = url;
    this.key = key;
  }

  private headers(): HeadersInit {
    return {
      apikey: this.key,
      Authorization: `Bearer ${this.key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    };
  }

  async create(record: InquiryRecord): Promise<void> {
    const body = {
      id: record.id,
      created_at: record.createdAt,
      name: record.name,
      company: record.company,
      email: record.email,
      country: record.country,
      phone: record.phone,
      intent: record.intent,
      model: record.model,
      category: record.category,
      quantity: record.quantity,
      message: record.message,
      source_ip: record.sourceIp,
      user_agent: record.userAgent,
      status: record.status,
    };

    const res = await fetch(`${this.url}/rest/v1/${TABLE}`, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new Error(`Supabase insert failed (${res.status}): ${detail.slice(0, 300)}`);
    }
  }

  async list(limit: number): Promise<readonly InquiryRecord[]> {
    const params = new URLSearchParams({
      select: "*",
      order: "created_at.desc",
      limit: String(Math.min(Math.max(limit, 1), 500)),
    });

    const res = await fetch(`${this.url}/rest/v1/${TABLE}?${params}`, {
      headers: this.headers(),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      throw new Error(`Supabase select failed (${res.status})`);
    }

    const rows = (await res.json()) as Record<string, unknown>[];
    return rows.map(fromRow);
  }

  async setStatus(id: string, status: InquiryStatus): Promise<void> {
    const params = new URLSearchParams({ id: `eq.${id}` });
    const res = await fetch(`${this.url}/rest/v1/${TABLE}?${params}`, {
      method: "PATCH",
      headers: this.headers(),
      body: JSON.stringify({ status }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      throw new Error(`Supabase update failed (${res.status})`);
    }
  }
}

function fromRow(row: Record<string, unknown>): InquiryRecord {
  const str = (key: string): string => (typeof row[key] === "string" ? (row[key] as string) : "");
  return {
    id: str("id"),
    createdAt: str("created_at"),
    name: str("name"),
    company: str("company"),
    email: str("email"),
    country: str("country"),
    phone: str("phone"),
    intent: str("intent"),
    model: str("model"),
    category: str("category"),
    quantity: str("quantity"),
    message: str("message"),
    sourceIp: str("source_ip"),
    userAgent: str("user_agent"),
    status: (str("status") || "new") as InquiryStatus,
  };
}

/**
 * Development fallback: an in-memory ring buffer. Deliberately not a file —
 * a serverless deployment has no persistent disk, and writing submissions
 * to one would be a data-handling decision nobody asked for. This exists so
 * `npm run dev` and preview builds work without Supabase credentials.
 */
class MemoryStore implements InquiryStore {
  readonly name = "memory";
  private readonly records: InquiryRecord[] = [];

  async create(record: InquiryRecord): Promise<void> {
    this.records.unshift(record);
    if (this.records.length > 200) this.records.length = 200;
  }

  async list(limit: number): Promise<readonly InquiryRecord[]> {
    return this.records.slice(0, limit);
  }

  async setStatus(id: string, status: InquiryStatus): Promise<void> {
    const index = this.records.findIndex((r) => r.id === id);
    if (index >= 0) this.records[index] = { ...this.records[index], status };
  }
}

// Kept on globalThis so Next's dev-mode module reloading does not wipe it.
const globalForStore = globalThis as unknown as { __inquiryStore?: InquiryStore };

export function getInquiryStore(): InquiryStore {
  if (globalForStore.__inquiryStore) return globalForStore.__inquiryStore;

  const config = supabaseConfig();
  const store = config
    ? new SupabaseStore(config.url, config.key)
    : new MemoryStore();

  globalForStore.__inquiryStore = store;
  return store;
}

/** True when submissions will actually be persisted beyond the process. */
export function isStoreConfigured(): boolean {
  return supabaseConfig() !== null;
}
