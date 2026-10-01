
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { address, brand, contactChips, footerLinks, trust } from "@/content/site";

function ExternalChip({ icon: Icon, label, href }: { icon: LucideIcon; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-bold transition-all border border-[#25D366]/40 shadow-sm"
    >
      <Icon className="size-4 shrink-0" aria-hidden />
      <span>{label}</span>
    </a>
  );
}

function DefaultChip({ icon: Icon, label, href }: { icon: LucideIcon; label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all border border-white/15 hover:border-brand"
    >
      <Icon className="size-4 shrink-0 text-brand" aria-hidden />
      <span>{label}</span>
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative z-20 bg-[#0B1426] text-slate-200 font-sans border-t border-slate-800 shadow-2xl">

      <div aria-hidden className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-brand to-emerald-400" />

      <div className="w-full px-3 sm:px-5 lg:px-6 py-12 space-y-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 border-b border-slate-800/80">
          {trust.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center gap-4 transition-all hover:border-brand/60 hover:bg-white/[0.07]">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/20 text-brand">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-extrabold text-white text-sm leading-tight">{title}</p>
                <p className="text-xs text-slate-300 font-medium mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-xs text-slate-300">
          <div className="lg:col-span-2 space-y-5">
            <Link href={brand.home} className="inline-flex items-center gap-3.5 group shrink-0">
              <span className="w-12 h-12 rounded-2xl p-2 bg-white border border-slate-200/80 shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:border-brand transition-all duration-300 shrink-0">
                <Image src={brand.logo} alt={`${brand.name} Official Logo`} width={brand.logoWidth} height={brand.logoHeight} className="max-h-full max-w-full h-auto w-auto object-contain" />
              </span>
              <span className="font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-brand transition-colors">
                {brand.name}
                <span className="text-brand">{brand.suffix}</span>
              </span>
            </Link>

            <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-md">
              Vijyapana is a marketing and advertising partner for businesses that want to build, grow and be remembered.{" "}
              <strong className="text-white">{brand.store}</strong>
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              {contactChips.map((c) =>
                c.tone === "whatsapp" ? (
                  <ExternalChip key={c.label} {...c} />
                ) : (
                  <DefaultChip key={c.label} {...c} />
                ),
              )}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.heading} className="space-y-4">
              <h3 className="font-black text-white text-xs uppercase tracking-wider text-brand">{col.heading}</h3>
              <ul className="space-y-2.5 font-medium text-slate-300">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-brand transition-colors flex items-center gap-1 group">
                      <ChevronRight className="size-3.5 shrink-0 text-slate-500 group-hover:text-brand transition-colors" aria-hidden />
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="bg-white/5 rounded-2xl p-4 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2.5">
            <address.mapIcon className="size-4 shrink-0 text-brand" aria-hidden />
            <span>
              <strong className="text-white">Vijyapana Headquarters:</strong> {address.line} · Hotline: {address.hotline}
            </span>
          </div>
          <span className="text-[11px] font-bold text-brand bg-slate-900 px-3.5 py-1.5 rounded-lg border border-slate-700/80 shrink-0">
            {brand.store} Official Store
          </span>
        </div>

       
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3">
          <p>
            © {new Date().getFullYear()} Vijyapana Shop (<span className="text-slate-200 font-semibold">{brand.store}</span>). All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400 font-medium">
            <span>{brand.tagline}</span>
            <span>·</span>
            <span>{brand.tagline2}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}