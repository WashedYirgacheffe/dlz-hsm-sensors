import { NextResponse } from "next/server";
import { isValidSession, adminCookie } from "@/lib/inquiries/admin-auth";
import { getInquiryStore, type InquiryStatus } from "@/lib/inquiries/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const STATUSES: readonly InquiryStatus[] = ["new", "replied", "quoted", "closed", "spam"];

export async function PATCH(request: Request) {
  const token = request.headers
    .get("cookie")
    ?.split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${adminCookie.name}=`))
    ?.slice(adminCookie.name.length + 1);

  if (!isValidSession(token)) {
    return NextResponse.json({ ok: false, error: "Not authorised." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const { id, status } = (body ?? {}) as { id?: unknown; status?: unknown };

  if (typeof id !== "string" || id.length < 8 || id.length > 80) {
    return NextResponse.json({ ok: false, error: "Invalid id." }, { status: 400 });
  }
  if (typeof status !== "string" || !STATUSES.includes(status as InquiryStatus)) {
    return NextResponse.json({ ok: false, error: "Invalid status." }, { status: 400 });
  }

  try {
    await getInquiryStore().setStatus(id, status as InquiryStatus);
  } catch (error: unknown) {
    console.error("[admin] status update failed", {
      id,
      error: error instanceof Error ? error.message : error,
    });
    return NextResponse.json({ ok: false, error: "Update failed." }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
