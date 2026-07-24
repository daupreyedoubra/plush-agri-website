"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import AnimatedMetric from "@/components/ui/AnimatedMetric";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const photoVariants: Variants = {
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

const photo = { src: "/images/_MG_2860.jpg", alt: "Community dialogue session with farmers in Danhonu 1" };

export default function PilotCommunitySection() {
  return (
    <section className="bg-sage-tint py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-6"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Pilot & Founding Community
        </motion.p>

        <motion.h2
          className="text-navy text-3xl lg:text-4xl mb-14 max-w-xl"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
        >
          Danhonu 1, Chikun LGA.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <motion.div
            className="lg:col-span-6 space-y-5"
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
          >
            {paragraphs.map((p) => (
              <p key={p} className="text-gray-700 text-base leading-relaxed max-w-[65ch]">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            variants={photoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="relative card overflow-hidden aspect-[4/3] lg:h-full">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-accent"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
        >
          {metrics.map((m) => (
            <AnimatedMetric
              key={m.label}
              value={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              label={m.label}
              size="sm"
              footnote="as at July 2026"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
