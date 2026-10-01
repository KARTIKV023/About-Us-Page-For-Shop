
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Send } from "lucide-react";
import { brand, nav } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="w-full px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-14 lg:h-16 gap-3 lg:gap-5">
         
          <Link href={brand.home} className="inline-flex items-center gap-3 group shrink-0">
            <span className="w-10 h-10 rounded-2xl p-1.5 bg-white border border-slate-200/80 shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:border-brand transition-all duration-300 shrink-0">
              <Image src={brand.logo} alt={`${brand.name} Official Logo`} width={brand.logoWidth} height={brand.logoHeight} className="max-h-full max-w-full h-auto w-auto object-contain" />
            </span>
            <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-brand transition-colors">
              {brand.name}
              <span className="text-brand">{brand.suffix}</span>
            </span>
          </Link>

       
          <nav aria-label="Main" className="hidden lg:flex items-center gap-1 ml-auto">
            {nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-sky-50 hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href={nav.cta.href}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-bold text-slate-950 bg-brand hover:opacity-90 shadow-sm transition-all"
            >
              <Send className="size-3" aria-hidden />
              <span className="hidden sm:inline">{nav.cta.label}</span>
              <span className="sm:hidden">{nav.cta.short}</span>
            </Link>

            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="size-[15px] text-[#25D366]" aria-hidden />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}