"use client";

import { motion } from "framer-motion";
import CtaButton from "@/components/ui/CtaButton";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function PartnerCTASection() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
        <motion.p
          className="label !text-bright-green mb-6"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Support COHI
        </motion.p>

        <motion.h2
          className="text-white text-3xl lg:text-4xl mb-6 max-w-2xl mx-auto"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
        >
          Help us take One Health to the next community.
        </motion.h2>

        <motion.p
          className="text-white/85 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-10"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
        >
          Plush Agri Solutions welcomes government institutions, development
          partners, and NGOs who want to co-design and fund community One
          Health work in Kaduna State.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
        >
          <CtaButton href="mailto:plushagrisolutions@gmail.com">
            Partner With Us
          </CtaButton>
          <a
            href="tel:+2348033670509"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            0803 367 0509
          </a>
        </motion.div>
      </div>
    </section>
  );
}
