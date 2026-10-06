"use client";

import { orbitItems, why } from "@/content/about";
import { Reveal, RevealSection } from "./motion/Reveal";
import { staggerDelay } from "./motion/stagger";
import { Connections } from "./Connections";
import { Bg, Container, Headline, Orbit, SectionIntro } from "./ui";
import { ArrowRight, Link } from "lucide-react";


export default function WhyExists() {
  return (
    <RevealSection id="why-vijyapana-exists" labelledBy="why-title">
    
      <div className="bg-white py-1">
        
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
         
            <SectionIntro
              id="why-title"
              num={why.label.num}
              label={why.label.text}
              title={why.title}
              size="text-3xl sm:text-6xl"
              body={<p className="max-w-xs text-slate-700">{why.body}</p>}
            />
         
          <Reveal delay={staggerDelay(0)} className="relative mx-auto aspect-square w-full max-w-lg">
            {/* fades out on the left via CSS mask */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 translate-x-[-8%] lg:-translate-x-[120px] [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_82%,transparent_100%)]"><Bg image={why.image} sizes="(min-width:1024px) 512px, 100vw" className="grayscale" />
              </div>
            </div>
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
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ">
          <Reveal delay={staggerDelay(0)}>
            <Headline lines={why.headache.title} size="text-3xl sm:text-5xl" />
            <p className="mt-6 max-w-sm text-slate-700">{why.headache.intro}</p>
            <ul className="mt-4 space-y-0.5 text-sm text-slate-700">
              {why.headache.oneFor.map((x) => <li key={x}><span className="font-semibold text-brand">One</span> for {x}.</li>)}
            </ul>
          </Reveal>
          
          <Reveal delay={staggerDelay(1)}>
            <Connections vendors={why.headache.vendors} links={why.headache.links} />
          </Reveal>
        </Container>
      </div>

      
      <div className="bg-brand py-16 ">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal delay={staggerDelay(0)}>
            <Headline lines={why.oneVendor.title} size="text-3xl sm:text-6xl" dark />
            <p className="mt-6 max-w-sm text-slate-700">{why.oneVendor.body}</p>
            <p className="mt-6 text-sm font-medium text-white text-bold">{why.oneVendor.callout}</p>
          </Reveal>
          <Reveal delay={staggerDelay(1)}><Orbit items={orbitItems.slice(0, 8)} centerText={["ONE PARTNER.", "ONE RESPONSIBILITY."]} tone="dark" /></Reveal>
        </Container>
      </div>
    </RevealSection>
  );
}