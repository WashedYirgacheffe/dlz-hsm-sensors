"use client";

import { useState, useTransition } from "react";
import type { InquiryRecord, InquiryStatus } from "@/lib/inquiries/store";

const STATUS_STYLES: Record<InquiryStatus, string> = {
  new: "border-brand-300 bg-brand-50 text-brand-800",
  replied: "border-ink-300 bg-ink-50 text-ink-700",
  quoted: "border-signal-400/60 bg-signal-400/15 text-ink-900",
  closed: "border-ink-300 bg-white text-ink-500",
  spam: "border-red-300 bg-red-50 text-red-700",
};

export function AdminList({ records }: { records: readonly InquiryRecord[] }) {
  const [filter, setFilter] = useState<InquiryStatus | "all">("all");
  const [items, setItems] = useState(records);
  const [pending, startTransition] = useTransition();

  const visible = filter === "all" ? items : items.filter((r) => r.status === filter);

  function changeStatus(id: string, status: InquiryStatus) {
    const previous = items;
    setItems((current) => current.map((r) => (r.id === id ? { ...r, status } : r)));

    startTransition(async () => {
      try {
        const res = await fetch("/api/admin/inquiries", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status }),
        });
        if (!res.ok) throw new Error("failed");
      } catch {
        // Roll back the optimistic update so the list never lies about state.
        setItems(previous);
      }
    });
  }

  if (items.length === 0) {
    return (
      <div className="mt-8 rounded-lg border border-dashed border-ink-300 bg-ink-50 px-6 py-16 text-center">
        <p className="text-[15px] font-medium text-ink-900">No inquiries yet.</p>
        <p className="mt-2 text-[13px] text-ink-600">
          Submissions from the contact form will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-1.5">
        {(["all", "new", "quoted", "replied", "closed", "spam"] as const).map((key) => {
          const count = key === "all" ? items.length : items.filter((r) => r.status === key).length;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={
                filter === key
                  ? "rounded border border-brand-600 bg-brand-600 px-2.5 py-1 text-[12px] font-medium capitalize text-white"
                  : "rounded border border-ink-300 bg-white px-2.5 py-1 text-[12px] capitalize text-ink-600 transition-colors hover:border-brand-400"
              }
            >
              {key} ({count})
            </button>
          );
        })}
        {pending && (
          <span className="self-center font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-400">
            saving…
          </span>
        )}
      </div>

      <ul className="mt-4 space-y-3">
        {visible.map((record) => (
          <li
            key={record.id}
            className="rounded-lg border border-ink-200 bg-white p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-sm border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] ${STATUS_STYLES[record.status]}`}
                  >
                    {record.status}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-brand-600">
                    {record.intent}
                  </span>
                  <span className="text-[11.5px] text-ink-400">
                    {new Date(record.createdAt).toLocaleString("en-GB", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
                <h2 className="mt-2 text-[15px] font-semibold tracking-tight text-ink-900">
                  {record.company}
                </h2>
                <p className="mt-0.5 text-[12.5px] text-ink-600">
                  {record.name} ·{" "}
                  <a
                    href={`mailto:${record.email}?subject=${encodeURIComponent(
                      `Re: your enquiry ${record.id.slice(0, 8)}`,
                    )}`}
                    className="text-brand-600 hover:underline"
                  >
                    {record.email}
                  </a>
                  {record.phone && <> · {record.phone}</>}
                  {record.country && <> · {record.country}</>}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {(["new", "quoted", "replied", "closed", "spam"] as const)
                  .filter((s) => s !== record.status)
                  .map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => changeStatus(record.id, s)}
                      className="rounded border border-ink-300 px-2 py-1 text-[11.5px] capitalize text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-700"
                    >
                      {s}
                    </button>
                  ))}
              </div>
            </div>

            {(record.model || record.category || record.quantity) && (
              <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-ink-500">
                {record.model && <span>Model: {record.model}</span>}
                {record.category && <span>Family: {record.category}</span>}
                {record.quantity && <span>Qty: {record.quantity}</span>}
              </p>
            )}

            <p className="mt-3 whitespace-pre-wrap border-l-2 border-ink-200 pl-3.5 text-[13px] leading-relaxed text-ink-700">
              {record.message}
            </p>

            <p className="mt-3 font-mono text-[10px] text-ink-400">
              {record.id.slice(0, 8)} · {record.sourceIp}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
