import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, QuoteCta } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Sensor Engineering — Non-Standard Ranges, Threads, Materials",
  description:
    "Non-standard probe lengths, process threads, wetted materials, output signals and hazardous-area variants, built to order at the HSM factory in Xiamen. Send the process conditions for an engineering review.",
  alternates: { canonical: "/custom" },
};

const changeable = [
  {
    title: "Process connection",
    body: "G1/2 and M20×1.5 are standard across most families. Other thread standards, flange and sanitary connections are machined to the drawing.",
    detail: "Threads · flanges · vessel connections",
  },
  {
    title: "Probe length and diameter",
    body: "Level and temperature probes are cut and welded to the vessel depth you specify, in diameters from 3 mm upward depending on the family.",
    detail: "3 mm – 5 m depending on principle",
  },
  {
    title: "Wetted material",
    body: "SUS 316L is the default. Where the medium attacks 316L, the probe, flange and seal material are selected against the medium rather than assumed.",
    detail: "316L · PEEK · custom wetted parts",
  },
  {
    title: "Range and output",
    body: "Measuring ranges are set at calibration, and output type — relay, PNP/NPN, 4–20 mA, 0–10 V or RS485 — is selected at order.",
    detail: "Relay · analogue · Modbus RTU",
  },
  {
    title: "Housing and protection",
    body: "Standard housings are IP65–IP67. Submersible assemblies are rated IP68, and explosion-proof housings are available for the gas and pressure ranges.",
    detail: "IP65 – IP68 · Ex housings",
  },
  {
    title: "Temperature rating",
    body: "High-temperature versions extend the medium ceiling beyond the standard 80 °C — for example the HSM flow switches and the TPS/TPT probes rated to 450 °C and above.",
    detail: "To 450 °C and higher on selected families",
  },
];

const steps = [
  {
    n: "01",
    title: "Send the process conditions",
    body: "Medium, temperature, pressure, pipe or vessel size, area classification, and the signal your control system accepts. A sketch or a photograph of the existing installation is more useful than a specification.",
  },
  {
    n: "02",
    title: "Engineering review",
    body: "We come back with the nearest catalogue model, the changes needed, and any condition that the instrument cannot survive. If a catalogue item will do the job, we say so rather than quoting a special.",
  },
  {
    n: "03",
    title: "Drawing and quotation",
    body: "For a non-standard build you receive a dimensioned drawing and a quotation before anything is cut. Changes to the drawing at this stage cost nothing.",
  },
  {
    n: "04",
    title: "Build, calibrate, ship",
    body: "The unit is assembled and calibrated against the agreed specification, then supplied with its documentation. Repeat orders keep the same build parameters.",
  },
];

const common = [
  { q: "Longer probe than the catalogue", a: "Level and temperature probes are made to vessel depth." },
  { q: "Thread the plant already uses", a: "Other thread standards, flange and vessel connections machined to drawing." },
  { q: "Aggressive medium", a: "Wetted material selected against the medium, not against the default." },
  { q: "Signal the PLC accepts", a: "Relay, analogue or RS485 selected at order." },
  { q: "Higher temperature", a: "High-temperature variants on selected flow and temperature families." },
  { q: "Hazardous area", a: "Explosion-proof housings on the gas and pressure ranges." },
  { q: "OEM marking", a: "Neutral or customer-branded labelling for machine builders." },
  { q: "Repeat batch", a: "Build parameters held for reorders so a second batch matches the first." },
];

export default function CustomPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom engineering"
        title="The catalogue is the starting point, not the limit"
        lede="A non-standard thread, a longer probe, a different wetted material or a signal your control system already speaks — these are normal orders when the people quoting them are the people building them. Describe the duty and we will tell you what it takes."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Custom engineering" }]}
        actions={[
          { label: "Send the process conditions", href: "/contact?intent=custom", primary: true },
          { label: "Browse standard models", href: "/products" },
        ]}
      />

      {/* What can change */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">What can change</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.2rem]">
            Six parameters, set on the line
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
            These are the variables the factory can move without becoming a different product.
            Anything outside them is a development project, and we will say so at the review
            stage rather than after the order.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {changeable.map((c) => (
            <div key={c.title} className="flex flex-col bg-white p-6">
              <h3 className="text-[15px] font-semibold tracking-tight text-ink-900">{c.title}</h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-600">{c.body}</p>
              <p className="mt-4 border-t border-ink-100 pt-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-brand-600">
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-ink-200 bg-ink-900">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow !text-brand-300">How it runs</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-[2.2rem]">
              From process conditions to a unit on the bench
            </h2>
          </div>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="bg-ink-800 p-6">
                <span className="font-mono text-[11px] text-brand-300 tnum">{s.n}</span>
                <h3 className="mt-2 text-[14.5px] font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-ink-400">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Common asks */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">Common requests</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-[1.9rem]">
              What buyers usually ask for
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
              If your requirement is on this list, it has been built before and there is a
              known answer.
            </p>
          </div>

          <ul className="lg:col-span-8 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2">
            {common.map((c) => (
              <li key={c.q} className="bg-white p-5">
                <h3 className="text-[13.5px] font-semibold text-ink-900">{c.q}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-ink-600">{c.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Direct contact */}
      <section className="border-t border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold tracking-tight text-ink-900">
                Fastest route for a custom enquiry
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                Email the process conditions and any drawing or photograph of the existing
                installation. That skips the form and puts the enquiry straight in front of
                an engineer.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Custom sensor enquiry")}`}
                className="rounded bg-brand-600 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-700"
              >
                {site.contact.email}
              </a>
              <a
                href={site.contact.phoneHref}
                className="rounded border border-ink-300 bg-white px-5 py-3 text-[14px] font-medium text-ink-800 transition-colors hover:border-ink-400"
              >
                {site.contact.phone}
              </a>
            </div>
          </div>
          <p className="mt-6 text-[12.5px] text-ink-500">
            Not sure whether you need a custom build?{" "}
            <Link href="/products" className="font-medium text-brand-600 hover:text-brand-700">
              Start from the catalogue
            </Link>{" "}
            — most enquiries are answered by a standard model.
          </p>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
