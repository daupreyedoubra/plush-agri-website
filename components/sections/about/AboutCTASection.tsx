"use client";

import { motion } from "framer-motion";
import CtaButton from "@/components/ui/CtaButton";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function AboutCTASection() {
  return (
    <section className="bg-dark-green py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Text */}
          <div className="lg:col-span-8 mb-10 lg:mb-0">
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6"
              {...inView}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Work With Us
            </motion.p>
            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-white leading-[1.15]"
              {...inView}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              Partner with us to expand field reach.
            </motion.h2>
          </div>

          {/* CTAs */}
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end gap-4">
            <motion.div
              className="flex flex-col sm:flex-row lg:flex-col gap-4"
              {...inView}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              <CtaButton href="/partnerships" variant="primary">
                Explore Partnerships
              </CtaButton>
              <CtaButton href="/contact" variant="outline">
                Get in Touch
              </CtaButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
