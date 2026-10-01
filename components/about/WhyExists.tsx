/** SECTION 02 — "WHY VIJYAPANA EXISTS": 3 stacked bands (owner overload → vendor chaos → one partner). */
import { orbitItems, why } from "@/content/about";
import { Reveal, RevealSection } from "./motion/Reveal";
import { staggerDelay } from "./motion/stagger";
import { Bg, Container, Headline, Orbit, SectionIntro } from "./ui";

export default function WhyExists() {
  return (
    <RevealSection id="why-vijyapana-exists" labelledBy="why-title">
    
      <div className="bg-slate-50 py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={staggerDelay(0)}>
            <SectionIntro
              id="why-title"
              num={why.label.num}
              label={why.label.text}
              title={why.title}
              size="text-5xl sm:text-6xl"
              body={<p className="max-w-xs text-slate-700">{why.body}</p>}
            />
          </Reveal>
          <Reveal delay={staggerDelay(1)} className="relative mx-auto aspect-square w-full max-w-lg">
            {/* fades out on the left via CSS mask */}
            <div className="absolute inset-0 translate-x-[-120px] [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_82%,transparent_100%)]"><Bg image={why.image} sizes="(min-width:1024px) 512px, 100vw" className="grayscale" /></div>
            {/* Floating chips: position each in content/about.ts (`pos`) */}
            {why.chips.map(({ label, icon: Icon, pos }) => (
              <span key={label} className={`absolute flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[10px] font-bold text-ink shadow-md sm:text-xs ${pos}`}>
                <Icon className="size-4" aria-hidden />{label}
              </span>
            ))}
          </Reveal>
        </Container>
      </div>

  
      <div className="bg-white py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={staggerDelay(0)}>
            <Headline lines={why.headache.title} size="text-4xl sm:text-5xl" />
            <p className="mt-6 max-w-sm text-slate-700">{why.headache.intro}</p>
            <ul className="mt-4 space-y-0.5 text-sm text-slate-700">
              {why.headache.oneFor.map((x) => <li key={x}><span className="font-semibold text-brand">One</span> for {x}.</li>)}
            </ul>
          </Reveal>
          
          <Reveal delay={staggerDelay(1)}>
            <ul className="flex flex-wrap justify-center gap-4">
              {why.headache.vendors.map(({ label, icon: Icon }, i) => (
                <li key={label} className={`flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-ink shadow-sm ${i % 2 ? "translate-y-3" : ""}`}>
                  <Icon className="size-5 text-slate-500" aria-hidden />{label}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>

      
      <div className="bg-brand py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={staggerDelay(0)}><Headline lines={why.oneVendor.title} size="text-5xl sm:text-6xl" dark /></Reveal>
          <Reveal delay={staggerDelay(1)}><Orbit items={orbitItems.slice(0, 8)} centerText={["ONE PARTNER.", "ONE RESPONSIBILITY."]} tone="dark" /></Reveal>
        </Container>
      </div>
    </RevealSection>
  );
}