"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const noopSubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, margin: "0px 0px 25% 0px" });
  const reduced = useReducedMotion();
  const mounted = useMounted();

  return (
    <motion.div
      ref={ref}
      data-reveal
      className={className}
      initial={false}
      animate={
        !mounted
          ? undefined
          : reduced
            ? { opacity: 1, y: 0 }
            : { opacity: inView ? 1 : 0, y: inView ? 0 : y }
      }
      transition={{ duration: 0.56, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function RevealSection({
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
  const inView = useInView(ref, { amount: 0.01, margin: "0px 0px -12% 0px" });
  const reduced = useReducedMotion();
  const mounted = useMounted();

  return (
    <motion.section
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      data-reveal
      className={className}
      initial={false}
      animate={
        !mounted
          ? undefined
          : reduced
            ? { opacity: 1, y: 0 }
            : { opacity: inView ? 1 : 0, y: inView ? 0 : 18 }
      }
      transition={{ duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.section>
  );
}