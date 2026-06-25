"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function ServicesCTA() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-8 mb-10 lg:mb-0">
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6"
              {...inView}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Ready to Start
            </motion.p>
            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-white leading-[1.15]"
              {...inView}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              Not sure which service fits your situation?
            </motion.h2>
            <motion.p
              className="mt-6 text-base lg:text-lg text-white/70 max-w-xl leading-relaxed"
              {...inView}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              Talk to a vet. We will assess your specific situation and
              recommend the right combination of services. No generic packages.
            </motion.p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <motion.div
              className="flex flex-col sm:flex-row lg:flex-col gap-4"
              {...inView}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            >
              <Link
                href="/contact"
                className="cta-btn inline-flex items-center justify-center bg-secondary text-white font-semibold text-sm px-8 h-12 hover:bg-secondary/90 whitespace-nowrap"
                style={{ borderRadius: "4px" }}
              >
                Talk to a Vet
              </Link>
              <Link
                href="/contact"
                className="cta-btn inline-flex items-center justify-center border border-white/30 text-white font-semibold text-sm px-8 h-12 hover:border-white/60 whitespace-nowrap"
                style={{ borderRadius: "4px" }}
              >
                Book a Farm Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
