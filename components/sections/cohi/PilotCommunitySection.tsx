"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const paragraphs = [
  "COHI is anchored in Danhonu 1, Chikun LGA. We chose it because it is a livestock-dependent community with no reliable access to veterinary care, exactly the gap this initiative exists to close.",
  "Since launch, COHI has run community dialogue sessions with local leaders, completed farm visits with herders, and delivered One Health education in the local school.",
  "Farmers under our advisory now have a direct line to a vet for the first time. Danhonu 1 is the model we carry into every community COHI reaches next.",
];

const metrics = [
  { value: "29", label: "farmers under advisory" },
  { value: "31", label: "people trained" },
  { value: "7", label: "farm visits completed" },
  { value: "₦7M", label: "project funds managed" },
];

const photos = [
  { src: "/images/cohi-school-05.jpeg", alt: "Plush Agri Solutions team with pupils and staff at a One Health education session in Danhonu 1" },
  { src: "/images/_MG_2860.jpg", alt: "Community dialogue session with farmers in Danhonu 1" },
  { src: "/images/_MG_2944.jpg", alt: "Plush Agri Solutions branded input handed to a farmer in Danhonu 1" },
];

export default function PilotCommunitySection() {
  return (
    <section className="bg-cream py-24 lg:py-32">
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
          >
            <div className="relative card overflow-hidden row-span-2 aspect-[3/4]">
              <Image src={photos[0].src} alt={photos[0].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative card overflow-hidden aspect-square">
              <Image src={photos[1].src} alt={photos[1].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative card overflow-hidden aspect-square">
              <Image src={photos[2].src} alt={photos[2].alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
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
            <div key={m.label}>
              <p className="num-tabular text-navy font-bold" style={{ fontSize: "2rem" }}>
                {m.value}
              </p>
              <p className="text-gray-600 text-sm mt-1">{m.label}</p>
              <p className="text-gray-400 text-xs mt-1">as at July 2026</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
