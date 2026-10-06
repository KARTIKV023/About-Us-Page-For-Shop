
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


export function ServiceArchitecture({
  items,
  centerText,
  className = "",
}: {
  items: IconItem[];
  centerText: string[];
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[560px] ${className}`}
      role="img"
      aria-label={`${company.name} services: ${items
        .map((i) => i.label)
        .join(", ")}`}
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between sm:mb-6">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-[11px] sm:tracking-[0.18em]">
          What we bring together
        </span>

        <span className="h-px w-10 bg-brand/40 sm:w-16" />
      </div>

      {/* Service architecture */}
      <div className="relative">
        {/* Connector lines */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full g:block
          "
        >
          {/* Top connections */}
          <path
            d="M 16.66 16.66 H 83.33"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            className="text-brand/20"
          />

          {/* Bottom connections */}
          <path
            d="M 16.66 83.33 H 83.33"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            className="text-brand/20"
          />

          {/* Left connections */}
          <path
            d="M 16.66 16.66 V 83.33"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            className="text-brand/20"
          />

          {/* Right connections */}
          <path
            d="M 83.33 16.66 V 83.33"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            className="text-brand/20"
          />

          {/* Center → left */}
          <path
            d="M 16.66 50 H 33.33"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            className="text-brand/25"
          />

          {/* Center → right */}
          <path
            d="M 66.66 50 H 83.33"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            className="text-brand/25"
          />

          {/* Center → top */}
          <path
            d="M 50 16.66 V 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            className="text-brand/25"
          />

          {/* Center → bottom */}
          <path
            d="M 50 70 V 83.33"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            className="text-brand/25"
          />
        </svg>

        {/* Cards */}
        <div
          className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3 lg:grid-rows-4
          "
        >
          {/* ─────────────────────────
              TOP ROW
          ───────────────────────── */}

          <div className="lg:col-start-1 lg:row-start-1">
            <ServiceCard
              label={items[0]?.label}
              icon={items[0]?.icon}
            />
          </div>

          <div className="lg:col-start-2 lg:row-start-1">
            <ServiceCard
              label={items[1]?.label}
              icon={items[1]?.icon}
            />
          </div>

          <div className="lg:col-start-3 lg:row-start-1">
            <ServiceCard
              label={items[2]?.label}
              icon={items[2]?.icon}
            />
          </div>

          {/* ─────────────────────────
              CENTER
          ───────────────────────── */}

          <div
            className="order-first col-span-2 flex min-h-[130px] flex-col items-center justify-center rounded-full border
              border-brand/30 bg-white px-6 py-5 ext-center shadow-[0_12px_35px_rgba(15,35,65,0.08)] 
              
              sm:min-h-[145px]
              sm:px-8 
              
              lg:order-none
              lg:col-span-1
              lg:col-start-2
              lg:row-start-2
              lg:row-span-2
              lg:min-h-[190px]
            "
          >
            {/* 1For brand mark */}
            <div
              className="flex items-baseline justify-center leading-none tracking-[-0.08em] text-ink
              "
              aria-label="1For"
            >
              {/* 1 */}
              <span
                className="text-[58px] font-black leading-none

                  sm:text-[66px]

                  lg:text-[100px]
                "
              >
                1
              </span>

              {/* F */}
              <span
                className="text-[33px] font-black leading-none sm:text-[33px] lg:text-[66px]
                "
              >
                F
              </span>

              {/* or */}
              <span
                className="text-[23px] font-bold leading-none sm:text-[27px] lg:text-[31px]"
              >
                or
              </span>
            </div>

            {/* Supporting text */}
            <div className="mt-3 flex flex-col items-center">
              {centerText.map((text) => (
                <p
                  key={text}
                  className="text-[7px] font-semibold leading-tight tracking-[0.04em] text-slate-600 sm:text-[8px] lg:text-[9px]"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* ─────────────────────────
              MIDDLE RIGHT
          ───────────────────────── */}

          <div className="lg:col-start-3 lg:row-start-2">
            <ServiceCard
              label={items[3]?.label}
              icon={items[3]?.icon}
            />
          </div>

          {/* ─────────────────────────
              MIDDLE LEFT
          ───────────────────────── */}

          <div className="lg:col-start-1 lg:row-start-2">
            <ServiceCard
              label={items[4]?.label}
              icon={items[4]?.icon}
            />
          </div>

          {/* ─────────────────────────
              LOWER LEFT
          ───────────────────────── */}

          <div className="lg:col-start-1 lg:row-start-3">
            <ServiceCard
              label={items[5]?.label}
              icon={items[5]?.icon}
            />
          </div>

          {/* ─────────────────────────
              LOWER RIGHT
          ───────────────────────── */}

          <div className="lg:col-start-3 lg:row-start-3">
            <ServiceCard
              label={items[6]?.label}
              icon={items[6]?.icon}
            />
          </div>

          {/* ─────────────────────────
              BOTTOM ROW
          ───────────────────────── */}

          <div className="lg:col-start-1 lg:row-start-4">
            <ServiceCard
              label={items[7]?.label}
              icon={items[7]?.icon}
            />
          </div>

          <div className="lg:col-start-2 lg:row-start-4">
            <ServiceCard
              label={items[8]?.label}
              icon={items[8]?.icon}
            />
          </div>

          <div className="lg:col-start-3 lg:row-start-4">
            <ServiceCard
              label={items[9]?.label}
              icon={items[9]?.icon}
            />
          </div>
        </div>
      </div>

      {/* Bottom statement */}
      <div className="mt-4 flex items-center gap-3 sm:mt-5 sm:gap-4">
        <span className="h-px flex-1 bg-slate-200" />

        <span
          className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-[10px] sm:tracking-[0.15em]"
        >
          Under one roof
        </span>

        <span className="h-px flex-1 bg-slate-200" />
      </div>
    </div>
  );
}

function ServiceCard({
  label,
  icon: Icon,
}: {
  label: string;
  icon: IconItem["icon"];
}) {
  return (
    <div
      className="group flex min-h-[64px] flex-col justify-between rounded-full border border-slate-200 bg-white px-4 py-3 transition-all duration-300

        hover:-translate-y-1
        hover:border-brand/40
        hover:shadow-lg

        sm:min-h-[76px]
        sm:px-6
        sm:py-4

        lg:min-h-[82px]
        lg:px-7"
    >
      <Icon
        className="
          size-4
          text-slate-700
          transition-colors
          group-hover:text-brand

          sm:size-5
        "
        aria-hidden
      />

      <span
        className="
          text-[8px]
          font-bold
          uppercase
          tracking-[0.10em]
          text-ink

          sm:text-[9px]
          sm:tracking-[0.13em]

          lg:text-[10px]
          lg:tracking-[0.15em]
        "
      >
        {label}
      </span>
    </div>
  );
}