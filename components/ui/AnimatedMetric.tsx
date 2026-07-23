"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];
const DURATION_MS = 1400;

interface AnimatedMetricProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  footnote?: string;
  size?: "lg" | "sm";
}

export default function AnimatedMetric({
  value,
  prefix = "",
  suffix = "",
  label,
  footnote,
  size = "lg",
}: AnimatedMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Explicit IntersectionObserver rather than relying solely on a library
  // helper: it fires its callback immediately with the current intersection
  // state as soon as observe() is called, so a section that is already in
  // the viewport at mount time (direct URL entry, anchor-jump, browser scroll
  // restoration on reload) triggers the count-up right away instead of
  // waiting for a scroll event that may never come.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, reduceMotion]);

  const fontSize = size === "lg" ? "3rem" : "2rem";

  return (
    <div ref={ref}>
      <p
        className={`num-tabular text-navy font-bold leading-none ${size === "lg" ? "font-heading" : ""}`}
        style={{ fontSize }}
        aria-label={`${prefix}${value}${suffix} ${label}`}
      >
        <span aria-hidden="true">
          {prefix}
          {display}
          {suffix}
        </span>
      </p>
      <motion.div
        className={`h-[3px] w-10 bg-sage rounded-full origin-left ${size === "lg" ? "mt-3" : "mt-2"}`}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1.4, ease: EASE }}
      />
      <p
        className="text-gray-600 text-sm mt-2 tracking-wide"
        style={size === "lg" ? { fontVariant: "small-caps" } : undefined}
      >
        {label}
      </p>
      {footnote && <p className="text-gray-400 text-xs mt-1">{footnote}</p>}
    </div>
  );
}
