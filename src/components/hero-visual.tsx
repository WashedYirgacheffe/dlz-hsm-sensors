"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * The 3D hero is loaded lazily and only on capable devices: no WebGL, a
 * narrow viewport, a data-saver connection or a reduced-motion preference
 * all fall back to a static product image. Shipping ~600 kB of three.js to
 * an industrial buyer on a 3G connection in a plant room is not a trade
 * worth making for a decorative object.
 */
const HeroScene = dynamic(() => import("@/components/hero-scene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function HeroFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-40 w-40 animate-pulse rounded-full bg-white/5" aria-hidden="true">
        <div className="absolute inset-8 rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl")),
    );
  } catch {
    return false;
  }
}

type Mode = "pending" | "3d" | "static";

export function HeroVisual({ onModeChange }: { onModeChange?: (mode: Mode) => void }) {
  const [mode, setMode] = useState<Mode>("pending");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const slow =
      "connection" in navigator &&
      // @ts-expect-error – Network Information API is not in lib.dom for all targets
      (navigator.connection?.saveData === true ||
        // @ts-expect-error – see above
        ["slow-2g", "2g"].includes(navigator.connection?.effectiveType));

    const decided: Mode =
      !reduced && wide && !slow && supportsWebGL() ? "3d" : "static";

    setMode(decided);
    onModeChange?.(decided);
  }, [onModeChange]);

  if (mode === "3d") return <HeroScene />;

  // While deciding, show the shimmer rather than flashing the photo and
  // then swapping it for the canvas.
  if (mode === "pending") return <HeroFallback />;

  // Static fallback: a real product photo, no motion, no JS payload.
  return (
    <div className="flex h-full w-full items-center justify-center px-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/products/hsm10-thermal-flow-switch.jpg"
        alt="HSM10 thermal flow switch"
        className="max-h-[62%] w-auto rounded-lg object-contain shadow-2xl shadow-black/40"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
