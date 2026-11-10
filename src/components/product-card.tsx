import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/content-types";
import { getCategory } from "@/lib/categories";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

/**
 * Catalogue card. The image sits on a light instrument-panel field so
 * transparent product PNGs and white-background JPGs sit consistently.
 */
export function ProductCard({ product, priority = false }: ProductCardProps) {
  const category = getCategory(product.category);

  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-ink-200 bg-white transition-all duration-200 hover:border-brand-300 hover:shadow-lg hover:shadow-ink-900/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-ink-100 bg-ink-50">
        <Image
          src={product.image}
          alt={`${product.model} ${product.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.04]"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-600">
            {product.model}
          </span>
          {category && (
            <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-400">
              {category.shortName}
            </span>
          )}
        </div>
        <h3 className="mt-2 text-[16.5px] font-semibold leading-snug tracking-tight text-ink-900 group-hover:text-brand-700">
          {product.name}
        </h3>
        {product.variant && (
          <p className="mt-0.5 text-[12.5px] text-ink-500">{product.variant}</p>
        )}
        <p className="mt-2.5 line-clamp-3 text-[13px] leading-relaxed text-ink-600">
          {product.summary}
        </p>
        <span className="mt-auto flex items-center gap-1.5 pt-4 text-[12.5px] font-medium text-brand-600">
          View specifications
          <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
            <path
              d="M1 5h11M8.5 1.5L12 5l-3.5 3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
