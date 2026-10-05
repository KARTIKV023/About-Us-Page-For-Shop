/** SECTION 06 — "WHAT WE BELIEVE": vertical chain (branding → growth) + navy "infrastructure" band with skyline. */
import { belief } from "@/content/about";
import { Reveal, RevealSection } from "./motion/Reveal";
import { staggerDelay } from "./motion/stagger";
import { Bg, Container, Headline, IconChip, SectionIntro, HEADING } from "./ui";

export default function Belief() {
  return (
    <RevealSection id="what-we-believe" labelledBy="belief-title">
      <div className="relative overflow-hidden bg-slate-50 py-16">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal delay={staggerDelay(0)}>
            <SectionIntro
              id="belief-title"
              num={belief.label.num}
              label={belief.label.text}
              title={belief.title}
              rule="my-8"
              body={
                <div className="relative mt-10 h-72 w-full max-w-md [mask-image:linear-gradient(to_right,black_50%,transparent)]"><Bg image={belief.image} sizes="448px" className="grayscale" /></div>
              }
            />
          </Reveal>

          <Reveal delay={staggerDelay(5)}>
            <ol>
              {belief.chain.map(({ label, sub, icon }, i) => (
                <li key={label} className={`relative flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md ${i < belief.chain.length - 1 ? "mb-6 after:absolute after:left-1/2 after:top-full after:h-6 after:w-px after:bg-brand" : ""}`}>
                  <IconChip icon={icon} className="size-14" />
                  <div><p className={`${HEADING} text-xl text-ink`}>{label}</p><p className="text-xs text-slate-600">{sub}</p></div>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </div>

      <div className="relative isolate overflow-hidden bg-ink py-20">
        <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-full opacity-50 md:w-3/5 [mask-image:linear-gradient(to_left,black_40%,transparent)]">
          <Bg image={belief.infra.image} sizes="(min-width:768px) 60vw, 100vw" />
        </div>
        <Container>
          <Reveal delay={staggerDelay(0)} className="border-l-4 border-brand pl-6">
            <Headline lines={belief.infra.title} size="text-3xl sm:text-6xl" dark />
            <p className="mt-4 max-w-md text-sm text-slate-300">{belief.infra.pre} <span className="text-brand">{belief.infra.accent}</span></p>
          </Reveal>
        </Container>
      </div>
    </RevealSection>
  );
}