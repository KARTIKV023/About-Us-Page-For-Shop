
import { idea, orbitItems } from "@/content/about";
import { Reveal, RevealSection } from "./motion/Reveal";
import { staggerDelay } from "./motion/stagger";
import { Bg, Container, Headline, Orbit, SectionIntro } from "./ui";

export default function Idea() {
  return (
    <RevealSection id="the-idea" labelledBy="idea-title">
      <div className="bg-slate-50 py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={staggerDelay(0)}>
            <SectionIntro
              id="idea-title"
              num={idea.label.num}
              label={idea.label.text}
              title={idea.title}
              body={<p className="max-w-xs text-slate-700">{idea.body}</p>}
            />
          </Reveal>
          <Reveal delay={staggerDelay(1)}><Orbit items={orbitItems} centerText={idea.orbitCenter} /></Reveal>
        </Container>
      </div>
      <div className="relative overflow-hidden bg-brand py-20 [clip-path:polygon(0_8%,100%_0,100%_100%,0_100%)]">
        <div aria-hidden className="absolute inset-y-0 right-0 w-full opacity-60 mix-blend-multiply md:w-1/2 [mask-image:linear-gradient(to_left,black_40%,transparent)]">
          <Bg image={idea.image} sizes="(min-width:768px) 50vw, 100vw [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_100%)]" />
        </div>
        <Container className="relative">
          <Reveal delay={staggerDelay(0)} className="border-l-4 border-white pl-5"><Headline lines={idea.statement} size="text-4xl sm:text-5xl" dark /></Reveal>
        </Container>
      </div>
    </RevealSection>
  );
}