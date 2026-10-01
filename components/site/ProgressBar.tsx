"use client";


import { motion, useReducedMotion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      data-progress
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand"
      style={{ scaleX: reduced ? 0 : scrollYProgress }}
    />
  );
}