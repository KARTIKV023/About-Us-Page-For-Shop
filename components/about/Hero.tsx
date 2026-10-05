/** SECTION 01 — "WHO WE ARE": text left, slanted photo right. */
import { hero } from "@/content/about";
import { HeroScroll, ScrollLayer } from "./motion/Parallax";
import { Bg, Container, Headline, Rule, SectionLabel, HEADING } from "./ui";

export default function Hero() {
  return (
    <HeroScroll id="who-we-are" labelledBy="about-h1" className="relative isolate overflow-hidden bg-slate-50">
      <ScrollLayer y={-40}>
        <div aria-hidden className="absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]" />
      </ScrollLayer>

      <Container className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <ScrollLayer y={-90} fade>
          <div>
            <SectionLabel text={hero.label.text} />
            <div id="about-h1"><Headline as="h1" lines={hero.title} size="text-4xl sm:text-7xl xl:text-8xl" /></div>
            <p className={`${HEADING} mt-5 text-xl text-ink sm:text-3xl`}>{hero.sub}</p>
            <Rule className="my-2" />
            <p className="max-w-md text-lg text-slate-700">{hero.body}</p>
            <div className={`${HEADING} mt-5 text-xl text-ink sm:text-4xl`}>
              {hero.tagline.map((l) => <span key={l.text} className={`block ${l.accent ? "text-brand" : ""}`}>{l.text}</span>)}
            </div>
            
          </div>
        </ScrollLayer>

        <div className="relative aspect-[4/3] w-full">
          <div className="zoomable absolute inset-0 overflow-hidden rounded-tl-[80px] [clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]">
            <Bg image={hero.image} eager sizes="(min-width:1024px) 600px, 100vw" className="grayscale" />
          </div>
          <div aria-hidden className="absolute bottom-0 right-0 h-[45%] w-[75%] bg-brand/70 mix-blend-multiply [clip-path:polygon(22%_0,100%_30%,100%_100%,0_100%)]" />
        </div>
      </Container>
    </HeroScroll>
  );
}