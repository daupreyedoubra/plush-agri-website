"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import AnimatedMetric from "@/components/ui/AnimatedMetric";

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

export default function DanhonuPilotSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-6"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Our Pilot
        </motion.p>

        <motion.h2
          className="text-navy font-bold text-3xl lg:text-4xl mb-14 max-w-xl"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
        >
          We started where the <span className="text-bright-green">need is real</span>: Danhonu 1.
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

        {/* Metrics, aligned in one row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-accent"
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
              size="lg"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
