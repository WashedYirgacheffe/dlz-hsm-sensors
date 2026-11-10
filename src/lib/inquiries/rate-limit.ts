/**
 * Best-effort rate limiting.
 *
 * On a single long-lived Node process this is a real limit. On a
 * serverless deployment each instance keeps its own counter, so the
 * effective limit is (limit × instances) — good enough to stop a script
 * hammering the form, not a substitute for a WAF. The honeypot and the
 * minimum-fill-time check in the route are what catch the ordinary bots;
 * this only stops volume.
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const WINDOW_MS = 60 * 60 * 1000;
/**
 * Deliberately generous. A distributor office behind one NAT address may
 * legitimately send several enquiries in an hour, and a false 429 costs a
 * real order. This stops a flood; it is not meant to police normal use.
 */
const MAX_PER_WINDOW = 12;

/** Admin password attempts are held to a much tighter budget. */
const ADMIN_MAX_PER_WINDOW = 8;

const globalForLimit = globalThis as unknown as { __rateBuckets?: Map<string, Bucket> };

function buckets(): Map<string, Bucket> {
  if (!globalForLimit.__rateBuckets) globalForLimit.__rateBuckets = new Map();
  return globalForLimit.__rateBuckets;
}

export interface RateLimitResult {
  readonly allowed: boolean;
  readonly remaining: number;
  /** Seconds until the window resets, for the Retry-After header. */
  readonly retryAfter: number;
}

export function checkRateLimit(key: string, max = MAX_PER_WINDOW): RateLimitResult {
  const now = Date.now();
  const store = buckets();

  // Sweep expired entries occasionally so the map cannot grow without bound.
  if (store.size > 1000) {
    for (const [k, v] of store) {
      if (v.resetAt <= now) store.delete(k);
    }
  }

  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: max - 1, retryAfter: 0 };
  }

  existing.count += 1;

  if (existing.count > max) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  return { allowed: true, remaining: max - existing.count, retryAfter: 0 };
}

export function checkAdminRateLimit(key: string): RateLimitResult {
  return checkRateLimit(key, ADMIN_MAX_PER_WINDOW);
}
