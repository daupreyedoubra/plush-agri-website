"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function ServicesTransitionBand() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#F6F2E8" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-center text-lg lg:text-xl font-semibold max-w-2xl mx-auto"
          style={{ color: "#1F4D36" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Every service starts with the same thing: a vet on your farm,
          looking at your animals.
        </motion.p>
      </div>
    </section>
  );
}
