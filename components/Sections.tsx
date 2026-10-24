import { business, facts, lineup, stalls } from "@/lib/data";
import { BANHMI, SPRINGROLLS } from "@/lib/photos";

/* LINH ANH sections — poster-wall grammar throughout: paper posters,
   hairline index rows, ticket stubs, one chili chapter. No cards, no
   centred template rhythm — stalls, a wall of proof, then the visit. */

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-broth bg-paper">
      <div className="mx-auto flex h-14 max-w-[110rem] items-center justify-between px-5 sm:h-16 sm:px-8">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-xl font-black tracking-tight text-broth uppercase">Linh Anh</span>
          <span className="hidden font-mono text-[10px] tracking-[0.25em] text-chili sm:inline">VIETNAMESE CUISINE — SCARBOROUGH</span>
        </a>
        <nav className="flex items-center gap-5 sm:gap-8">
          <a href="#stalls" className="hidden font-mono text-[11px] font-bold tracking-[0.2em] text-broth/70 uppercase hover:text-chili sm:inline">The stalls</a>
          <a href="#lineup" className="hidden font-mono text-[11px] font-bold tracking-[0.2em] text-broth/70 uppercase hover:text-chili sm:inline">The lineup</a>
          <a href="#visit" className="hidden font-mono text-[11px] font-bold tracking-[0.2em] text-broth/70 uppercase hover:text-chili md:inline">Visit</a>
          <a href={business.phoneHref} aria-label={`Call Linh Anh at ${business.phoneDisplay}`} className="group relative inline-flex items-center gap-2 rounded-none bg-chili px-4 py-2.5 font-bold text-paper shadow-[4px_4px_0_#1d120b] sm:px-6 sm:py-3">
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper/50 sm:hidden" />
              <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
              </svg>
            </span>
            <span className="hidden sm:inline">{business.phoneDisplay}</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Marquee() {
  const items = "PHỞ ĐẶC BIỆT ✦ BÚN THỊT NƯỚNG ✦ CƠM SƯỜN NƯỚNG ✦ BÁNH MÌ ✦ GỎI CUỐN ✦ CÀ RI ✦ ";
  return (
    <div className="overflow-hidden border-y-4 border-broth bg-gold py-3" aria-hidden="true">
      <div className="animate-marquee flex w-max">
        <span className="font-mono text-sm font-bold tracking-[0.2em] whitespace-nowrap text-broth">{items.repeat(3)}</span>
        <span className="font-mono text-sm font-bold tracking-[0.2em] whitespace-nowrap text-broth">{items.repeat(3)}</span>
      </div>
    </div>
  );
}

