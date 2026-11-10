import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { getInquiryStore, isStoreConfigured, type InquiryRecord } from "@/lib/inquiries/store";
import { notifyNewInquiry } from "@/lib/inquiries/notify";
import { checkRateLimit } from "@/lib/inquiries/rate-limit";

export const runtime = "nodejs";

/** Minimum seconds a human plausibly needs to fill the form. */
const MIN_FILL_MS = 2500;

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  // Content-Type gate: reject anything that is not JSON before parsing.
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Unsupported content type." },
      { status: 415 },
    );
  }

  // Body size gate — a legitimate RFQ is text, and the schema caps each
  // field, but rejecting an oversized body early avoids buffering it.
  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > 32_000) {
    return NextResponse.json({ ok: false, error: "Payload too large." }, { status: 413 });
  }

  const ip = clientIp(request);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.max(limit.retryAfter, 1)) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: pretend success so a bot gets no signal about why it failed.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true, reference: "received" }, { status: 201 });
  }

  // A form completed faster than a human can type is automated.
  if (typeof data.elapsedMs === "number" && data.elapsedMs < MIN_FILL_MS) {
    return NextResponse.json({ ok: true, reference: "received" }, { status: 201 });
  }

  const now = new Date();
  const record: InquiryRecord = {
    id: crypto.randomUUID(),
    createdAt: now.toISOString(),
    name: data.name,
    company: data.company,
    email: data.email,
    country: data.country ?? "",
    phone: data.phone ?? "",
    intent: data.intent,
    model: data.model ?? "",
    category: data.category ?? "",
    quantity: data.quantity ?? "",
    message: data.message,
    sourceIp: ip,
    userAgent: (request.headers.get("user-agent") ?? "").slice(0, 300),
    status: "new",
  };

  const store = getInquiryStore();

  try {
    await store.create(record);
  } catch (error: unknown) {
    console.error("[inquiry] persistence failed", {
      id: record.id,
      store: store.name,
      error: error instanceof Error ? error.message : error,
    });
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not save your request. Please email us directly and we will pick it up from there.",
      },
      { status: 503 },
    );
  }

  // Notifications are best-effort: the record is already safe.
  const notified = await notifyNewInquiry(record);
  if (notified.errors.length > 0) {
    console.error("[inquiry] notification failed", { id: record.id, errors: notified.errors });
  }
  if (!isStoreConfigured()) {
    console.warn(
      "[inquiry] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set — submissions are held in memory and will be lost on restart.",
    );
  }

  return NextResponse.json(
    { ok: true, reference: record.id },
    { status: 201, headers: { "Cache-Control": "no-store" } },
  );
}
