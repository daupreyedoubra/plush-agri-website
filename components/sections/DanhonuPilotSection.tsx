"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, animate, useInView, useReducedMotion, type Variants } from "framer-motion";
import LocationMap from "@/components/ui/LocationMap";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const photoContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const photoItemVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0, 0, 1] } },
};

const paragraphs = [
  "We chose Danhonu 1, Chikun LGA for its livestock-dependent community with no reliable vet access — the gap we exist to close. Since May 2026 we've run engagement sessions, farm visits, and One Health education in the local school.",
  "Farmers now have a direct line to a vet for the first time, and the trust we've built here is the model for how we expand to more livestock-dependent communities across Kaduna State.",
];

const metrics = [
  { value: 29, prefix: "", suffix: "", label: "farmers under advisory" },
  { value: 31, prefix: "", suffix: "", label: "people trained" },
  { value: 7, prefix: "", suffix: "", label: "farm visits completed" },
  { value: 7, prefix: "₦", suffix: "M", label: "project funds managed" },
];

const photos = [
  { src: "/images/_MG_2908.jpg", alt: "Plush Agri Solutions community engagement session in Danhonu 1" },
  { src: "/images/_MG_2918.jpg", alt: "Plush Agri Solutions input distribution to a farmer in Danhonu 1" },
  { src: "/images/_MG_2930.jpg", alt: "Plush Agri Solutions team member leading a farmer training session" },
];

function AnimatedMetric({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.25, 0, 0, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, reduceMotion]);

  return (
    <div ref={ref}>
      <p
        className="num-tabular text-navy font-heading font-bold leading-none"
        style={{ fontSize: "3rem" }}
      >
        {prefix}
        {display}
        {suffix}
      </p>
      <motion.div
        className="h-[3px] w-10 bg-sage rounded-full origin-left mt-3"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1.4, ease: [0.25, 0, 0, 1] }}
      />
      <p
        className="text-gray-600 text-sm mt-2 tracking-wide"
        style={{ fontVariant: "small-caps" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function DanhonuPilotSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Our Pilot
        </motion.p>

        <motion.h2
          className="text-navy font-bold text-3xl lg:text-4xl mb-14 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          We started where the <span className="text-bright-green">need is real</span>: Danhonu 1.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <motion.div
            className="lg:col-span-6 space-y-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          >
            {paragraphs.map((p) => (
              <p key={p} className="text-gray-700 text-base leading-relaxed max-w-[65ch]">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-6 grid grid-cols-3 gap-4 lg:h-full"
            variants={photoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                variants={photoItemVariants}
                className={`relative overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-full ${
                  i === 1
                    ? "rounded-t-full shadow-[0_4px_24px_rgba(22,54,92,0.08)]"
                    : "card"
                }`}
              >
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 33vw, 17vw" className="object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Metrics + location, aligned in one row */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-12 border-t border-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <AnimatedMetric
                key={m.label}
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                label={m.label}
              />
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col items-start gap-2">
            <p className="label">This is where we work</p>
            <LocationMap />
            <p className="text-gray-600 text-sm mt-1">
              Danhonu 1, Chikun LGA — our pilot and founding community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
