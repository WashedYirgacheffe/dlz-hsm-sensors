import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, QuoteCta } from "@/components/page-hero";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About HSM Sensors — Sensor Manufacturer in Xiamen, China",
  description: `HSM Sensors Technology (Xiamen) Co., Ltd. designs, assembles and calibrates industrial flow, level, pressure, temperature and gas instrumentation at its facility in Jimei District, Xiamen. ${products.length} catalogue models plus custom builds.`,
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Factory-direct, not a trading desk",
    body: "Enquiries are answered by the engineering team that sets the production parameters. A non-standard thread, a longer probe or a 450 °C variant is a normal order rather than an exception, because the person quoting it is the person building it.",
  },
  {
    title: "Built to national and industry standards",
    body: "Every model is designed and manufactured to the applicable Chinese national and industry standards. Where a project calls for CE, ISO or RoHS documentation, the certificate is supplied with the quotation or the shipment.",
  },
  {
    title: "Developed with university research partners",
    body: "Several product lines were developed jointly with university research groups, which is how the fibre-optic and laser-absorption instruments entered the range alongside the conventional switches and transmitters.",
  },
  {
    title: "Documentation supplied per project",
    body: "Every unit is assembled and calibrated in our own facility. Test records, material certificates and CE or RoHS scans are supplied on request with the quotation, matched to the revision you are buying.",
  },
];

const capabilities = [
  { label: "Measurement families", value: "10" },
  { label: "Catalogue models", value: String(products.length) },
  { label: "Wetted material standard", value: "SUS 316L" },
  { label: "Ingress protection", value: "IP65–IP68" },
  { label: "Output signals", value: "Relay · 4–20 mA · RS485" },
  { label: "Documentation", value: "National & industry standards" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A sensor factory in Jimei District, Xiamen"
        lede="HSM Sensors designs, assembles and calibrates industrial instrumentation under one roof. The catalogue covers ten measurement families and 66 models; the engineering team behind it covers the variants that are not in the catalogue."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        actions={[
          { label: "Request a quote", href: "/contact?intent=quote", primary: true },
          { label: "Browse the catalogue", href: "/products" },
        ]}
      />

      {/* Company + capability figures */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">The company</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.2rem]">
              {site.legalName}
            </h2>
            <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-500">
              {site.chineseName}
            </p>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-ink-700">
              <p>
                We are a sensor manufacturer based in Xiamen, Fujian. The product range spans
                flow, level, pressure, temperature, ultrasonic, gas, displacement, analytical,
                motion and wireless instrumentation — the instruments that sit between a
                process and the control system that has to know what the process is doing.
              </p>
              <p>
                A large part of the range was developed with university research partners and
                is manufactured under a documented management system, with every model
                designed and built to the applicable national and industry standards. That
                combination — conventional industrial instruments alongside laser-absorption
                and fibre-optic sensing — is what lets us answer both a standard pump-protection
                enquiry and a switchgear hotspot measurement from the same engineering desk.              </p>
              <p>
                What that means for a buyer is narrow and practical: you are dealing with the
                factory. Ranges, threads, probe lengths, materials and output signals are set
                on the line, so a specification that does not match the catalogue is a
                conversation rather than a refusal.
              </p>
            </div>

            <div className="mt-8 rounded-lg border border-ink-200 bg-ink-50 p-5">
              <h3 className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-500">
                Registered address
              </h3>
              <address className="mt-2 not-italic text-[14px] leading-relaxed text-ink-800">
                {site.address.street}
                <br />
                {site.address.city} {site.address.postalCode}, {site.address.region},{" "}
                {site.address.countryName}
              </address>
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl className="grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2">
              {capabilities.map((c) => (
                <div key={c.label} className="bg-white p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500">
                    {c.label}
                  </dt>
                  <dd className="mt-1.5 text-[15px] font-medium leading-snug text-ink-900 tnum">
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-lg border border-ink-200 bg-white">
              <Image
                src="/images/products/hsm300-wearable-methane-detector.jpg"
                alt="HSM300 wearable laser methane detector"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.2rem]">
              Four commitments a buyer can test
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
              Each of these is checkable on the first order rather than a claim to be taken on
              trust — which is why they are the four we put in writing.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="bg-white p-6 lg:p-7">
                <h3 className="text-[15.5px] font-semibold tracking-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we make */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">What we make</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.2rem]">
              Ten measurement families
            </h2>
          </div>
          <Link
            href="/products"
            className="text-[13.5px] font-medium text-brand-600 hover:text-brand-700"
          >
            All {products.length} models →
          </Link>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/products/${c.slug}`}
                className="group flex h-full flex-col rounded-lg border border-ink-200 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <h3 className="text-[14.5px] font-semibold tracking-tight text-ink-900 group-hover:text-brand-700">
                  {c.name}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-600">{c.tagline}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <QuoteCta
        title="Want to audit the factory before you order?"
        body="Ask for a video walk-through of the assembly and calibration areas, or request the documentation relevant to your project — standards conformity, material certificates or the certificate scans you need for import."
      />
    </>
  );
}
