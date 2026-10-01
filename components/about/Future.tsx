/** SECTION 07 — "THE FUTURE WE WANT": full-bleed sunset photo, belief list, vision card with India map. */
import { future } from "@/content/about";
import { Reveal, RevealSection } from "./motion/Reveal";
import { staggerDelay } from "./motion/stagger";
import { Accent, Bg, Container, Headline, SectionLabel } from "./ui";

export default function Future() {
  return (
    <RevealSection id="the-future" labelledBy="future-title" className="relative isolate overflow-hidden bg-slate-100 py-16">
      <div className="absolute inset-0 -z-10"><Bg image={future.image} sizes="100vw" /></div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/80 to-transparent md:via-white/40" />

      <Container>
        <Reveal delay={staggerDelay(0)}>
          <SectionLabel num={future.label.num} text={future.label.text} />
          <div id="future-title"><Headline lines={future.title} size="text-6xl sm:text-7xl" /></div>
        </Reveal>

        <Reveal delay={staggerDelay(1)}>
          <ul className="mt-8 max-w-sm space-y-4">
            {future.beliefs.map(({ pre, accent, icon: Icon }) => (
              <li key={pre} className="lift flex items-center gap-4 text-sm text-ink">
                <span className="grid size-10 place-items-center rounded-full bg-white/90 text-brand shadow"><Icon className="size-5" aria-hidden /></span>
                <Accent pre={pre} accent={accent} />
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={staggerDelay(2)}>
          <p className="mt-6 max-w-md text-[11px] text-ink"><Accent pre={future.footnote.pre} accent={future.footnote.accent} /></p>
        </Reveal>
        <Reveal delay={staggerDelay(3)} className="relative mt-10 overflow-hidden rounded-2xl bg-ink/95 p-8 text-white shadow-2xl md:ml-auto md:w-[62%]">
          <div aria-hidden className="absolute inset-y-0 right-0 w-1/2 opacity-70"><Bg image={future.vision.image} sizes="50vw" /></div>
          <p className="relative mb-3 text-xs font-bold tracking-widest text-brand">{future.vision.label}</p>
          <Headline lines={future.vision.title} as="h3" size="text-3xl sm:text-4xl" dark className="relative" />
          <p className="relative mt-3 text-sm text-slate-300">{future.vision.body}</p>
        </Reveal>
      </Container>
    </RevealSection>
  );
}