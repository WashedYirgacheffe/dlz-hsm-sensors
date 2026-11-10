import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { HeroStage } from "@/components/hero-stage";
import { ProductCard } from "@/components/product-card";
import { categories } from "@/lib/categories";
import { categoryCounts, featuredProducts, products } from "@/lib/products";
import { site, trustPoints } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industrial Sensors — Flow, Level, Pressure, Temperature | HSM Sensors",
  description:
    "Factory-direct manufacturer of industrial flow switches, level transmitters, pressure transmitters, RTD sensors, ultrasonic and gas detectors. 4-20 mA, RS485 and relay outputs, custom ranges, worldwide shipping from Xiamen, China.",
  alternates: { canonical: "/" },
};

const applications = [
  {
    title: "Oil & gas",
    body: "Differential pressure, level and methane detection for separators, storage and gathering lines.",
    metric: "ATEX-grade housings",
  },
  {
    title: "Water & wastewater",
    body: "Submersible level, thermal flow switches and dissolved oxygen for treatment and networks.",
    metric: "IP68 submersible",
  },
  {
    title: "Chemical & petrochemical",
    body: "Capacitive and magnetic level plus pressure control for aggressive and coating media.",
    metric: "316L wetted parts",
  },
  {
    title: "Power generation",
    body: "Fibre-optic hotspot sensing, steam-side pressure and boiler level instrumentation.",
    metric: "100 kV rated",
  },
  {
    title: "Food & beverage",
    body: "Sanitary PEEK and stainless level switches, RTD probes and pH/DO analysis.",
    metric: "Hygienic designs",
  },
  {
    title: "Machine building",
    body: "Ultrasonic, laser and encoder feedback for automation and packaging equipment.",
    metric: "OEM quantities",
  },
];

