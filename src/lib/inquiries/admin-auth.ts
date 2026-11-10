import { createHash, timingSafeEqual } from "node:crypto";

/**
 * Single-password admin gate.
 *
 * This protects one internal page that lists inbound enquiries. It is not
 * an account system: there is one shared password, no user records, and no
 * session table. That is a deliberate choice for a site with one operator,
 * and it keeps the blast radius small — the cookie grants read access to
 * enquiries and the ability to change their status, nothing else.
 *
 * The password never travels in a URL or a client bundle. It is compared
 * server-side against ADMIN_PASSWORD, and the resulting cookie is an HMAC
 * of a fixed string so the password itself is never stored in the cookie.
 */

const COOKIE_NAME = "hsm_admin";
const MAX_AGE_SECONDS = 60 * 60 * 8; // one working day

function adminPassword(): string | null {
  const value = process.env.ADMIN_PASSWORD;
  if (!value || value.length < 12) return null;
  return value;
}

function secret(): string | null {
  // Prefer a dedicated secret; fall back to the password so a minimal
  // deployment works with one variable. Rotating either invalidates cookies.
  return process.env.ADMIN_SECRET ?? adminPassword();
}

export function isAdminConfigured(): boolean {
  return adminPassword() !== null && secret() !== null;
}

function digest(input: string): Buffer {
  return createHash("sha256").update(input).digest();
}

/** Constant-time password comparison. */
export function checkPassword(candidate: string): boolean {
  const expected = adminPassword();
  if (!expected) return false;
  const a = digest(candidate);
  const b = digest(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Cookie value: an HMAC over a fixed label, keyed by the server secret. */
export function sessionToken(): string {
  const key = secret();
  if (!key) return "";
  return createHash("sha256").update(`hsm-admin-session:${key}`).digest("hex");
}

export function isValidSession(token: string | undefined): boolean {
  if (!token) return false;
  const expected = sessionToken();
  if (!expected) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const adminCookie = {
  name: COOKIE_NAME,
  maxAge: MAX_AGE_SECONDS,
} as const;
