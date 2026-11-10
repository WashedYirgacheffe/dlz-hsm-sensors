import Link from "next/link";
import { site } from "@/lib/site";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lede?: string;
  breadcrumbs?: readonly { label: string; href?: string }[];
  actions?: readonly { label: string; href: string; primary?: boolean }[];
  compact?: boolean;
}

export function PageHero({
  eyebrow,
  title,
  lede,
  breadcrumbs,
  actions,
  compact = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-200 bg-ink-900">
      <div className="absolute inset-0 grid-backdrop opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className={`relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 ${
          compact ? "py-10 lg:py-12" : "py-14 lg:py-20"
        }`}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
              {breadcrumbs.map((b, i) => (
                <li key={`${b.label}-${i}`} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-white">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-ink-300">{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <p className="eyebrow !text-brand-300">{eyebrow}</p>
        <h1
          className={`mt-3 max-w-4xl font-semibold tracking-tight text-white ${
            compact ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl lg:text-[3.4rem]"
          }`}
        >
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-3xl text-[15.5px] leading-relaxed text-ink-300 sm:text-base">
            {lede}
          </p>
        )}

        {actions && actions.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((a) => (
              <Link
                key={a.href + a.label}
                href={a.href}
                className={
                  a.primary
                    ? "rounded bg-brand-500 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-400"
                    : "rounded border border-white/25 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
                }
              >
                {a.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function QuoteCta({
  title = "Need a model that is not in the catalogue?",
  body = "Send us the medium, range, thread and output you need. Most custom configurations are quoted from the factory engineering desk rather than handed to a trading partner.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-y border-ink-200 bg-ink-50">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-[1.7rem]">
            {title}
          </h2>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600">{body}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link
            href="/contact?intent=quote"
            className="rounded bg-brand-600 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-700"
          >
            Request a quote
          </Link>
          <a
            href={`mailto:${site.contact.email}`}
            className="rounded border border-ink-300 px-5 py-3 text-[14px] font-medium text-ink-800 transition-colors hover:border-ink-400 hover:bg-white"
          >
            {site.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
