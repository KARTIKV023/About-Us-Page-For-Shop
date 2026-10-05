"use client";

import { useEffect, useRef, useState } from "react";
import type { IconItem } from "@/content/about";

type Point = { x: number; y: number };

function anchor(box: DOMRect, node: HTMLElement | undefined): Point | null {
  if (!node) return null;
  const r = node.getBoundingClientRect();
  return { x: r.left + r.width / 2 - box.left, y: r.top + r.height / 2 - box.top };
}

function curve(a: Point, b: Point) {
  const bend = (b.y - a.y) / 2;
  return `M ${a.x} ${a.y} C ${a.x} ${a.y + bend}, ${b.x} ${b.y - bend}, ${b.x} ${b.y}`;
}

export function Connections({
  vendors,
  links,
  className = "",
}: {
  vendors: IconItem[];
  links: [string, string][];
  className?: string;
}) {
  const wrap = useRef<HTMLUListElement>(null);
  const nodes = useRef(new Map<string, HTMLLIElement>());
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    const measure = () => {
      const box = wrap.current;
      if (!box) return;
      const rect = box.getBoundingClientRect();
      setPaths(
        links.flatMap(([from, to]) => {
          const a = anchor(rect, nodes.current.get(from));
          const b = anchor(rect, nodes.current.get(to));
          return a && b ? [curve(a, b)] : [];
        }),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (wrap.current) observer.observe(wrap.current);
    document.fonts?.ready.then(measure);

    return () => {
      observer.disconnect();
    };
  }, [links]);

  return (
    <div className={`relative ${className}`}>
      <ul ref={wrap} className="relative z-10 flex flex-wrap justify-center gap-4">
        {vendors.map(({ label, icon: Icon }, i) => (
          <li
            key={label}
            ref={(el) => {
              if (el) nodes.current.set(label, el);
            }}
            className={`flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-ink shadow-sm ${i % 2 ? "translate-y-3" : ""}`}
          >
            <Icon className="size-5 text-slate-500" aria-hidden />
            {label}
          </li>
        ))}
      </ul>

      <svg
        className="pointer-events-none absolute inset-0 z-0 size-full overflow-visible text-slate-300"
        aria-hidden="true"
      >
        {paths.map((d) => (
          <path key={d} d={d} fill="none" stroke="currentColor" strokeWidth={1.25} strokeDasharray="5 6" />
        ))}
      </svg>
    </div>
  );
}