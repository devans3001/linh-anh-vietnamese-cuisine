"use client";

import { useEffect, type ReactNode } from "react";
/* Lenis smooth scroll (vendored ESM, lib/vendor/lenis.mjs) — the
   Scrolltide-grade glide the skill demands, finally on a Canada build. */
import Lenis from "@/lib/vendor/lenis.mjs";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}
