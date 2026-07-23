"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function ImpactCTA() {
  return (
    <section className="bg-trust py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
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
              Partner with us to measure and scale impact.
            </motion.h2>
            <motion.p
              className="mt-6 text-base text-white/70 max-w-xl leading-relaxed"
              {...inView}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              PAS is ready to work with development organisations, government
              programmes, and investors who need a technically credible partner
              with real community access and documented field outcomes.
            </motion.p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <motion.div
              className="flex flex-col sm:flex-row lg:flex-col gap-4"
              {...inView}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            >
              <Link
                href="/partnerships"
                className="cta-btn inline-flex items-center justify-center bg-primary text-white font-semibold text-sm px-8 h-12 hover:bg-primary/90 whitespace-nowrap"
                style={{ borderRadius: "4px" }}
              >
                Explore Partnerships
              </Link>
              <Link
                href="/contact"
                className="cta-btn inline-flex items-center justify-center border border-white/30 text-white font-semibold text-sm px-8 h-12 hover:border-white/60 whitespace-nowrap"
                style={{ borderRadius: "4px" }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
