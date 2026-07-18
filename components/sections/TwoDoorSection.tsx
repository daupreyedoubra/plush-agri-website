"use client";

import { motion } from "framer-motion";
import CtaButton from "@/components/ui/CtaButton";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function TwoDoorSection() {
  return (
    <section id="partner" className="bg-cream py-24 lg:py-32 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.h2
          className="text-navy text-3xl lg:text-4xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Work with us.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* For Partners */}
          <motion.div
            className="card bg-navy text-white p-10 lg:p-12 flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="label !text-bright-green mb-6">For Partners</p>
            <p className="text-white/90 text-lg leading-relaxed mb-10 flex-1">
              NGOs, government, and development partners: we co-design and
              deliver community One Health programmes in Kaduna State.
            </p>
            <div className="flex flex-col items-start gap-4">
              <CtaButton href="mailto:plushagrisolutions@gmail.com">
                Email Us
              </CtaButton>
              <a
                href="tel:+2348033670509"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                0803 367 0509
              </a>
            </div>
          </motion.div>

          {/* For Farmers */}
          <motion.div
            className="card bg-white text-navy p-10 lg:p-12 flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            <p className="label mb-6">For Farmers</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-10 flex-1">
              Farm advisory, animal health support, and training. Hausa da
              English.
            </p>
            <CtaButton href="https://wa.me/2348087702906" className="self-start">
              WhatsApp a Vet
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
