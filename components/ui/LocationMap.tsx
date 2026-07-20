"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";

// TODO(Wale): confirm exact Danhonu 1 coordinates. These are an approximate
// centroid for Chikun LGA, Kaduna State (not a verified Danhonu 1 pin) —
// swap in the real lat/lng once you have it and update COORDS_LABEL below.
const LAT = 10.35;
const LON = 7.33;
const COORDS_RESOLVED = false;
const COORDS_LABEL = COORDS_RESOLVED
  ? `Approx. ${LAT}°N, ${LON}°E`
  : "Chikun LGA, Kaduna State";

const BBOX = [LON - 0.05, LAT - 0.05, LON + 0.05, LAT + 0.05].join(",");
const OSM_EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(BBOX)}&layer=mapnik`;

const COLLAPSED = { width: 360, height: 210 };
const EXPANDED = { width: 480, height: 360 };

export default function LocationMap() {
  const [open, setOpen] = useState(false);
  const reduceMotionPreference = useReducedMotion();
  // useReducedMotion() reads the media query synchronously on the client,
  // which differs from the server's default and causes a hydration
  // mismatch. Stay in the "motion enabled" render (matching SSR) until
  // mounted, then apply the real preference.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduceMotion = mounted && !!reduceMotionPreference;

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);
  const rotateX = useSpring(rotateXRaw, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 300, damping: 30 });

  const wrapperRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateYRaw.set(px * 14);
    rotateXRaw.set(-py * 14);
  }

  function handleMouseLeave() {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  }

  function toggle() {
    setOpen((v) => !v);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  }

  const size = open ? EXPANDED : COLLAPSED;

  return (
    <div
      ref={wrapperRef}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={open ? "Collapse map" : "Expand map of our Danhonu 1 pilot location"}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      className="inline-block cursor-pointer select-none"
      style={{ perspective: 800 }}
    >
      <motion.div
        style={reduceMotion ? undefined : { rotateX, rotateY }}
        animate={{ ...size, y: reduceMotion ? 0 : [0, -3, 0] }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                width: { type: "spring", stiffness: 220, damping: 24 },
                height: { type: "spring", stiffness: 220, damping: 24 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="card relative bg-white overflow-hidden"
      >
        {/* Header: label + Live chip, always visible */}
        <div className="flex items-center justify-between gap-2 px-5 pt-5">
          <p className="font-heading font-semibold text-navy text-base leading-tight">
            Danhonu 1, Chikun LGA
          </p>
          <span className="shrink-0 inline-flex items-center gap-1.5 bg-navy text-white text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
            <span
              className={`w-1.5 h-1.5 rounded-full bg-sage ${reduceMotion ? "" : "animate-pulse"}`}
              aria-hidden="true"
            />
            Live
          </span>
        </div>

        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : 0.15 }}
            className="px-5 pb-5 pt-3 h-[calc(100%-60px)] flex flex-col gap-2"
          >
            <div className="relative flex-1 rounded-lg overflow-hidden border border-accent bg-sage-tint">
              <iframe
                src={OSM_EMBED_URL}
                className="w-full h-full border-0"
                loading="lazy"
                title="OpenStreetMap of Chikun LGA, Kaduna State, Nigeria, near our Danhonu 1 pilot"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <MapPin
                  className="w-7 h-7 text-bright-green drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                  fill="currentColor"
                  stroke="#FFFFFF"
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <p className="text-[11px] text-gray-500 leading-snug">{COORDS_LABEL}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
