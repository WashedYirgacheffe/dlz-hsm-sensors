"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/lib/site";
import { categories } from "@/lib/categories";
import { categoryCounts } from "@/lib/products";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1l4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const counts = categoryCounts();
  const totalProducts = Object.values(counts).reduce((a, b) => a + b, 0);

  // Close menus on route change
  useEffect(() => {
    setProductsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 140);
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  return (
    <>
      {/* Utility bar */}
      <div className="hidden border-b border-ink-200 bg-ink-50 text-ink-600 lg:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-2 text-[13px]">
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            Factory-direct manufacturer · Xiamen, China · Exporting worldwide
          </p>
          <div className="flex items-center gap-6">
            <a href={site.contact.phoneHref} className="transition-colors hover:text-brand-600">
              {site.contact.phone}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="transition-colors hover:text-brand-600"
            >
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/brand/logo.png"
              alt=""
              width={44}
              height={35}
              className="h-9 w-auto"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="text-[19px] font-semibold tracking-tight text-ink-900">
                HSM Sensors
              </span>
              <span className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-500">
                Flow · Level · Pressure
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
            <div
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setProductsOpen(true);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium text-ink-700 transition-colors hover:text-brand-600"
                aria-expanded={productsOpen}
                aria-haspopup="true"
                onClick={() => setProductsOpen((v) => !v)}
              >
                Products
                <ChevronIcon open={productsOpen} />
              </button>

              {productsOpen && (
                <div
                  className="absolute left-0 top-full w-[640px] rounded-lg border border-ink-200 bg-white p-2 shadow-xl shadow-ink-900/5"
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/products/${c.slug}`}
                        className="group flex flex-col rounded-md px-3 py-2.5 transition-colors hover:bg-brand-50"
                      >
                        <span className="flex items-baseline justify-between gap-2">
                          <span className="text-[13.5px] font-medium text-ink-800 group-hover:text-brand-700">
                            {c.name}
                          </span>
                          <span className="font-mono text-[11px] text-ink-400">
                            {counts[c.slug] ?? 0}
                          </span>
                        </span>
                        <span className="mt-0.5 line-clamp-1 text-[11.5px] leading-snug text-ink-500">
                          {c.tagline}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-1 flex items-center justify-between border-t border-ink-100 px-3 py-2.5">
                    <span className="text-[12px] text-ink-500">
                      {totalProducts} models across {categories.length} families
                    </span>
                    <Link
                      href="/products"
                      className="text-[12.5px] font-medium text-brand-600 hover:text-brand-700"
                    >
                      View all products →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {mainNav
              .filter((n) => n.href !== "/products")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-[14px] font-medium transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-brand-600"
                      : "text-ink-700 hover:text-brand-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <Link
              href="/contact?intent=quote"
              className="hidden rounded bg-brand-600 px-4 py-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-brand-700 sm:inline-block"
            >
              Request a quote
            </Link>
            <button
              type="button"
              className="rounded border border-ink-200 p-2.5 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                {mobileOpen ? (
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6h14M3 10h14M3 14h14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[57px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="px-4 py-4" aria-label="Mobile">
            <p className="eyebrow mb-2 px-2">Products</p>
            <ul className="mb-6 grid gap-0.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="flex items-center justify-between rounded px-2 py-2.5 text-[15px] text-ink-800 active:bg-ink-100"
                  >
                    {c.name}
                    <span className="font-mono text-[11px] text-ink-400">
                      {counts[c.slug] ?? 0}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="flex items-center px-2 py-2.5 text-[15px] font-medium text-brand-600"
                >
                  All products →
                </Link>
              </li>
            </ul>
            <p className="eyebrow mb-2 px-2">Company</p>
            <ul className="grid gap-0.5 border-t border-ink-200 pt-2">
              {mainNav
                .filter((n) => n.href !== "/products")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded px-2 py-2.5 text-[15px] text-ink-800 active:bg-ink-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
            <div className="mt-6 grid gap-2 border-t border-ink-200 pt-4">
              <Link
                href="/contact?intent=quote"
                className="rounded bg-brand-600 px-4 py-3 text-center text-[15px] font-medium text-white"
              >
                Request a quote
              </Link>
              <a
                href={`mailto:${site.contact.email}`}
                className="rounded border border-ink-200 px-4 py-3 text-center text-[15px] text-ink-800"
              >
                {site.contact.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
