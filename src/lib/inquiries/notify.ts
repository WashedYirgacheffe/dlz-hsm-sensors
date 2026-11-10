import type { InquiryRecord } from "@/lib/inquiries/store";
import { intentLabels, type Intent } from "@/lib/contact-schema";
import { site } from "@/lib/site";

/**
 * Outbound notification for a new inquiry.
 *
 * Both transports are optional. A missing key skips that channel and logs
 * a warning — an inquiry is never lost because WhatsApp is not configured;
 * it is already in the database by the time anything here runs.
 *
 * Failures here are collected and returned rather than thrown, so the
 * visitor still sees a success page when email is down but the record
 * was saved.
 */

export interface NotifyResult {
  readonly email: "sent" | "skipped" | "failed";
  readonly whatsapp: "sent" | "skipped" | "failed";
  readonly errors: readonly string[];
}

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function formatRow(label: string, value: string): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 14px 6px 0;vertical-align:top;color:#6b7c8f;font:13px -apple-system,Segoe UI,sans-serif;white-space:nowrap">${label}</td><td style="padding:6px 0;vertical-align:top;color:#121a22;font:13px -apple-system,Segoe UI,sans-serif">${escapeHtml(value)}</td></tr>`;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(record: InquiryRecord, adminUrl: string): string {
  const intent = intentLabels[record.intent as Intent] ?? record.intent;
  const rows = [
    formatRow("Reference", record.id),
    formatRow("Received", record.createdAt),
    formatRow("Type", intent),
    formatRow("Name", record.name),
    formatRow("Company", record.company),
    formatRow("Email", record.email),
    formatRow("Phone", record.phone),
    formatRow("Country", record.country),
    formatRow("Model", record.model),
    formatRow("Family", record.category),
    formatRow("Quantity", record.quantity),
  ]
    .filter(Boolean)
    .join("");

  const message = escapeHtml(record.message).replace(/\n/g, "<br>");

  return `<!doctype html>
<html><body style="margin:0;background:#f7f9fb;padding:24px">
  <table role="presentation" style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #dfe4ea;border-radius:8px">
    <tr><td style="padding:20px 24px;border-bottom:1px solid #dfe4ea">
      <div style="font:600 16px -apple-system,Segoe UI,sans-serif;color:#0b4f8a">New ${escapeHtml(intent.toLowerCase())}</div>
      <div style="font:13px -apple-system,Segoe UI,sans-serif;color:#4d5c6d;margin-top:4px">${escapeHtml(record.company)}</div>
    </td></tr>
    <tr><td style="padding:16px 24px">
      <table role="presentation" style="border-collapse:collapse">${rows}</table>
    </td></tr>
    <tr><td style="padding:0 24px 20px">
      <div style="font:11px -apple-system,Segoe UI,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#6b7c8f;margin-bottom:6px">Message</div>
      <div style="font:14px/1.6 -apple-system,Segoe UI,sans-serif;color:#121a22;background:#f7f9fb;border-left:2px solid #1a6fbc;padding:12px 14px">${message}</div>
    </td></tr>
    <tr><td style="padding:0 24px 24px">
      <a href="${escapeHtml(adminUrl)}" style="display:inline-block;background:#0b4f8a;color:#fff;text-decoration:none;font:14px -apple-system,Segoe UI,sans-serif;padding:10px 18px;border-radius:4px">Open the admin list</a>
    </td></tr>
  </table>
</body></html>`;
}

function buildEmailText(record: InquiryRecord, adminUrl: string): string {
  const intent = intentLabels[record.intent as Intent] ?? record.intent;
  return [
    `New ${intent}`,
    "",
    `Reference: ${record.id}`,
    `Received:  ${record.createdAt}`,
    `Name:      ${record.name}`,
    `Company:   ${record.company}`,
    `Email:     ${record.email}`,
    record.phone ? `Phone:     ${record.phone}` : "",
    record.country ? `Country:   ${record.country}` : "",
    record.model ? `Model:     ${record.model}` : "",
    record.category ? `Family:    ${record.category}` : "",
    record.quantity ? `Quantity:  ${record.quantity}` : "",
    "",
    "Message",
    "-------",
    record.message,
    "",
    `Admin: ${adminUrl}`,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

async function sendEmail(record: InquiryRecord): Promise<"sent" | "skipped" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const to = process.env.INQUIRY_NOTIFY_EMAIL ?? process.env.NEXT_PUBLIC_SALES_EMAIL;

  if (!apiKey || !from || !to) return "skipped";

  const adminUrl = `${site.url}/admin/inquiries`;
  const intent = intentLabels[record.intent as Intent] ?? record.intent;

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((address) => address.trim()).filter(Boolean),
      // Reply goes straight to the buyer, not to the site's own address.
      reply_to: record.email,
      subject: `[${intent}] ${record.company} — ${record.model || record.category || "General enquiry"}`,
      html: buildEmailHtml(record, adminUrl),
      text: buildEmailText(record, adminUrl),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 200)}`);
  }
  return "sent";
}

/**
 * WhatsApp Cloud API. Only the plain-text body is sent — a template would
 * need pre-approval per message type, and this is an internal alert to the
 * sales number, not a message to the buyer.
 */
async function sendWhatsApp(record: InquiryRecord): Promise<"sent" | "skipped" | "failed"> {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const to = process.env.WHATSAPP_NOTIFY_NUMBER;

  if (!token || !phoneId || !to) return "skipped";

  const intent = intentLabels[record.intent as Intent] ?? record.intent;
  const lines = [
    `New ${intent}`,
    `${record.company}`,
    record.model ? `Model: ${record.model}` : record.category ? `Family: ${record.category}` : "",
    `From: ${record.name} <${record.email}>`,
    record.phone ? `Phone: ${record.phone}` : "",
    record.quantity ? `Qty: ${record.quantity}` : "",
    "",
    record.message.slice(0, 700),
  ].filter(Boolean);

  const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { preview_url: false, body: lines.join("\n") },
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`WhatsApp ${res.status}: ${detail.slice(0, 200)}`);
  }
  return "sent";
}

export async function notifyNewInquiry(record: InquiryRecord): Promise<NotifyResult> {
  const errors: string[] = [];

  const [email, whatsapp] = await Promise.all([
    sendEmail(record).catch((error: unknown) => {
      errors.push(`email: ${error instanceof Error ? error.message : "unknown error"}`);
      return "failed" as const;
    }),
    sendWhatsApp(record).catch((error: unknown) => {
      errors.push(`whatsapp: ${error instanceof Error ? error.message : "unknown error"}`);
      return "failed" as const;
    }),
  ]);

  return { email, whatsapp, errors };
}
