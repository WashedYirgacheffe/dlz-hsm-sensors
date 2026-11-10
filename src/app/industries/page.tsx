import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero, QuoteCta } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Industries — Oil & Gas, Water, Chemical, Power, Food",
  description:
    "How HSM industrial sensors are specified for oil and gas, chemical, water treatment, power generation, food and beverage, and pharmaceutical duties — including hazardous area, sanitary and high-pressure variants.",
  alternates: { canonical: "/industries" },
};

interface Industry {
  readonly id: string;
  readonly name: string;
  readonly lede: string;
  readonly problems: readonly { readonly title: string; readonly body: string }[];
  readonly products: readonly { readonly label: string; readonly href: string }[];
  readonly image: string;
  readonly imageAlt: string;
}

const industries: readonly Industry[] = [
  {
    id: "oil-gas",
    name: "Oil & gas",
    lede: "Separators, storage tanks, gathering lines and tank farms. The recurring requirements are hazardous-area certification, methane detection at a distance, and level instruments that keep working when the medium coats the sensor.",
    problems: [
      {
        title: "Leak detection on long lines",
        body: "A TDLAS methane detector measures absorption along the beam instead of at a point, so a patrol can sweep a flange stack or valve station from several metres away and find the leak without entering the hazard zone.",
      },
      {
        title: "Interface and product level in separators",
        body: "Magnetostrictive transmitters give continuous 4–20 mA or RS485 over 3–5 m of stroke with no moving parts in the vessel. A magnetic flip-column gauge alongside gives a local readout that needs no power at all.",
      },
      {
        title: "Pump protection on transfer duty",
        body: "A dry-running pump destroys itself in minutes. Thermal flow switches with no moving part in the flow path hold their set-point where a paddle switch would jam on wax or scale.",
      },
    ],
    products: [
      { label: "Laser methane detectors", href: "/products/gas" },
      { label: "Magnetostrictive level", href: "/products/level" },
      { label: "Differential pressure", href: "/products/pressure" },
    ],
    image: "/images/products/hsm1000-long-range-methane-detector.jpg",
    imageAlt: "HSM laser methane detector",
  },
  {
    id: "chemical",
    name: "Chemical & petrochemical",
    lede: "Aggressive media, coating products, foam and exothermic reactions. Wetted material and the measuring principle matter more here than accuracy class — an instrument that survives the medium beats one that is precise for a month.",
    problems: [
      {
        title: "Media that coats the sensor",
        body: "Capacitive level transmitters tolerate build-up better than contact switches, and the microwave switch detects through the vessel wall when even a coated probe is a liability.",
      },
      {
        title: "Corrosion on wetted parts",
        body: "SUS 316L is the default across the flow, level and pressure ranges. Where the medium attacks 316L, the probe material and process connection are specified at enquiry rather than assumed.",
      },
      {
        title: "Small skids without a PLC",
        body: "Pressure controllers with four or five relay outputs trip pumps, valves and alarms directly from the keypad — no separate control system on a dosing or transfer skid.",
      },
    ],
    products: [
      { label: "Capacitive level", href: "/products/level" },
      { label: "Pressure controllers", href: "/products/pressure" },
      { label: "Flow switches", href: "/products/flow" },
    ],
    image: "/images/products/pcc216-pressure-controller.jpg",
    imageAlt: "PCC216 pressure controller with relay outputs",
  },
  {
    id: "water",
    name: "Water & wastewater",
    lede: "Treatment works, pumping stations, reservoirs and distribution networks. Instruments here are bought in quantity, installed outdoors, and expected to run for years without attention.",
    problems: [
      {
        title: "Wet wells and deep reservoirs",
        body: "Submersible hydrostatic transmitters convert head into 4–20 mA and are rated IP68, so the cable gland and body survive permanent immersion rather than a splash.",
      },
      {
        title: "Pump station flow confirmation",
        body: "Thermal flow switches confirm that a duty pump is actually moving water, and trip the standby when it is not — without a paddle to foul on rags and grit.",
      },
      {
        title: "Aeration basin dissolved oxygen",
        body: "The DOG-208FA electrode and DOG200 meter cover the aeration control loop, from the raw electrode to a panel-mounted instrument with relay outputs.",
      },
    ],
    products: [
      { label: "Submersible level", href: "/products/level" },
      { label: "Dissolved oxygen", href: "/products/analytical" },
      { label: "Flow switches", href: "/products/flow" },
    ],
    image: "/images/products/hps10-submersible-level-transmitter.jpg",
    imageAlt: "HPS10 submersible level transmitter",
  },
  {
    id: "power",
    name: "Power generation",
    lede: "Boiler level, steam-side pressure, turbine and switchgear monitoring. The unusual requirement is measurement in places where a metal probe or a copper conductor is itself the hazard.",
    problems: [
      {
        title: "Hotspots on high-voltage plant",
        body: "Fluorescent fibre-optic temperature sensing runs a purely dielectric path to the measurement point and withstands 100 kV at the fibre lead — used on switchgear, busbars and transformer windings.",
      },
      {
        title: "Boiler and feedwater level",
        body: "Magnetic flip-column gauges give a local indication that cannot fail electronically, with an optional 4–20 mA transmitter on the same column for the DCS.",
      },
      {
        title: "Steam-side pressure",
        body: "Differential and gauge pressure transmitters to 40 MPa with a 40:1 turndown, in stainless housings with G1/2 or M20×1.5 connections.",
      },
    ],
    products: [
      { label: "Fibre-optic temperature", href: "/products/temperature" },
      { label: "Magnetic level gauges", href: "/products/level" },
      { label: "Pressure transmitters", href: "/products/pressure" },
    ],
    image: "/images/products/fibre-optic-temperature-system.jpg",
    imageAlt: "Fibre-optic temperature sensing system",
  },
  {
    id: "food",
    name: "Food & beverage",
    lede: "Hygienic duty where the instrument is cleaned in place, and where a crevice is a contamination risk. Smooth wetted surfaces, no threaded pockets, and materials that survive caustic washdown.",
    problems: [
      {
        title: "Clean-in-place washdown",
        body: "Sealed stainless housings rated IP67 and IP68 survive the wash cycle, and the absence of a paddle or vane in a flow switch removes a crevice that product can collect in.",
      },
      {
        title: "Sanitary level and temperature",
        body: "PEEK and stainless level switches plus Pt100 probes in stainless sheaths, with probe length and thread made to order to suit the vessel connection.",
      },
      {
        title: "pH and dissolved oxygen in process",
        body: "The PHG-2091Pro controller and DOG200 meter bring the analytical loop into a panel with relay outputs for dosing.",
      },
    ],
    products: [
      { label: "Sanitary level", href: "/products/level" },
      { label: "RTD probes", href: "/products/temperature" },
      { label: "pH & DO analysis", href: "/products/analytical" },
    ],
    image: "/images/products/hls01-cable-float-switch.jpg",
    imageAlt: "HLS01 cable float level switch",
  },
  {
    id: "pharma",
    name: "Pharmaceutical",
    lede: "Repeatable batches, documented calibration, and equipment that has to be identical across every line. The purchasing driver is consistency, not the lowest unit price.",
    problems: [
      {
        title: "Identical commissioning across lines",
        body: "The digital thermal flow switch is set with two front-panel keys and shows live velocity on an LED display, so every unit on every line trips at the same value rather than at whatever the screw position happened to be.",
      },
      {
        title: "Traceable calibration",
        body: "Each transmitter is pressure- and insulation-tested before dispatch, and the individual calibration record is supplied with the instrument.",
      },
      {
        title: "Filling and dispensing position",
        body: "The HSM41 laser displacement sensor resolves 50–400 mm on a 655 nm spot for dispensing and fill-height work, with a TOF variant reaching 2.5 m.",
      },
    ],
    products: [
      { label: "Digital flow switches", href: "/products/flow" },
      { label: "Laser displacement", href: "/products/displacement" },
      { label: "Temperature probes", href: "/products/temperature" },
    ],
    image: "/images/products/hsm30-thermal-flow-switch-digital.jpg",
    imageAlt: "HSM30 digital thermal flow switch",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Where these instruments run"
        lede="Six industries take most of what leaves the factory. Each has its own failure modes — fouling, corrosion, vibration, hazardous area classification, washdown — and the instrument has to be specified for the one that applies, not for the catalogue photograph."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        actions={[
          { label: "Request a quote", href: "/contact?intent=quote", primary: true },
          { label: "Browse the catalogue", href: "/products" },
        ]}
      />

      {/* Anchor navigation */}
      <nav aria-label="Industries" className="border-b border-ink-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <ul className="flex snap-x gap-1 overflow-x-auto py-3">
            {industries.map((industry) => (
              <li key={industry.id} className="snap-start">
                <a
                  href={`#${industry.id}`}
                  className="block whitespace-nowrap rounded px-3 py-1.5 text-[12.5px] text-ink-600 transition-colors hover:bg-ink-50 hover:text-brand-700"
                >
                  {industry.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`scroll-mt-24 border-b border-ink-200 ${
            index % 2 === 1 ? "bg-ink-50" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-600">
                  {String(index + 1).padStart(2, "0")} — Application
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900">
                  {industry.name}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-700">{industry.lede}</p>

                <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg border border-ink-200 bg-white">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-10"
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.products.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="rounded border border-ink-300 bg-white px-3 py-1.5 text-[12.5px] font-medium text-ink-800 transition-colors hover:border-brand-400 hover:text-brand-700"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <ul className="grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200">
                  {industry.problems.map((problem) => (
                    <li key={problem.title} className="bg-white p-6">
                      <h3 className="text-[15px] font-semibold tracking-tight text-ink-900">
                        {problem.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                        {problem.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <QuoteCta
        title="Working in an industry that is not listed?"
        body="The catalogue covers the common duties; the engineering team covers the rest. Send the medium, temperature, pressure and area classification and we will say what will hold."
      />
    </>
  );
}
