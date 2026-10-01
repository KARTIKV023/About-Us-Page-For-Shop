"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { createContext, useContext, useRef, type ReactNode } from "react";

const HeroScrollContext = createContext<MotionValue<number> | null>(null);

export function HeroScroll({
  id,
  labelledBy,
  className,
  children,
}: {
  id: string;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  return (
    <section ref={ref} id={id} aria-labelledby={labelledBy} className={className}>
      <HeroScrollContext.Provider value={scrollYProgress}>{children}</HeroScrollContext.Provider>
    </section>
  );
}

export function ScrollLayer({
  children,
  className,
  y = 0,
  fade = false,
  fadeEnd = 0.55,
  scaleX,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  fade?: boolean;
  fadeEnd?: number;
  scaleX?: [number, number];
}) {
  const fallback = useMotionValue(0);
  const progress = useContext(HeroScrollContext) ?? fallback;
  const reduced = useReducedMotion();

  // Reduced motion: park every value at its resting state so nothing moves.
  const travel = useTransform(progress, [0, 1], [0, reduced ? 0 : y]);
  const opacity = useTransform(progress, [0, fadeEnd], [1, 0]);
  const shrink = useTransform(progress, [0, 1], scaleX ?? [1, 1]);

  return (
    <motion.div
      className={className}
      style={{ y: travel, opacity: reduced ? 1 : fade ? opacity : 1, scaleX: reduced ? 1 : shrink }}
    >
      {children}
    </motion.div>
  );
}