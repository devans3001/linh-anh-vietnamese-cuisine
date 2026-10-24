"use client";

import { useEffect, useRef, useState } from "react";
import { FRAMES } from "@/lib/frames";
import { business } from "@/lib/data";
import { HERO_STILL } from "@/lib/photos";

/* THE POUR — Linh Anh's signature, and nobody else's grammar.
   A ladle of broth hangs over the bone-marrow bowl. At rest the bowl
   just steams (idle ping-pong over the first frames). The moment you
   scroll, your scroll works the ladle: 50 frames of broth pouring
   into the bowl, steam thickening as it lands. Scroll = service.
   Poster-wall grammar: a paper ticket stub up top, monumental PHỞ
   across the bottom, chili spent only on the call to action. */
export default function FrameHero() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgs: HTMLImageElement[] = FRAMES.map((src) => {
      const im = new Image();
      im.src = src;
      return im;
    });

    let W = 0;
    let H = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = canvas.width = Math.round(window.innerWidth * dpr);
      H = canvas.height = Math.round(window.innerHeight * dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (idx: number) => {
      const im = imgs[Math.max(0, Math.min(imgs.length - 1, idx))];
      if (!im || !im.complete || im.naturalWidth === 0) return;
      const scale = Math.max(W / im.naturalWidth, H / im.naturalHeight) * 1.02;
      const w = im.naturalWidth * scale;
      const h = im.naturalHeight * scale;
      ctx.drawImage(im, (W - w) / 2, (H - h) / 2, w, h);
    };

    let raf = 0;
    let cur = 0;
    let scrolled = false;
    const start = performance.now();
    const IDLE_MAX = 5;
    const frame = (now: number) => {
      const rect = wrap.getBoundingClientRect();
      const distance = wrap.offsetHeight - window.innerHeight;
      const p = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      if (p > 0.004) scrolled = true;

      let target: number;
      if (!scrolled) {
        const t = ((now - start) / 1000) * 3.2;
        const cycle = IDLE_MAX * 2;
        const m = t % cycle;
        target = m < IDLE_MAX ? m : cycle - m;
      } else {
        target = p * (FRAMES.length - 1);
      }
      cur += (target - cur) * 0.13;
      draw(Math.round(cur));

      if (overlayRef.current) {
        overlayRef.current.style.opacity = String(Math.max(0, 1 - p * 2.2));
        overlayRef.current.style.transform = `translateY(${p * -30}px)`;
      }
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  if (reduced) {
    return (
      <section className="relative flex min-h-screen items-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO_STILL} alt="A steaming bowl of Linh Anh's house special pho with bone marrow" className="absolute inset-0 h-full w-full object-cover" />
        <HeroCopy />
      </section>
    );
  }

  return (
    <section ref={wrapRef} className="relative h-[240vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-broth">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-broth/85 via-transparent to-broth/40" />


        <div ref={overlayRef} className="absolute inset-0 will-change-transform">
          <HeroCopy />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-paper/15">
          <div ref={barRef} className="h-full w-full origin-left bg-chili" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="absolute inset-x-0 bottom-0">
      {/* the ticket stub — everything a hungry person needs, up front */}
      <div className="mx-auto max-w-[110rem] px-5 pb-12 sm:px-8 sm:pb-14">
        <div className="mb-10 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 bg-paper px-4 py-2 font-mono text-[10px] font-bold tracking-[0.18em] text-broth uppercase sm:text-[11px]">
          <span>Open every day 11–11</span>
          <span className="text-chili">✦</span>
          <span>3290 Midland Ave</span>
          <span className="text-chili">✦</span>
          <a href={business.phoneHref} className="underline decoration-chili decoration-2 underline-offset-2">{business.phoneDisplay}</a>
        </div>
        <p className="font-mono text-[10px] font-bold tracking-[0.22em] whitespace-nowrap text-gold [text-shadow:_0_1px_12px_rgb(0_0_0/55%)] sm:text-xs sm:tracking-[0.35em]">
          NHÀ HÀNG BẮC — NORTHERN VIETNAMESE
        </p>
        <h1 className="mt-14 font-display leading-[0.82] font-black tracking-tight text-paper uppercase">
          <span className="block text-[34vw] sm:text-[12rem]">Phở</span>
          <span className="text-outline-paper block text-[15vw] sm:text-[5.4rem]">Đặc</span>
          <span className="block text-[15vw] text-chili sm:text-[5.4rem]">Biệt</span>
        </h1>
        <p className="mt-5 max-w-xl text-base font-semibold text-paper/90 [text-shadow:_0_1px_10px_rgb(0_0_0/60%)] sm:text-lg">
          The house special — bone marrow and all — from a Ha Long kitchen that Scarborough lines up for.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a href={business.phoneHref} className="inline-flex min-h-[52px] items-center bg-chili px-7 py-4 font-bold text-paper shadow-[6px_6px_0_rgba(247,240,225,0.9)] transition-transform hover:-translate-y-0.5">
            Call to order →
          </a>
          <a href="#stalls" className="inline-flex min-h-[52px] items-center bg-paper px-7 py-4 font-bold text-broth shadow-[6px_6px_0_rgba(193,39,45,0.9)] transition-transform hover:-translate-y-0.5">
            Walk the stalls ↓
          </a>
          <p className="font-mono text-[11px] tracking-[0.2em] text-paper/70 sm:text-xs">SCROLL TO POUR THE BROTH</p>
        </div>
      </div>
    </div>
  );
}
