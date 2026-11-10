import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, QuoteCta } from "@/components/page-hero";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources — Selection Guides, Output Signals, Datasheets",
  description:
    "How to specify an industrial sensor: choosing between relay, 4-20 mA, 0-10 V and RS485 outputs; picking a level principle; reading ingress protection ratings. Plus datasheet and certificate requests.",
  alternates: { canonical: "/resources" },
};

const outputSignals = [
  {
    signal: "Dry contact / relay",
    use: "Switching a pump, valve, alarm or interlock directly. No controller required.",
    watch: "Relay contacts have a finite switching life; a contact rated 1 A will not start a 5 A motor without a contactor.",
    models: "HWS, HLS, HTS float and magnetic switches, flow switches, pressure controllers",
  },
  {
    signal: "PNP / NPN",
    use: "Machine control — PLC digital input, conveyor logic, OEM equipment.",
    watch: "Sinking versus sourcing is not interchangeable. Order the type the input card expects.",
    models: "HSM flow switches, UB ultrasonic sensors, HSM41 laser displacement",
  },
  {
    signal: "4–20 mA (2-wire)",
    use: "Long cable runs into a PLC analogue card or DCS. Immune to volt-drop over distance.",
    watch: "The loop needs a minimum supply voltage that rises with the total loop resistance.",
    models: "PDD pressure transmitters, HPS submersible level, TPT temperature transmitters",
  },
  {
    signal: "0–10 V / 1–5 V",
    use: "Short runs inside a cabinet, or into a controller with voltage inputs.",
    watch: "Voltage signals degrade over distance and pick up noise. Keep the run short.",
    models: "Selected transmitters and displacement transducers",
  },
  {
    signal: "RS485 Modbus RTU",
    use: "Multiple instruments on one pair of wires into a PLC, gateway or SCADA.",
    watch: "Every device needs a unique address on the bus, and the bus needs termination at both ends.",
    models: "HPS submersible level, TPT100, edge gateway, power meter",
  },
  {
    signal: "Wireless — 4G / LoRa / NB-IoT",
    use: "Sites with no mains power and no cable route: pipelines, reservoirs, heating networks.",
    watch: "Battery life depends on reporting interval and signal strength; confirm both before sizing.",
    models: "Wireless pressure, temperature, level and gas instruments",
  },
];

const levelPrinciples = [
  {
    principle: "Float switch",
    good: "A discrete point — pump start/stop, high alarm. No power needed for the switch itself.",
    avoid: "Continuous measurement. Sticky media that will not release a float.",
    href: "/products/level",
  },
  {
    principle: "Magnetic flip-column gauge",
    good: "Local indication with no electronics at all, plus an optional 4–20 mA transmitter on the same column.",
    avoid: "Media that crystallise on the column, and narrow ranges where resolution is poor.",
    href: "/products/level",
  },
  {
    principle: "Magnetostrictive transmitter",
    good: "Continuous 4–20 mA or RS485 over 3–5 m with no moving parts in the vessel.",
    avoid: "Foam and vapour that confuse the float, unless the float is specified for it.",
    href: "/products/level",
  },
  {
    principle: "Hydrostatic (submersible)",
    good: "Deep wells and reservoirs. Rated IP68, so permanent immersion is fine.",
    avoid: "Vessels under pressure, and media with varying density — head is not level.",
    href: "/products/level",
  },
  {
    principle: "Capacitive",
    good: "Viscous and coating media, and aggressive chemistry where a contact probe survives better.",
    avoid: "Build-up that changes the dielectric, unless the probe is specified for it.",
    href: "/products/level",
  },
  {
    principle: "Microwave through-wall",
    good: "Foam, build-up or aggressive chemistry where even a coated probe is a liability.",
    avoid: "Thick or metallic vessel walls between sensor and medium.",
    href: "/products/level",
  },
];

