import { NextResponse } from "next/server";
import { checkPassword, isAdminConfigured, sessionToken, adminCookie } from "@/lib/inquiries/admin-auth";
import { checkAdminRateLimit } from "@/lib/inquiries/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0]!.trim() : "unknown";

  // Passwords are guessable; the lockout matters more here than on the
  // enquiry form. Eight attempts an hour per address.
  const attempt = checkAdminRateLimit(`admin:${ip}`);
  if (!attempt.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Try again later." },
      { status: 429 },
    );
  }

  if (!isAdminConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Admin access is not configured on this deployment." },
      { status: 503 },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ ok: false, error: "Unsupported content type." }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const password = (body as { password?: unknown } | null)?.password;
  if (typeof password !== "string" || password.length === 0 || password.length > 200) {
    return NextResponse.json({ ok: false, error: "Password required." }, { status: 400 });
  }

  if (!checkPassword(password)) {
    // Deliberately identical message and timing shape for wrong vs. empty.
    return NextResponse.json({ ok: false, error: "Incorrect password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: adminCookie.name,
    value: sessionToken(),
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: adminCookie.maxAge,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: adminCookie.name,
    value: "",
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 0,
  });
  return response;
}
