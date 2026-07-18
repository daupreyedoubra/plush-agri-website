"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0, 0, 1] },
  },
});

export default function CohiHero() {
  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden">
      <Image
        src="/images/cohi-school-02.jpeg"
        alt="Dr. Rukayyah Abdulsalam leading a One Health education session with schoolchildren in Danhonu 1"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy" style={{ opacity: 0.4 }} />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-40 lg:pb-24">
        <div className="max-w-2xl">
          <motion.p
            className="label !text-bright-green mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0)}
          >
            Flagship Initiative
          </motion.p>

          <motion.h1
            className="text-white mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.1)}
          >
            Community One Health Initiative
          </motion.h1>

          <motion.p
            className="text-white/90 text-lg lg:text-xl leading-relaxed mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.2)}
          >
            One Health in Action. One Community at a Time.
          </motion.p>

          <motion.p
            className="text-white/70 text-sm italic"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.3)}
          >
            Tare da manoma. An tabbatar a gonar.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
