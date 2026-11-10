import Link from "next/link";
import { categories } from "@/lib/categories";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[900px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-600">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
        That page is not here
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600">
        The address may have changed, or the model may have been retired from the catalogue.
        If you followed a link from the old site, the product is probably still listed — try
        the family below, or tell us the model code and we will find it.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/products"
          className="rounded bg-brand-600 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-700"
        >
          Browse the catalogue
        </Link>
        <Link
          href="/contact"
          className="rounded border border-ink-300 px-5 py-3 text-[14px] font-medium text-ink-800 transition-colors hover:border-ink-400 hover:bg-ink-50"
        >
          Ask an engineer
        </Link>
      </div>

      <h2 className="mt-12 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
        Product families
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/products/${c.slug}`}
              className="block rounded border border-ink-200 px-4 py-2.5 text-[13.5px] text-ink-800 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
