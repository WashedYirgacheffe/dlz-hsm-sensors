import type { SpecGroup } from "@/lib/content-types";

interface SpecTableProps {
  groups: readonly SpecGroup[];
}

/**
 * Datasheet-style spec block. Each group renders as a definition list with
 * the label in a fixed left column — the same reading order as a printed
 * catalogue page, so an engineer can scan a column of values vertically.
 *
 * The first group stays open; later groups collapse. On a long spec sheet
 * that keeps the page from becoming an undifferentiated wall of text while
 * still letting the whole table be read without JavaScript, because
 * <details> is native.
 */
export function SpecTable({ groups }: SpecTableProps) {
  if (groups.length === 0) {
    return (
      <p className="text-[14px] leading-relaxed text-ink-600">
        Detailed specifications for this model are supplied as a datasheet. Request a
        quote and we will send the current revision with the price.
      </p>
    );
  }

  return (
    <div className="divide-y divide-ink-200 overflow-hidden rounded-lg border border-ink-200 bg-white">
      {groups.map((group, index) => (
        <details key={group.title} open={index === 0} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-ink-50 sm:px-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
              {String(index + 1).padStart(2, "0")} — {group.title}
            </span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              aria-hidden="true"
              className="shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-180"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <dl className="border-t border-ink-100">
            {group.rows.map((row, i) => (
              <div
                key={`${row.label}-${i}`}
                className="grid grid-cols-1 gap-1 border-b border-ink-100 px-5 py-3 last:border-b-0 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6 sm:px-6"
              >
                <dt className="text-[13px] leading-relaxed text-ink-500">{row.label}</dt>
                <dd className="text-[13.5px] leading-relaxed font-medium text-ink-900 tnum">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </details>
      ))}
    </div>
  );
}
