import { site } from "@/lib/site";
import type { Category, Product } from "@/lib/content-types";

/**
 * JSON-LD builders.
 *
 * Only facts that appear on the page are emitted — a rich result that
 * contradicts the visible content is worse than no rich result. Deliberately
 * absent: aggregateRating, review, price. We have no verified reviews and
 * prices are quoted per enquiry, so claiming either would be fabricated.
 */

const ORG_ID = `${site.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/brand/icon-512.png`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.contact.email,
      telephone: site.contact.phone,
      availableLanguage: ["en", "zh"],
      areaServed: "Worldwide",
    },
    sameAs: [site.social.linkedin, site.social.youtube].filter(Boolean),
  };
}

export function productSchema(product: Product, category: Category) {
  const url = `${site.url}/products/${product.category}/${product.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: `${product.model} ${product.name}`,
    sku: product.model,
    mpn: product.model,
    description: product.summary,
    image: `${site.url}${product.image}`,
    url,
    category: category.name,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: {
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
    },
    // No offers block: price is quoted per enquiry and there is no
    // purchasable offer on the site, so an offer node would be a false claim.
  };
}

export function breadcrumbSchema(items: readonly { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${site.url}${item.href}` } : {}),
    })),
  };
}