export function StallIndex() {
  return (
    <section id="stalls" className="scroll-mt-16 bg-paper text-broth">
      <div className="mx-auto max-w-[110rem] px-5 pt-20 pb-8 sm:px-8 sm:pt-28">
        <p className="font-mono text-[11px] font-bold tracking-[0.35em] text-chili">THE MENU, STALL BY STALL</p>
        <h2 className="mt-3 font-display text-[13vw] leading-[0.85] font-black tracking-tight uppercase sm:text-8xl">
          The stall <span className="text-outline-broth">index</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base font-medium text-broth/75 sm:text-lg">
          A night market doesn't hand you a leather-bound menu. You walk, you point, you eat.
          This is the walk — four stalls, everything made to order, broth first.
        </p>
      </div>

      {stalls.map((stall, i) => (
        <div key={stall.no}>
          {i === 2 && (
            <figure className="relative h-[46vh] overflow-hidden sm:h-[58vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SPRINGROLLS} alt="Fresh spring rolls with shrimp and herbs, peanut-hoisin sauce for dipping" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-5 font-mono text-[10px] font-bold tracking-[0.25em] text-paper uppercase [text-shadow:_0_1px_10px_rgb(0_0_0/70%)] sm:left-8">
                Stall 02, still warm — gỏi cuốn, rolled to order
              </figcaption>
            </figure>
          )}
          {i === 3 && (
            <figure className="relative h-[46vh] overflow-hidden sm:h-[58vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={BANHMI} alt="Grilled pork banh mi with pickled vegetables in a crackly baguette" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-4 left-5 font-mono text-[10px] font-bold tracking-[0.25em] text-paper uppercase [text-shadow:_0_1px_10px_rgb(0_0_0/70%)] sm:left-8">
                Stall 04 — the baguette crackles or it doesn't leave the stall
              </figcaption>
            </figure>
          )}
          <div className="mx-auto max-w-[110rem] px-5 py-14 sm:px-8 sm:py-20">
            <div className="flex items-start gap-5 sm:gap-8">
              <span className="text-outline-broth font-display text-7xl leading-none font-black sm:text-9xl">{stall.no}</span>
              <div className="pt-2 sm:pt-4">
                <h3 className="font-display text-2xl leading-tight font-black uppercase sm:text-4xl">{stall.title}</h3>
                <p className="mt-2 max-w-xl font-medium text-broth/70">{stall.intro}</p>
              </div>
              <span className="ml-auto hidden pt-3 font-mono text-xs font-bold tracking-[0.3em] text-herb sm:block">{stall.vn}</span>
            </div>
            <ul className="mt-10">
              {stall.dishes.map((dish) => (
                <li key={dish.name} className="group border-t border-broth/15 py-5 last:border-b">
                  <div className="flex items-baseline gap-4">
                    <h4 className="font-display text-xl font-extrabold tracking-tight uppercase transition-colors group-hover:text-chili sm:text-3xl">{dish.name}</h4>
                    {dish.vn && <span className="hidden font-mono text-xs font-bold tracking-[0.15em] text-broth/50 sm:inline">{dish.vn}</span>}
                    <span className="mx-1 flex-1 border-b-2 border-dotted border-broth/30" aria-hidden="true" />
                    {dish.price ? (
                      <span className="font-mono text-base font-bold text-chili sm:text-lg">{dish.price}</span>
                    ) : (
                      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-broth/45 uppercase">At the stall</span>
                    )}
                  </div>
                  {dish.note && <p className="mt-1.5 max-w-2xl text-sm font-medium text-broth/65">{dish.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <p className="mx-auto max-w-[110rem] px-5 pb-16 font-mono text-[10px] font-bold tracking-[0.2em] text-broth/45 uppercase sm:px-8">
        Menu & prices from the restaurant's DoorDash listing, October 2026 — delivery prices; in-store may differ.
      </p>
    </section>
  );
}

export function Lineup() {
  const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
  return (
    <section id="lineup" className="scroll-mt-16 bg-broth">
      <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-[11px] font-bold tracking-[0.35em] text-gold">WHY THERE'S A QUEUE</p>
        <h2 className="mt-3 font-display text-[13vw] leading-[0.85] font-black tracking-tight text-paper uppercase sm:text-8xl">
          The <span className="text-chili">lineup</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base font-medium text-paper/75 sm:text-lg">
          On busy nights the line runs out the door — for a ghost kitchen that wasn't supposed to
          survive 2020. These are the words pinned to the wall. Real reviews, real coverage.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {lineup.map((item, i) => (
            <blockquote key={i} className={`bg-paper p-7 text-broth shadow-[10px_10px_0_0_rgba(193,39,45,0.9)] sm:p-9 ${tilts[i % tilts.length]}`}>
              <p className="font-display text-2xl leading-snug font-extrabold tracking-tight sm:text-[2rem]">“{item.quote}”</p>
              <cite className="mt-5 block font-mono text-[11px] font-bold tracking-[0.25em] text-chili uppercase not-italic">— {item.source}</cite>
            </blockquote>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-paper/15 pt-10 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.k} className="pr-6">
              <dt className="sr-only">{fact.v}</dt>
              <dd className="font-display text-5xl font-black text-gold sm:text-6xl">{fact.k}</dd>
              <dd className="mt-2 font-mono text-[11px] font-bold tracking-[0.2em] text-paper/65 uppercase">{fact.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-16 bg-chili text-paper">
      <div className="mx-auto max-w-[110rem] px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-display text-[14.5vw] leading-[0.82] font-black tracking-tight uppercase sm:text-[10rem]">
          Get in<br />line.
        </h2>
        <div className="mt-12 grid gap-10 border-t-2 border-paper/30 pt-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase opacity-80">Find the stall</p>
            <p className="mt-3 font-display text-xl leading-snug font-extrabold">{business.address}</p>
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block font-mono text-xs font-bold tracking-[0.2em] underline decoration-2 underline-offset-4 uppercase hover:text-gold">
              Directions ↗
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase opacity-80">Hours</p>
            <p className="mt-3 font-display text-xl leading-snug font-extrabold">Every day<br />11 AM – 11 PM</p>
            <p className="mt-3 font-medium opacity-85">The lineup moves fast. The broth doesn't rush.</p>
          </div>
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase opacity-80">Skip the wait</p>
            <p className="mt-3 font-display text-xl leading-snug font-extrabold">{business.phoneDisplay}</p>
            <p className="mt-3 font-medium opacity-85">Call ahead, or find Linh Anh on DoorDash for delivery and pickup. Follow the kitchen at {business.instagram}.</p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href={business.phoneHref} className="inline-flex min-h-[52px] items-center bg-paper px-7 py-4 font-bold text-chili shadow-[6px_6px_0_rgba(29,18,11,0.85)] transition-transform hover:-translate-y-0.5">
            Call to order →
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center border-2 border-paper px-7 py-4 font-bold text-paper transition-colors hover:bg-paper hover:text-chili">
            Get directions ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-broth">
      <div className="mx-auto max-w-[110rem] px-5 py-14 sm:px-8">
        <p className="font-display text-[16vw] leading-[0.8] font-black tracking-tight text-paper uppercase sm:text-[9rem]">Linh Anh<span className="text-chili">.</span></p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] font-bold tracking-[0.2em] text-paper/60 uppercase">
          <span>{business.shortAddress}</span>
          <a href={business.phoneHref} className="hover:text-gold">{business.phoneDisplay}</a>
          <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-gold">{business.instagram}</a>
          <span>Open 11–11, every day</span>
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed font-medium text-paper/40">
          Concept website built for Linh Anh Vietnamese Cuisine. Food imagery generated for this
          concept; dishes and details from the restaurant's own public listings and reviews.
        </p>
      </div>
    </footer>
  );
}
