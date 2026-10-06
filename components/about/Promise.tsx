/** SECTION 08 — closing "PROMISE" panel + CTAs + mini footer strip. Fully CSS (no image). */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company, promise } from "@/content/about";
import { Reveal, RevealSection } from "./motion/Reveal";
import { staggerDelay } from "./motion/stagger";
import { Container, Headline, HEADING, caseClass } from "./ui";

export default function PromisePanel() {
  const { cta, footer } = promise;
  return (
    <RevealSection id="promise" labelledBy="promise-title">
      
      <div className="bg-ink bg-[radial-gradient(ellipse_at_top,rgba(59,159,232,.25),transparent_60%)] py-16 text-center text-white">
        <Container>
          <Reveal delay={staggerDelay(0)}>
            <p className="mb-6 text-xs font-bold tracking-widest text-brand">{promise.label}</p>
            <div id="promise-title"><Headline lines={promise.title} size="text-3xl sm:text-6xl" dark /></div>
            
           <p className={`${HEADING} mt-5 text-xl text-brand sm:text-3xl ${caseClass(promise.sub.case)}`}>{promise.sub.text}</p>
            

          </Reveal>
          <Reveal delay={staggerDelay(1)}>
            <ul className="mx-auto mt-10 max-w-sm space-y-3 text-left">
              {promise.chain.map(({ pre, accent, icon: Icon }) => (
                <li key={pre} className="lift flex items-center gap-4 text-xs font-semibold tracking-wide">
                  <span className="grid size-10 place-items-center rounded-full border border-white/30"><Icon className="size-5" aria-hidden /></span>
                  <span>{pre} <span className="text-brand">{accent}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={staggerDelay(2)}>
            <div className="mt-10">
              <p className="text-lg tracking-wide">{promise.closing.pre}</p>
              <p className={`${HEADING} text-3xl text-brand sm:text-6xl`}>{promise.closing.accent}</p>
            </div>
          </Reveal>
        </Container>
      </div>

      
      <div className="bg-white py-10 text-center">
        <Container>
          <Reveal delay={staggerDelay(0)}>
            <p className="mb-6 text-sm font-bold tracking-wide text-ink">{cta.heading}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={cta.primary.href} className="lift inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-xs font-bold tracking-wide text-white hover:opacity-90">{cta.primary.label} <ArrowRight className="size-4" /></Link>
              <Link href={cta.secondary.href} className="lift inline-flex items-center gap-2 rounded-lg border border-brand px-6 py-3 text-xs font-bold tracking-wide text-brand hover:bg-sky-50">{cta.secondary.label} <ArrowRight className="size-4" /></Link>
            </div>
          </Reveal>
          <Reveal delay={staggerDelay(1)}>
            <div className="mt-10 flex flex-col items-center justify-between gap-4 text-[10px] font-semibold tracking-widest text-slate-600 md:flex-row">
              <span className="flex items-center gap-2"><Image src={company.logo} alt="" width={company.logoWidth} height={company.logoHeight} className="h-7 w-auto" /><b className="text-ink">{company.name.toUpperCase()}</b> {footer.left}</span>
              <span>{footer.mid.map((m, i) => <span key={m} className={i === 2 ? "text-brand" : ""}>{m} </span>)}</span>
              <span>{footer.right}</span>
            </div>
          </Reveal>
        </Container>
      </div>
    </RevealSection>
  );
}