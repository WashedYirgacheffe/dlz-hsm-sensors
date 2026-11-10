"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { CategorySlug } from "@/lib/content-types";

export interface ExplorerItem {
  readonly slug: string;
  readonly model: string;
  readonly name: string;
  readonly variant?: string;
  readonly category: CategorySlug;
  readonly categoryName: string;
  readonly categoryShort: string;
  readonly summary: string;
  readonly image: string;
  /** Flattened spec values, lowercased, used for free-text matching */
  readonly haystack: string;
}

export interface ExplorerCategory {
  readonly slug: CategorySlug;
  readonly name: string;
  readonly shortName: string;
  readonly count: number;
}

interface ProductExplorerProps {
  items: readonly ExplorerItem[];
  categories: readonly ExplorerCategory[];
}

/**
 * Catalogue filter. The list is already in the bundle — 66 models is small
 * enough that searching client-side is instant and needs no API. Keeping
 * the filter here rather than in the URL avoids a round-trip on every
 * keystroke, which matters most on the connections these buyers use.
 */
export function ProductExplorer({ items, categories }: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<CategorySlug | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (active !== "all" && item.category !== active) return false;
      if (q.length === 0) return true;
      return (
        item.model.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.haystack.includes(q)
      );
    });
  }, [items, query, active]);

  return (
    <div>
      {/* Controls */}
      <div className="sticky top-[68px] z-20 -mx-4 border-b border-ink-200 bg-white/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:static lg:mx-0 lg:rounded-lg lg:border lg:px-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block lg:max-w-sm lg:flex-1">
            <span className="sr-only">Search models, ranges or outputs</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
            >
              <circle cx="6.5" cy="6.5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Model, e.g. HSM10, 4-20 mA, 316L, IP68…"
              className="w-full rounded border border-ink-300 bg-white py-2.5 pl-9 pr-3 text-[13.5px] text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none"
            />
          </label>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">
            {filtered.length} of {items.length} models
          </p>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <FilterChip
            label={`All (${items.length})`}
            active={active === "all"}
            onClick={() => setActive("all")}
          />
          {categories.map((c) => (
            <FilterChip
              key={c.slug}
              label={`${c.shortName} (${c.count})`}
              active={active === c.slug}
              onClick={() => setActive(c.slug)}
            />
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-12 rounded-lg border border-dashed border-ink-300 bg-ink-50 px-6 py-14 text-center">
          <p className="text-[15px] font-medium text-ink-900">No model matches that search.</p>
          <p className="mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-ink-600">
            The catalogue covers 66 models but the factory builds to order. Describe the
            process conditions and we will specify something that does fit.
          </p>
          <Link
            href="/contact?intent=quote"
            className="mt-5 inline-block rounded bg-brand-600 px-5 py-3 text-[13.5px] font-medium text-white transition-colors hover:bg-brand-700"
          >
            Ask an engineer
          </Link>
        </div>
      ) : (
        <>
          <h2 className="sr-only">
            {active === "all"
              ? "All models"
              : `${items.find((i) => i.category === active)?.categoryName ?? "Filtered"} models`}
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/products/${item.category}/${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink-200 bg-white transition-all duration-200 hover:border-brand-300 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-ink-100 bg-ink-50">
                  <Image
                    src={item.image}
                    alt={`${item.model} ${item.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-600">
                      {item.model}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-400">
                      {item.categoryShort}
                    </span>
                  </div>
                  <h3 className="mt-2 text-[16px] font-semibold leading-snug tracking-tight text-ink-900 group-hover:text-brand-700">
                    {item.name}
                  </h3>
                  {item.variant && (
                    <p className="mt-0.5 text-[12.5px] text-ink-500">{item.variant}</p>
                  )}
                  <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-ink-600">
                    {item.summary}
                  </p>
                </div>
              </Link>
            </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "rounded border border-brand-600 bg-brand-600 px-2.5 py-1 text-[12px] font-medium text-white"
          : "rounded border border-ink-300 bg-white px-2.5 py-1 text-[12px] text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-700"
      }
    >
      {label}
    </button>
  );
}
