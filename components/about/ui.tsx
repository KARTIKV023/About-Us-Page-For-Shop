
import Image from "next/image";
import type { ElementType, ReactNode } from "react";
import { company, type IconItem, type ImageAsset, type Line } from "@/content/about";


export const HEADING = "font-[family-name:var(--font-heading)] uppercase leading-[1.01] tracking-[0.01em]";

const CASE_CLASS = {
  upper: "!uppercase",
  lower: "!lowercase",
  normal: "!normal-case",
} as const satisfies Record<NonNullable<Line["case"]>, string>;

/** Overrides the uppercase from HEADING so a line can be lower/normal case. */
export function caseClass(k?: Line["case"]) {
  return k ? CASE_CLASS[k] : "";
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}


export function SectionLabel({ num, text }: { num?: string; text: string }) {
  return (
    <div className="mb-6 inline-block">
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-brand">
        {num && <span className="text-base">{num}</span>}
        <span>{text}</span>
      </p>
      <span className="mt-1 block h-0.5 w-10 bg-brand" />
    </div>
  );
}


export function Headline({
  lines, as: Tag = "h2", size = "text-4xl sm:text-6xl lg:text-7xl", dark = false, className = "",
}: { lines: Line[]; as?: ElementType; size?: string; dark?: boolean; className?: string }) {
  return (
    <Tag className={`${HEADING} ${size} ${dark ? "text-white" : "text-ink"} ${className}`}>
      {lines.map((l) => (
        <span key={l.text} className={`block ${l.accent ? "text-brand" : ""} ${caseClass(l.case)}`}>
          {l.text}
        </span>
      ))}
    </Tag>
  );
}


export function Rule({ className = "" }: { className?: string }) {
  return <span className={`block h-0.5 w-12 bg-brand ${className}`} />;
}


export function Accent({ pre, accent, className = "" }: { pre: string; accent: string; className?: string }) {
  return <span className={className}>{pre} <span className="text-brand">{accent}</span></span>;
}

export function SectionIntro({
  id, num, label, title, body,
  size = "text-4xl sm:text-6xl lg:text-7xl",
  rule = "my-6",
}: {
  id: string;
  num?: string;
  label: string;
  title: Line[];
  body: ReactNode;
  size?: string;
  rule?: string;
}) {
  return (
    <div>
      <SectionLabel num={num} text={label} />
      <div id={id}><Headline lines={title} size={size} /></div>
      <Rule className={rule} />
      {body}
    </div>
  );
}


export function Bg({ image, eager = false, sizes = "100vw", className = "" }: { image: ImageAsset; eager?: boolean; sizes?: string; className?: string }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}         
      fill
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      sizes={sizes}
      style={{ objectPosition: image.position ?? "center" }}
      className={`object-cover ${className}`}
    />
  );
}


export function IconChip({ icon: Icon, className = "" }: { icon: IconItem["icon"]; className?: string }) {
  return (
    <span className={`grid size-10 shrink-0 place-items-center rounded-full bg-sky-50 text-brand ${className}`}>
      <Icon className="size-1/2" aria-hidden />
    </span>
  );
}

export function Orbit({
  items,
  centerText,
  tone = "light",
  className = "",
}: {
  items: IconItem[];
  centerText: string[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const radius = 31;
  const dark = tone === "dark";

  return (
    <div
      className={`relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden ${className}`}
      role="img"
      aria-label={`${company.name} services: ${items
        .map((i) => i.label)
        .join(", ")}`}
    >
      {/* Outer orbit ring */}
      <div
        aria-hidden
        className={`absolute inset-[10%] rounded-full border ${
          dark ? "border-white/45" : "border-brand/45"
        }`}
      />

      {/* Center */}
      <div
        className={`absolute inset-[30%] z-10 flex flex-col items-center justify-center rounded-full p-3 text-center shadow-xl ${
          dark ? "bg-white text-ink" : "bg-white text-ink"
        }`}
      >
        <Image
          src={company.logo}
          alt=""
          width={company.logoWidth}
          height={company.logoHeight}
          className="mb-1 h-auto w-1/2 min-w-8"
        />

        <p className={`${HEADING} text-[20px] sm:text-base`}>
          {company.name}
        </p>

        {centerText.map((t) => (
          <p
            key={t}
            className="text-[6px] font-semibold leading-tight sm:text-[11px]"
          >
            {t}
          </p>
        ))}
      </div>

      {/* Rotating orbit */}
      <div className="orbit absolute inset-0">
        {items.map(({ label, icon: Icon }, i) => {
          const angle =
            ((-90 + (360 / items.length) * i) * Math.PI) / 180;

          return (
            <div
              key={label}
              className="orbit-item absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5"
              style={{
                left: `${50 + radius * Math.cos(angle)}%`,
                top: `${50 + radius * Math.sin(angle)}%`,
              }}
            >
              {/* Counter rotation keeps icon/text upright */}
              <div className="orbit-counter flex flex-col items-center">
                <span
                  className="
                    grid size-11 place-items-center
                    rounded-full bg-white text-ink shadow-lg
                    transition-transform duration-300
                    hover:scale-150
                    sm:size-14
                  "
                >
                  <Icon
                    className="size-5 sm:size-6"
                    aria-hidden
                  />
                </span>

                <span
                  className={`mt-1 text-center text-[9px] font-bold leading-tight tracking-wide sm:text-[10px] ${
                    dark ? "text-white" : "text-ink"
                  }`}
                >
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