const ipRatings = [
  { code: "IP65", meaning: "Dust-tight; protected against water jets from any direction." },
  { code: "IP67", meaning: "Dust-tight; protected against temporary immersion to 1 m for 30 minutes." },
  { code: "IP68", meaning: "Dust-tight; protected against continuous immersion at a stated depth and duration." },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Specifying an instrument without a sales call"
        lede="Three things decide most sensor orders: the measuring principle, the output signal your panel accepts, and the environmental rating. These pages cover all three, so an enquiry can start from a shortlist rather than a blank page."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        actions={[
          { label: "Request a datasheet", href: "/contact?intent=datasheet", primary: true },
          { label: "Browse the catalogue", href: "/products" },
        ]}
      />

      {/* Output signals */}
      <section id="outputs" className="scroll-mt-24 mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Reference · Output signals</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.2rem]">
            Which output do you need?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
            The output is usually the first thing to fix, because it decides what the control
            system has to do with the measurement — and whether you need a control system at
            all.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-lg border border-ink-200">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <caption className="sr-only">
              Industrial sensor output signals, their typical use, and what to watch for
            </caption>
            <thead className="bg-ink-50">
              <tr>
                {["Signal", "When to use it", "What to watch", "Where it appears"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="border-b border-ink-200 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {outputSignals.map((row) => (
                <tr key={row.signal} className="border-b border-ink-100 last:border-b-0">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-4 align-top text-[13px] font-semibold text-ink-900"
                  >
                    {row.signal}
                  </th>
                  <td className="px-4 py-4 align-top text-[12.5px] leading-relaxed text-ink-700">
                    {row.use}
                  </td>
                  <td className="px-4 py-4 align-top text-[12.5px] leading-relaxed text-ink-600">
                    {row.watch}
                  </td>
                  <td className="px-4 py-4 align-top text-[12px] leading-relaxed text-ink-500">
                    {row.models}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12px] text-ink-500 md:hidden">
          Scroll the table sideways to read all four columns.
        </p>
      </section>

      {/* Level principles */}
      <section className="border-y border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Reference · Level measurement</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.2rem]">
              Six level principles, and when each one fails
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
              Level is the widest part of the catalogue because no single principle suits every
              tank. The column that matters is the second one — the conditions where each
              principle is the wrong choice.
            </p>
          </div>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 lg:grid-cols-2">
            {levelPrinciples.map((p) => (
              <li key={p.principle} className="bg-white p-6">
                <h3 className="text-[15px] font-semibold tracking-tight text-ink-900">
                  {p.principle}
                </h3>
                <dl className="mt-3 space-y-2.5">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-brand-600">
                      Good for
                    </dt>
                    <dd className="mt-1 text-[12.5px] leading-relaxed text-ink-700">{p.good}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500">
                      Avoid when
                    </dt>
                    <dd className="mt-1 text-[12.5px] leading-relaxed text-ink-600">{p.avoid}</dd>
                  </div>
                </dl>
                <Link
                  href={p.href}
                  className="mt-4 inline-block text-[12.5px] font-medium text-brand-600 hover:text-brand-700"
                >
                  Level models →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* IP ratings */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">Reference · Environmental rating</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-[1.9rem]">
              Reading an IP code
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
              The first digit is solids, the second is water. The catalogue ratings below are
              the ones that appear across the product range; a higher number is not
              automatically better if the installation never sees water.
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-500">
              Note that IP68 requires a stated depth and duration — an IP68 claim without those
              two numbers is not meaningful.
            </p>
          </div>
          <dl className="lg:col-span-7 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200">
            {ipRatings.map((r) => (
              <div key={r.code} className="flex flex-col gap-1 bg-white p-5 sm:flex-row sm:items-baseline sm:gap-6">
                <dt className="w-20 shrink-0 font-mono text-[14px] font-medium text-brand-600">
                  {r.code}
                </dt>
                <dd className="text-[13px] leading-relaxed text-ink-700">{r.meaning}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Datasheets and certificates */}
      <section id="catalogue" className="scroll-mt-24 border-y border-ink-200 bg-ink-900">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow !text-brand-300">Documentation</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-[2.2rem]">
                Datasheets, drawings and certificates
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
                The specification tables on every product page are the current published data.
                For a purchase, an installation or an import file you usually need the document
                underneath it — the PDF datasheet for the exact model, a dimensioned drawing, or
                the certificate scans. Those are issued per request rather than posted publicly,
                because the revision has to match the unit you are buying.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact?intent=datasheet"
                  className="rounded bg-brand-500 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-brand-400"
                >
                  Request documentation
                </Link>
                <a
                  href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Datasheet request")}`}
                  className="rounded border border-white/25 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
                >
                  {site.contact.email}
                </a>
              </div>
            </div>

            <ul className="lg:col-span-6 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
              {[
                { t: "PDF datasheet", b: "The current revision for the model, in English." },
                { t: "Dimensioned drawing", b: "For installation clearance and connection layout." },
                { t: "Calibration / test record", b: "For the individual unit, where the project requires it." },
                { t: "CE / ISO / RoHS scans", b: "For import and tender files." },
                { t: "Material certificate", b: "Wetted-part material traceability on request." },
                { t: "Selection shortlist", b: "Two or three candidate models against your process conditions." },
              ].map((d) => (
                <li key={d.t} className="bg-ink-800 p-5">
                  <h3 className="text-[13.5px] font-semibold text-white">{d.t}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-ink-400">{d.b}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Family index */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-[1.9rem]">
          Browse by family
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/products/${c.slug}`}
                className="group flex items-baseline justify-between gap-3 rounded-lg border border-ink-200 bg-white px-5 py-4 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <span className="text-[14px] font-medium text-ink-900 group-hover:text-brand-700">
                  {c.name}
                </span>
                <span className="shrink-0 font-mono text-[11px] text-ink-400">
                  {products.filter((p) => p.category === c.slug).length}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <QuoteCta />
    </>
  );
}
