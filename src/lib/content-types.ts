/**
 * Content model for the catalogue.
 *
 * Every product page is generated from one of these records. The shape is
 * deliberately flat: specs are an ordered list of label/value pairs because
 * the source catalogue uses 290+ distinct labels and no two families share
 * the same schema. Ordering is preserved so tables read like a datasheet.
 */

export type CategorySlug =
  | "flow"
  | "level"
  | "pressure"
  | "temperature"
  | "ultrasonic"
  | "gas"
  | "displacement"
  | "analytical"
  | "iot"
  | "motion";

export interface SpecRow {
  /** English datasheet label, e.g. "Measuring range" */
  readonly label: string;
  /** English value, units preserved verbatim */
  readonly value: string;
}

export interface SpecGroup {
  readonly title: string;
  readonly rows: readonly SpecRow[];
}

export interface ProductApplication {
  readonly title: string;
  readonly body: string;
}

export interface Product {
  /** URL segment, lowercase kebab-case, unique across the catalogue */
  readonly slug: string;
  /** Model code as printed on the nameplate, e.g. "HSM10" */
  readonly model: string;
  /** Display name, e.g. "Thermal Flow Switch" */
  readonly name: string;
  /** Short qualifier shown after the name, e.g. "Standard / dual set-point" */
  readonly variant?: string;
  readonly category: CategorySlug;
  /** 40–60 word summary used on cards and meta descriptions */
  readonly summary: string;
  /** 80–140 word introduction used at the top of the detail page */
  readonly intro: string;
  /** 3–6 short benefit lines */
  readonly highlights: readonly string[];
  /** Ordered spec groups; the first group is rendered open */
  readonly specs: readonly SpecGroup[];
  /** Primary image path under /public/images/products */
  readonly image: string;
  /** Additional images, if any */
  readonly gallery?: readonly string[];
  /** Optional per-product notes (customisation, ordering, caveats) */
  readonly notes?: readonly string[];
  /** Typical buying scenarios, rendered as a short list */
  readonly applications?: readonly string[];
  /** Legacy URL on the old site, used to build 301 redirects */
  readonly legacyPath?: string;
}

export interface Category {
  readonly slug: CategorySlug;
  readonly name: string;
  readonly shortName: string;
  /** One-line positioning used in navigation and cards */
  readonly tagline: string;
  /** 90–150 word category introduction */
  readonly intro: string;
  /** Measured quantities covered, e.g. ["Flow rate", "Velocity"] */
  readonly measures: readonly string[];
  /** Outputs available across the family */
  readonly outputs: readonly string[];
  /** Ordering of products on the category page */
  readonly productOrder?: readonly string[];
}