export default function HomePage() {
  const counts = categoryCounts();
  const total = products.length;

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-ink-900">
        <div className="absolute inset-0 grid-backdrop opacity-50" aria-hidden="true" />
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[640px] items-center gap-8 py-14 lg:grid-cols-12 lg:gap-4 lg:py-0">
            {/* Copy */}
            <div className="relative z-10 lg:col-span-6 lg:py-20">
              <p className="eyebrow !text-brand-300">
                Manufacturer · Xiamen, China
                {site.founded ? ` · Since ${site.founded}` : " · Factory-direct"}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.65rem]">
                Industrial sensors,
                <br className="hidden sm:block" />{" "}
                <span className="text-brand-300">built in our own factory.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-ink-300">
                Flow, level, pressure, temperature, ultrasonic and gas instrumentation for
                plant engineers and machine builders. {total} models in ten families, with
                4–20 mA, RS485 and relay outputs — and custom ranges built to order rather
                than refused.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="rounded bg-brand-500 px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-brand-400"
                >
                  Browse the catalogue
                </Link>
                <Link
                  href="/contact?intent=quote"
                  className="rounded border border-white/25 px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
                >
                  Request a quote
                </Link>
              </div>

              {/* Quick stats */}
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-7">
                {[
                  { v: `${total}`, k: "models in catalogue" },
                  { v: "10", k: "measurement families" },
                  { v: "316L", k: "wetted stainless standard" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="sr-only">{s.k}</dt>
                    <dd>
                      <span className="block font-mono text-2xl font-medium text-white tnum">
                        {s.v}
                      </span>
                      <span className="mt-1 block text-[12px] leading-snug text-ink-400">
                        {s.k}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 3D visual — the rotate hint renders only when the scene loads */}
            <HeroStage />
          </div>
        </div>
      </section>

      {/* ====================== TRUST STRIP ====================== */}
      <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-ink-200 px-0 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t) => (
            <div key={t.title} className="bg-white px-6 py-7">
              <h2 className="text-[14.5px] font-semibold tracking-tight text-ink-900">
                {t.title}
              </h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CATEGORY GRID ==================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Product families</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.4rem]">
              Find the measurement you need
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
              Ten families, each built around a specific measuring principle. Pick the
              quantity, then narrow by range, output and process connection.
            </p>
          </div>
          <Link
            href="/products"
            className="text-[13.5px] font-medium text-brand-600 hover:text-brand-700"
          >
            All {total} models →
          </Link>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className="group relative bg-white p-6 transition-colors hover:bg-brand-50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-[16px] font-semibold leading-snug tracking-tight text-ink-900 group-hover:text-brand-700">
                  {c.name}
                </h3>
                <span className="shrink-0 font-mono text-[11px] text-ink-400">
                  {counts[c.slug] ?? 0}
                </span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-600">{c.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.outputs.slice(0, 3).map((o) => (
                  <span
                    key={o}
                    className="rounded-sm border border-ink-200 bg-ink-50 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-500"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </Link>
          ))}
          <Link
            href="/contact?intent=quote"
            className="group flex flex-col justify-center bg-ink-900 p-6 transition-colors hover:bg-brand-800"
          >
            <h3 className="text-[16px] font-semibold leading-snug tracking-tight text-white">
              Need something not listed?
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-400">
              Send the medium, range and thread. We build custom variants as a matter of course.
            </p>
            <span className="mt-4 text-[13px] font-medium text-brand-300">
              Talk to an engineer →
            </span>
          </Link>
        </div>
      </section>

      {/* ================== FEATURED PRODUCTS ================== */}
      <section className="border-y border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Widely specified</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.4rem]">
                Workhorse models
              </h2>
            </div>
            <Link
              href="/products"
              className="text-[13.5px] font-medium text-brand-600 hover:text-brand-700"
            >
              See everything →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.slice(0, 8).map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 4} />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== INDUSTRIES ====================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Industries</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.4rem]">
              Where these instruments run
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              Most of what we ship goes into six industries. Each has its own failure modes
              — fouling, corrosion, vibration, hazardous area classification — and the
              instrument has to be specified for the one that applies.
            </p>
            <Link
              href="/industries"
              className="mt-6 inline-block text-[13.5px] font-medium text-brand-600 hover:text-brand-700"
            >
              Industry applications →
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2">
              {applications.map((a) => (
                <div key={a.title} className="bg-white p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[15px] font-semibold tracking-tight text-ink-900">
                      {a.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-brand-600">
                      {a.metric}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-600">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================= CAPABILITY ======================= */}
      <section className="border-y border-ink-200 bg-ink-900">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow !text-brand-300">How we work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-[2.4rem]">
                You are dealing with the factory, not a trading desk
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-300">
                Everything in this catalogue is assembled, calibrated and tested in Jimei
                District, Xiamen. The engineering team that answers your enquiry is the same
                team that sets the production parameters — which is why a non-standard thread
                or a 450 °C version is a normal order rather than an exception.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-block rounded border border-white/25 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                About the company
              </Link>
            </div>

            <dl className="grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
              {[
                {
                  v: "4-20 mA",
                  k: "Industry-standard analogue output on the majority of models",
                },
                {
                  v: "IP67/68",
                  k: "Ingress protection on sealed field housings",
                },
                {
                  v: "316L",
                  k: "Wetted stainless on flow, level and pressure ranges",
                },
                {
                  v: "Modbus",
                  k: "RS485 available across controllers and transmitters",
                },
              ].map((s) => (
                <div key={s.v} className="bg-ink-800 p-6">
                  <dt className="font-mono text-xl font-medium text-brand-300 tnum">{s.v}</dt>
                  <dd className="mt-2 text-[12.5px] leading-relaxed text-ink-400">{s.k}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ======================== CTA ======================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-xl border border-ink-200">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 px-8 py-12 sm:px-12">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900">
                Send the process conditions and we will specify the instrument
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600">
                Medium, pressure, temperature, pipe or vessel size, and the signal your control
                system accepts — that is enough for us to come back with a model, a price and a
                lead time. If a catalogue item will not do, we say what will.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact?intent=quote"
                  className="rounded bg-brand-600 px-6 py-3.5 text-[14.5px] font-medium text-white transition-colors hover:bg-brand-700"
                >
                  Request a quote
                </Link>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="rounded border border-ink-300 px-6 py-3.5 text-[14.5px] font-medium text-ink-800 transition-colors hover:border-ink-400"
                >
                  {site.contact.email}
                </a>
              </div>
            </div>
            <div className="relative min-h-[240px] bg-ink-50 lg:col-span-5">
              <Image
                src="/images/products/hwt10-magnetic-level-transmitter.jpg"
                alt="HSM magnetic level transmitter"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
