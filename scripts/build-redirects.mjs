// Generates src/redirects.data.json from the product content modules.
//
// next.config.ts cannot import the product modules directly: they use the
// `@/` path alias, which exists in the TypeScript/bundler resolver but not
// in the Node loader that reads the config. So the mapping is materialised
// as plain JSON once, and regenerated whenever the catalogue changes.
//
// Run: node scripts/build-redirects.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const MODULES = [
  "flow",
  "level",
  "pressure",
  "temperature",
  "ultrasonic",
  "gas",
  "displacement",
  "analytical",
  "iot",
  "motion",
];

// The product modules are plain object literals, so the fields we need can
// be read with targeted regexes rather than by executing the TypeScript.
const legacy = [];

for (const name of MODULES) {
  const source = readFileSync(join(root, "src/lib/products", `${name}.ts`), "utf8");

  const slugRe = /slug:\s*"([^"]+)"/g;
  const legacyRe = /legacyPath:\s*"([^"]+)"/g;

  const slugs = [...source.matchAll(slugRe)].map((m) => m[1]);
  const paths = [...source.matchAll(legacyRe)].map((m) => m[1]);

  if (slugs.length !== paths.length) {
    throw new Error(
      `${name}.ts: ${slugs.length} slugs but ${paths.length} legacyPath values — every product needs one.`,
    );
  }

  slugs.forEach((slug, i) => {
    legacy.push({ source: paths[i], destination: `/products/${name}/${slug}`, permanent: true });
  });
}

const out = join(root, "src/redirects.data.json");
writeFileSync(out, JSON.stringify(legacy, null, 2) + "\n", "utf8");

console.log(`Wrote ${legacy.length} legacy redirects to src/redirects.data.json`);
