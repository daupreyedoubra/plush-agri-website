"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, animate, useInView, useReducedMotion, type Variants } from "framer-motion";

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
  "COHI is anchored in Danhonu 1, Chikun LGA. We chose it because it is a livestock-dependent community with no reliable access to veterinary care, exactly the gap this initiative exists to close.",
  "Since launch, COHI has run community dialogue sessions with local leaders, completed farm visits with herders, and delivered One Health education in the local school.",
  "Farmers under our advisory now have a direct line to a vet for the first time. Danhonu 1 is the model we carry into every community COHI reaches next.",
];

const metrics = [
  { value: 29, prefix: "", suffix: "", label: "farmers under advisory" },
  { value: 31, prefix: "", suffix: "", label: "people trained" },
  { value: 7, prefix: "", suffix: "", label: "farm visits completed" },
  { value: 7, prefix: "₦", suffix: "M", label: "project funds managed" },
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
      <p className="num-tabular text-navy font-bold" style={{ fontSize: "2rem" }}>
        {prefix}
        {display}
        {suffix}
      </p>
      <motion.div
        className="h-[3px] w-10 bg-sage rounded-full origin-left mt-2"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1.4, ease: [0.25, 0, 0, 1] }}
      />
      <p className="text-gray-600 text-sm mt-2">{label}</p>
      <p className="text-gray-400 text-xs mt-1">as at July 2026</p>
    </div>
  );
}

const photos = [
  { src: "/images/cohi-school-05.jpeg", alt: "Plush Agri Solutions team with pupils and staff at a One Health education session in Danhonu 1" },
  { src: "/images/_MG_2860.jpg", alt: "Community dialogue session with farmers in Danhonu 1" },
  { src: "/images/_MG_2944.jpg", alt: "Plush Agri Solutions branded input handed to a farmer in Danhonu 1" },
];

export default function PilotCommunitySection() {
  return (
    <section className="bg-sage-tint py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Pilot & Founding Community
        </motion.p>

        <motion.h2
          className="text-navy text-3xl lg:text-4xl mb-14 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          Danhonu 1, Chikun LGA.
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
            className="lg:col-span-6 grid grid-cols-2 gap-4"
            variants={photoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={photoItemVariants}
              className="relative card overflow-hidden row-span-2 aspect-[3/4]"
            >
              <Image src={photos[0].src} alt={photos[0].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </motion.div>
            <motion.div
              variants={photoItemVariants}
              className="relative overflow-hidden aspect-square rounded-t-full shadow-[0_4px_24px_rgba(22,54,92,0.08)]"
            >
              <Image src={photos[1].src} alt={photos[1].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </motion.div>
            <motion.div variants={photoItemVariants} className="relative card overflow-hidden aspect-square">
              <Image src={photos[2].src} alt={photos[2].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          {metrics.map((m) => (
            <AnimatedMetric
              key={m.label}
              value={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              label={m.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
