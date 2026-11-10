# HSM Sensors — English site

Production build of `hsmsensors.com`. Next.js 16 (App Router), React 19,
Tailwind v4, TypeScript. Content lives in typed TypeScript modules; there is
no CMS.

## Running it

```bash
npm install
cp .env.example .env.local     # fill in what you have; most entries are optional
npm run dev
```

`npm run build` runs `scripts/build-redirects.mjs` first, which regenerates
`src/redirects.data.json` from the product modules. Run it again after adding
or renaming a product, or the old-site redirects will drift.

## What is here

| Route | Content |
| --- | --- |
| `/` | Hero with procedural 3D scene, families, featured models, industries |
| `/products` | All 66 models with client-side search and family filter |
| `/products/[category]` | Ten families, each with its own copy |
| `/products/[category]/[slug]` | Spec table, applications, related models |
| `/industries` | Six industries with the failure modes that decide the spec |
| `/custom` | What the factory can change, and how a custom order runs |
| `/about` | Company, principles, capabilities |
| `/resources` | Output-signal and level-principle references, IP ratings |
| `/contact` | RFQ form, prefilled when arriving from a product page |
| `/admin/inquiries` | Password-gated inquiry list |
| `/privacy`, `/terms` | Legal |

## Enquiries

`POST /api/inquiries` validates with Zod, drops honeypot and too-fast
submissions, rate-limits per IP, stores the record, then notifies by email
and WhatsApp. Notification failures never lose an inquiry — the record is
written first and delivery is best effort.

Storage is Supabase over PostgREST (`fetch`, no client library). Create the
table with `docs/inquiries.sql`. **Without `SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` the site still runs**, holding submissions in
memory; `/admin/inquiries` says so explicitly rather than pretending they
were saved.

All credentials are server-only. Nothing prefixed `NEXT_PUBLIC_` is secret.
`ADMIN_PASSWORD` must be at least 12 characters or the admin list stays
closed.

## Content rules

Two things to keep true when editing copy:

1. **No unverifiable claims.** The legacy site states no founding year, no
   lead times and no certificate numbers. `site.founded` is `null` for that
   reason and renders out of the header and footer; filling it in is a
   decision for the business, not a placeholder to guess at.
2. **Specs come from the catalogue.** Values in `src/lib/products/*.ts` are
   transcribed from the original datasheets. A number added from memory is
   worse than no number.

## Images

`public/images/products/` holds 79 product images named by slug. Three
models still use generated SVG placeholders (`hsm41` has since been replaced
by a photo); HWS10, HWT10 and TPS10 are the manufacturer's own line drawings,
not photography. Replacing them needs real photos of those exact models.
