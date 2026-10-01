
import { need } from "@/content/about";
import { Reveal, RevealSection } from "./motion/Reveal";
import { staggerDelay } from "./motion/stagger";
import { Bg, Container, Headline, IconChip, SectionIntro, HEADING } from "./ui";

export default function Need() {
  return (
    <RevealSection id="what-you-need" labelledBy="need-title">
      <div className="bg-slate-50 pt-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal delay={staggerDelay(0)}>
            <SectionIntro
              id="need-title"
              num={need.label.num}
              label={need.label.text}
              title={need.title}
              body={
                <>
                  <p className="max-w-xs text-slate-700">{need.body}</p>
                  <p className="mt-3 text-sm font-medium text-brand">{need.callout}</p>
                </>
              }
            />
            
            <div className="relative mt-6 hidden h-80 w-72 lg:block [mask-image:linear-gradient(to_bottom,black_60%,transparent)]"><Bg image={need.image} sizes="288px" className="grayscale" /></div>
          </Reveal>

          
          <Reveal delay={staggerDelay(1)}>
            <ol className="space-y-3 lg:pt-10">
              {need.questions.map((q, i) => (
                <li key={q} className="lift flex items-center gap-4 rounded-full bg-white px-4 py-2 shadow-md">
                  <span className="grid size-8 place-items-center rounded-full bg-brand text-xs font-bold text-white">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`${HEADING} text-lg text-ink`}>{q}</span>
                </li>
              ))}
              <li className="lift flex items-center gap-4 rounded-full bg-brand px-4 py-3 text-white shadow-lg">
                <span className="grid size-8 place-items-center rounded-full bg-ink text-xs font-bold">08</span>
                <span className={`${HEADING} text-xl`}>{need.finalQuestion}</span>
              </li>
            </ol>
          </Reveal>
        </Container>

        <Container className="pb-16 pt-10">
          <Reveal delay={staggerDelay(0)}>
            <p className="mb-6 flex items-center gap-4 text-sm font-semibold text-brand before:h-px before:flex-1 before:bg-brand/30 after:h-px after:flex-1 after:bg-brand/30">Sometimes…</p>
          </Reveal>
          <Reveal delay={staggerDelay(1)}>
            <div className="grid gap-4 md:grid-cols-3">
              {need.sometimes.map(({ top, accent, icon }) => (
                <div key={top} className="lift flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-md">
                  <IconChip icon={icon} className="size-14" />
                  <p className={`${HEADING} text-lg text-ink`}>{top}</p>
                  <p className={`${HEADING} text-lg text-brand`}>{accent}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>

      
      <div className="relative overflow-hidden bg-ink py-20 text-center">
        <div aria-hidden className="absolute bottom-0 left-0 h-40 w-64 bg-brand [clip-path:polygon(0_35%,55%_65%,100%_100%,0_100%)]" />
        <Container className="relative">
          <Reveal delay={staggerDelay(0)}>
            <Headline lines={need.outcomes.title} size="text-5xl sm:text-6xl" dark />
            <div className="mt-6 text-sm text-slate-300">{need.outcomes.body.map((b) => <p key={b}>{b}</p>)}</div>
          </Reveal>
        </Container>
      </div>
    </RevealSection>
  );
}