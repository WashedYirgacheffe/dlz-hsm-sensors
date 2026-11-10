import type { Metadata } from "next";
import { PageHero, QuoteCta } from "@/components/page-hero";
import { ProductExplorer } from "@/components/product-explorer";
import { categories, getCategory } from "@/lib/categories";
import { categoryCounts, products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product Catalogue — Flow, Level, Pressure, Temperature Sensors",
  description: `All ${products.length} industrial sensor models from HSM Sensors: flow switches, level transmitters, pressure transmitters, RTD probes, ultrasonic sensors, laser methane detectors and wireless IoT instruments. Filter by model, output or material.`,
  alternates: { canonical: "/products" },
};

export default function ProductsIndexPage() {
  const counts = categoryCounts();

  const items = products.map((p) => {
    const category = getCategory(p.category);
    return {
      slug: p.slug,
      model: p.model,
      name: p.name,
      variant: p.variant,
      category: p.category,
      categoryName: category?.name ?? "",
      categoryShort: category?.shortName ?? "",
      summary: p.summary,
      image: p.image,
      haystack: p.specs
        .flatMap((g) => [g.title, ...g.rows.map((r) => `${r.label} ${r.value}`)])
        .join(" ")
        .toLowerCase(),
    };
  });

  const explorerCategories = categories.map((c) => ({
    slug: c.slug,
    name: c.name,
    shortName: c.shortName,
    count: counts[c.slug] ?? 0,
  }));

  return (
    <>
      <PageHero
        eyebrow={`${products.length} models · 10 families`}
        title="The full catalogue"
        lede="Every instrument is assembled, calibrated and pressure-tested in our own facility in Jimei District, Xiamen. Filter by model code, measured quantity, wetted material or output signal — then send the process conditions for a price and a lead time."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        actions={[
          { label: "Request a quote", href: "/contact?intent=quote", primary: true },
          { label: "Custom engineering", href: "/custom" },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <ProductExplorer items={items} categories={explorerCategories} />
      </section>

      {/* Selection help */}
      <section className="border-t border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="eyebrow">How to choose</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900">
                Three questions decide most specifications
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
                If you can answer these, the model list narrows to two or three candidates —
                and we will confirm which one we would ship for the duty.
              </p>
            </div>
            <ol className="lg:col-span-2 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "What are you measuring?",
                  b: "Point level or continuous, differential or gauge pressure, flow presence or flow rate. The quantity picks the family.",
                },
                {
                  n: "02",
                  t: "What conditions?",
                  b: "Medium, temperature, pressure and whether the area is classified. These set the wetted material and the housing.",
                },
                {
                  n: "03",
                  t: "What does the panel accept?",
                  b: "Relay, 4–20 mA, 0–10 V or RS485. If there is no PLC, the controller models switch the load themselves.",
                },
              ].map((s) => (
                <li key={s.n} className="bg-white p-6">
                  <span className="font-mono text-[11px] text-brand-500 tnum">{s.n}</span>
                  <h3 className="mt-2 text-[14.5px] font-semibold tracking-tight text-ink-900">
                    {s.t}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">{s.b}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink-200 pt-8 text-[13px] text-ink-600">
            <span>
              Still unsure? Send the process conditions to{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-medium text-brand-600 hover:text-brand-700"
              >
                {site.contact.email}
              </a>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">
              Answered by the engineering team
            </span>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
