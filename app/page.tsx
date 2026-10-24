import FrameHero from "@/components/FrameHero";
import SmoothScroll from "@/components/SmoothScroll";
import { Footer, Lineup, Marquee, Nav, StallIndex, Visit } from "@/components/Sections";

export default function Page() {
  return (
    <SmoothScroll>
      <main id="top" className="bg-broth text-paper antialiased">
        <Nav />
        <FrameHero />
        <Marquee />
        <StallIndex />
        <Lineup />
        <Visit />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
