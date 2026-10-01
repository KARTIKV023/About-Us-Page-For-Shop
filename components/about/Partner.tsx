/** SECTION 05 — "NOT A VENDOR": handshake hero, client-vs-partner table, blue focus banner, 6 responsibility steps. */
import Image from "next/image";
import { company, partner } from "@/content/about";
import { Reveal, RevealSection } from "./motion/Reveal";
import { staggerDelay } from "./motion/stagger";
import { Accent, Bg, Container, Headline, SectionIntro, HEADING } from "./ui";

export default function Partner() {
  return (
    <RevealSection id="not-a-vendor" labelledBy="partner-title">
     
      <div className="relative overflow-hidden bg-slate-50 py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={staggerDelay(0)}>
            <SectionIntro
              id="partner-title"
              num={partner.label.num}
              label={partner.label.text}
              title={partner.title}
              body={<div className="text-slate-700">{partner.body.map((b) => <p key={b}>{b}</p>)}</div>}
            />
          </Reveal>
          <Reveal delay={staggerDelay(1)} className="relative aspect-[4/3]">
            
            <Image src={company.logo} alt="" width={company.logoWidth} height={company.logoHeight} aria-hidden className="absolute -right-6 top-0 h-auto w-2/3 opacity-15" />
           
            <Bg image={partner.image} sizes="(min-width:1024px) 600px, 100vw" className="[mask-image:linear-gradient(to_bottom,black_75%,transparent)]" />
          </Reveal>
        </Container>
      </div>

      
      <Container className="pb-10">
        <Reveal delay={staggerDelay(0)}>
          <div className="grid overflow-hidden rounded-2xl shadow-xl md:grid-cols-2">
            {[{ d: partner.client, dark: false }, { d: partner.partnerCol, dark: true }].map(({ d, dark }) => (
              <div key={d.title} className={`p-8 ${dark ? "bg-ink text-white" : "bg-white text-ink"}`}>
                <h3 className={`${HEADING} mb-6 border-b pb-2 text-2xl ${dark ? "border-white/20" : "border-slate-200"}`}>{d.title}</h3>
                <ul className="space-y-4">
                  {d.points.map(({ label, icon: Icon }) => (
                    <li key={label} className="flex items-center gap-4 text-sm">
                      <span className={`grid size-10 place-items-center rounded-full text-brand ${dark ? "bg-white/10" : "bg-slate-100"}`}><Icon className="size-5" aria-hidden /></span>{label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      <div className="relative isolate overflow-hidden bg-brand py-16">
        
        <div aria-hidden className="absolute inset-0 -z-10 opacity-50 mix-blend-multiply"><Bg image={partner.focus.image} sizes="100vw" /></div>
        <Container className="grid items-center gap-8 text-center md:grid-cols-[1fr_auto_1fr]">
          <Reveal delay={staggerDelay(0)}><Headline lines={partner.focus.left} size="text-4xl sm:text-5xl" dark /></Reveal>
          <span aria-hidden className="mx-auto hidden h-24 w-px bg-white/60 md:block" />
          <Reveal delay={staggerDelay(1)}><Headline lines={partner.focus.right} size="text-4xl sm:text-5xl" dark /></Reveal>
        </Container>
      </div>

    
      <div className="relative -mt-8 rounded-t-[40px] bg-white pb-12 pt-10">
        <Container>
          <Reveal delay={staggerDelay(0)}>
            <p className="mb-8 text-center text-xs font-bold tracking-widest text-ink">{partner.responsibility.title}</p>
          </Reveal>
          <Reveal delay={staggerDelay(1)}>
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-6">
              {partner.responsibility.steps.map(({ label, sub, icon: Icon }) => (
                <li key={label} className="lift text-center">
                  <span className="mx-auto mb-2 grid size-14 place-items-center rounded-full bg-brand text-white"><Icon className="size-6" aria-hidden /></span>
                  <p className="text-sm font-bold text-ink">{label}</p><p className="text-[11px] text-slate-600">{sub}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={staggerDelay(2)}>
            <p className="mx-auto mt-10 max-w-2xl rounded-xl border border-slate-200 px-6 py-3 text-center text-sm shadow-sm">
              <Accent pre={partner.responsibility.footer.pre} accent={partner.responsibility.footer.accent} />
            </p>
          </Reveal>
        </Container>
      </div>
    </RevealSection>
  );
}