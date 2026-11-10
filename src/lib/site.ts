/**
 * Single source of truth for company facts used across the site,
 * structured data, emails and metadata.
 *
 * Values that must differ per environment (canonical origin, inbound
 * address) come from env vars so nothing is hardcoded per deploy.
 */

function requiredInProd(name: string, fallback: string): string {
  const value = process.env[name];
  if (value && value.length > 0) return value;
  if (process.env.NODE_ENV === "production" && process.env.CI !== "true") {
    // Not throwing: a missing mail address must never take the site down.
    return fallback;
  }
  return fallback;
}

export interface NavChild {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
}

export interface NavGroup {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavChild[];
}

/**
 * Resolves the canonical origin, in priority order:
 *
 *   1. NEXT_PUBLIC_SITE_URL — set this once the custom domain is attached.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's stable production hostname,
 *      present automatically on every deployment.
 *   3. VERCEL_URL — the per-deployment hostname, so preview builds emit
 *      canonicals pointing at themselves rather than at localhost.
 *   4. localhost, for `npm run dev`.
 *
 * Without steps 2–3 a deploy with no env vars emits
 * `<link rel="canonical" href="http://localhost:3000/...">`, which tells
 * Google the real page lives on the visitor's own machine.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  const vercelDeployment = process.env.VERCEL_URL;
  if (vercelDeployment) return `https://${vercelDeployment}`;

  return "http://localhost:3000";
}

export const site = {
  name: "HSM Sensors",
  legalName: "HSM Sensors Technology (Xiamen) Co., Ltd.",
  chineseName: "海思迈（厦门）传感技术有限公司",
  tagline: "Industrial Sensors, Engineered and Built in Xiamen",
  description:
    "Manufacturer of industrial flow, level, pressure, temperature, ultrasonic and gas sensors with 4-20 mA, RS485 and relay outputs. Factory-direct pricing, custom ranges, worldwide shipping from Xiamen, China.",
  url: resolveSiteUrl(),
  /**
   * Founding year is deliberately absent. The legacy site never states one,
   * and a made-up date on an "About" page is exactly the kind of claim a
   * procurement team will check. Add it here once the user confirms the year
   * from the business licence, and it will flow to the header, footer and
   * Organization structured data.
   */
  founded: null as number | null,
  contact: {
    email: requiredInProd("NEXT_PUBLIC_SALES_EMAIL", "157583564@qq.com"),
    phone: "+86 130 0393 6813",
    phoneHref: "tel:+8613003936813",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
    wechat: "13003936813",
    hours: "Mon–Fri, 09:00–18:00 (GMT+8)",
  },
  address: {
    street: "No. 582 Hengtian Road, Jimei District",
    city: "Xiamen",
    region: "Fujian",
    postalCode: "361000",
    country: "CN",
    countryName: "China",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE ?? "",
  },
} as const;

export const mainNav: readonly NavGroup[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Flow Sensors", href: "/products/flow", description: "Thermal flow switches, flow controllers" },
      { label: "Level Sensors", href: "/products/level", description: "Float, magnetic, capacitive, radar-free level" },
      { label: "Pressure Sensors", href: "/products/pressure", description: "Differential and gauge transmitters" },
      { label: "Temperature Sensors", href: "/products/temperature", description: "RTD probes and transmitters" },
      { label: "Ultrasonic Sensors", href: "/products/ultrasonic", description: "Proximity and distance sensing" },
      { label: "Gas Detection", href: "/products/gas", description: "Laser methane detectors" },
      { label: "Displacement", href: "/products/displacement", description: "Linear position transducers" },
      { label: "Analytical", href: "/products/analytical", description: "Dissolved oxygen instruments" },
      { label: "Industrial IoT", href: "/products/iot", description: "Wireless sensors and edge gateways" },
      { label: "Motion & Metering", href: "/products/motion", description: "Encoders, laser sensors, load cells" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Custom Engineering", href: "/custom" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const trustPoints = [
  {
    title: "Factory-direct",
    body: "Every unit is assembled and calibrated in our own Xiamen facility — no trading company in between.",
  },
  {
    title: "Custom ranges",
    body: "Non-standard lengths, threads, materials and output ranges are built to order, not refused.",
  },
  {
    title: "Sample units",
    body: "Standard catalogue items are available as evaluation samples before you commit to a production order.",
  },
  {
    title: "Standards-based build",
    body: "Every model is designed and manufactured to the applicable national and industry standards.",
  },
] as const;
