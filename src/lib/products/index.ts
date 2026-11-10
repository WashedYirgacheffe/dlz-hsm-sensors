import type { CategorySlug, Product } from "@/lib/content-types";
import { flowProducts } from "@/lib/products/flow";
import { levelProducts } from "@/lib/products/level";
import { pressureProducts } from "@/lib/products/pressure";
import { temperatureProducts } from "@/lib/products/temperature";
import { ultrasonicProducts } from "@/lib/products/ultrasonic";
import { gasProducts } from "@/lib/products/gas";
import { displacementProducts } from "@/lib/products/displacement";
import { analyticalProducts } from "@/lib/products/analytical";
import { iotProducts } from "@/lib/products/iot";
import { motionProducts } from "@/lib/products/motion";

/**
 * The catalogue, assembled in the order products should be offered within
 * each category: workhorse models first, specials after.
 */
export const products: readonly Product[] = [
  ...flowProducts,
  ...levelProducts,
  ...pressureProducts,
  ...temperatureProducts,
  ...ultrasonicProducts,
  ...gasProducts,
  ...displacementProducts,
  ...analyticalProducts,
  ...iotProducts,
  ...motionProducts,
];

const bySlug = new Map(products.map((p) => [p.slug, p]));

export function getProduct(slug: string): Product | undefined {
  return bySlug.get(slug);
}

export function getProductsByCategory(category: CategorySlug): readonly Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductSlugs(): readonly string[] {
  return products.map((p) => p.slug);
}

/** Products featured on the home page and the "all products" index. */
export const featuredSlugs: readonly string[] = [
  "hsm10-thermal-flow-switch",
  "hwt10-magnetic-level-transmitter",
  "pdd3051-differential-pressure-transmitter",
  "tpt10-integrated-temperature-transmitter",
  "ub300-ultrasonic-sensor",
  "hps10-submersible-level-transmitter",
  "hms10-magnetostrictive-level-transmitter",
  "pcc216-pressure-controller",
];

export const featuredProducts: readonly Product[] = featuredSlugs
  .map((slug) => bySlug.get(slug))
  .filter((p): p is Product => p !== undefined);

/** Product count per category, used for the navigation and index pages. */
export function categoryCounts(): Record<CategorySlug, number> {
  const counts = {} as Record<CategorySlug, number>;
  for (const product of products) {
    counts[product.category] = (counts[product.category] ?? 0) + 1;
  }
  return counts;
}
