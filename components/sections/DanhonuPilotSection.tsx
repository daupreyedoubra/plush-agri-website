"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, animate, useInView, useReducedMotion } from "framer-motion";
import LocationMap from "@/components/ui/LocationMap";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const paragraphs = [
  "We chose Danhonu 1, Chikun LGA, because it is a livestock-dependent community with no reliable access to veterinary care, exactly the gap Plush Agri Solutions exists to close.",
  "Since our brand launch in May 2026, we have run community engagement sessions, completed farm visits with local herders, and delivered One Health education in the local school.",
  "Farmers under our advisory now have a direct line to a vet for the first time, and the trust built in Danhonu 1 is the model for how we enter every new community.",
  "What comes next is expansion: taking the same community-first approach to more livestock-dependent communities across Kaduna State.",
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
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
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
    <p
      ref={ref}
      className="num-tabular text-navy font-bold"
      style={{ fontSize: "2rem" }}
    >
      {prefix}
      {display}
      {suffix}
    </p>
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
            className="lg:col-span-6 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
          >
            {photos.map((photo) => (
              <div key={photo.src} className="relative card overflow-hidden aspect-[3/4]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 33vw, 17vw" className="object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Metrics + location, aligned in one row */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-12 border-t border-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label}>
                <AnimatedMetric value={m.value} prefix={m.prefix} suffix={m.suffix} />
                <p className="text-gray-600 text-sm mt-1">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 flex flex-col items-start gap-2">
            <p className="label">This is where we work</p>
            <LocationMap />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
