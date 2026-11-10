"use client";

import { useCallback, useState } from "react";
import { HeroVisual } from "@/components/hero-visual";

/**
 * Wraps the hero visual so the "drag to rotate" hint is only shown when the
 * 3D scene actually loaded. Rendering the hint unconditionally told a
 * visitor seeing the static photo to drag something that cannot be dragged.
 */
export function HeroStage() {
  const [is3d, setIs3d] = useState(false);

  const handleMode = useCallback((mode: "pending" | "3d" | "static") => {
    setIs3d(mode === "3d");
  }, []);

  return (
    <div className="relative h-[420px] lg:col-span-6 lg:h-[640px]">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(26,111,188,0.22),transparent_62%)]"
        aria-hidden="true"
      />
      <HeroVisual onModeChange={handleMode} />
      {is3d && (
        <p className="pointer-events-none absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
          Drag to rotate · scroll to explore
        </p>
      )}
    </div>
  );
}
