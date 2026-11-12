"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

/**
 * Scroll reveal that only moves content into place. It never animates
 * opacity, so text is readable even if the observer fires late (slow
 * device, background tab, screenshot tools) and the page can't go blank.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
