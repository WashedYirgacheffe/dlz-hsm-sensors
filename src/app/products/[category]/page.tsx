import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero, QuoteCta } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { categories, getCategory } from "@/lib/categories";
import { categoryCounts, getProductsByCategory, products } from "@/lib/products";

interface PageProps {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  const count = getProductsByCategory(category.slug).length;

  return {
    title: category.name,
    description: `${category.tagline}. ${count} models, factory-direct from Xiamen with 4-20 mA, RS485 and relay outputs.`,
    alternates: { canonical: `/products/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug);
  const counts = categoryCounts();

  return (
    <>
      <PageHero
        eyebrow={`Product family · ${items.length} models`}
        title={category.name}
        lede={category.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.shortName },
        ]}
      />

      {/* Measured quantities and outputs */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                What it measures
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.measures.map((m) => (
                  <li
                    key={m}
                    className="rounded-sm border border-brand-200 bg-brand-50 px-2.5 py-1 text-[12.5px] font-medium text-brand-800"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                Available outputs
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.outputs.map((o) => (
                  <li
                    key={o}
                    className="rounded-sm border border-ink-200 bg-ink-50 px-2.5 py-1 font-mono text-[11.5px] text-ink-700"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Model list */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-[1.9rem]">
            {items.length} {items.length === 1 ? "model" : "models"} in this family
          </h2>
          <p className="text-[13px] text-ink-500">
            Sorted by typical duty — workhorse models first
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} />
          ))}
        </div>
      </section>

      {/* Cross-navigation */}
      <section className="border-t border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
            Other product families
          </h2>
          <ul className="mt-4 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug} className="bg-white">
                <Link
                  href={`/products/${c.slug}`}
                  className="group flex items-baseline justify-between gap-3 px-5 py-4 transition-colors hover:bg-brand-50"
                >
                  <span className="text-[14px] font-medium text-ink-900 group-hover:text-brand-700">
                    {c.name}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-ink-400">
                    {counts[c.slug] ?? 0}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] text-ink-600">
            Looking across the whole catalogue instead?{" "}
            <Link href="/products" className="font-medium text-brand-600 hover:text-brand-700">
              See all {products.length} models →
            </Link>
          </p>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
