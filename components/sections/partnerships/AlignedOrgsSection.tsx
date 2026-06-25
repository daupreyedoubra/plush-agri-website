"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const organisations = [
  {
    name: "Food and Agriculture Organization of the United Nations",
    shortName: "FAO",
    acronymColor: "#003087",
    borderColor: "#003087",
  },
  {
    name: "USAID Feed the Future",
    shortName: "USAID",
    acronymColor: "#B22222",
    borderColor: "#B22222",
  },
  {
    name: "Bill and Melinda Gates Foundation",
    shortName: "Gates Foundation",
    acronymColor: "#2D2D2D",
    borderColor: "#2D2D2D",
  },
  {
    name: "International Livestock Research Institute",
    shortName: "ILRI",
    acronymColor: "#1F4D36",
    borderColor: "#1F4D36",
  },
  {
    name: "African Development Bank",
    shortName: "AfDB",
    acronymColor: "#0A2351",
    borderColor: "#0A2351",
  },
];

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function AlignedOrgsSection() {
  return (
    <section className="bg-neutral py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Organisations We Align With
        </motion.p>
        <motion.p
          className="text-base text-gray-500 max-w-2xl mb-16 leading-relaxed"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          PAS operates within the same agricultural development ecosystem as these
          global organisations. Their frameworks, standards, and priorities
          inform how we design and document our work.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-stretch gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          {organisations.map((org) => (
            <div
              key={org.shortName}
              className="flex flex-col items-center justify-center bg-white border px-6 py-5 min-w-[130px] text-center"
              style={{
                height: "120px",
                borderColor: org.borderColor,
                borderWidth: "1px",
                borderRadius: "2px",
              }}
              title={org.name}
              aria-label={org.name}
            >
              <span
                className="block text-2xl font-bold leading-none mb-2"
                style={{ color: org.acronymColor }}
              >
                {org.shortName}
              </span>
              <span className="text-[10px] text-gray-400 leading-snug max-w-[110px]">
                {org.name.length > 30 ? org.name.substring(0, 28) + "…" : org.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
