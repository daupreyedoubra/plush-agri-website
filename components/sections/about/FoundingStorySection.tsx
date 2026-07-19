"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function FoundingStorySection() {
  return (
    <section className="relative z-0 bg-white pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20 lg:items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-5 mb-12 lg:mb-0"
            {...inView}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative card overflow-hidden aspect-[4/5]">
              <Image
                src="/images/cohi-school-01.jpeg"
                alt="Dr. Rukayyah Abdulsalam during a community visit in Kaduna State"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="lg:col-span-7">
            <motion.p
              className="label mb-6"
              {...inView}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Our Story
            </motion.p>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-navy leading-[1.2] mb-8"
              {...inView}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              Founded on field observation, not theory.
            </motion.h2>

            <motion.div
              className="space-y-5 text-base text-gray-600 leading-relaxed"
              {...inView}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              <p>
                Plush Agri Solutions was founded by Dr. Rukayyah Abdulsalam on
                a clear-eyed recognition: the gap between agricultural
                expertise and the farmers who needed it most was not a
                knowledge gap. It was a proximity gap.
              </p>
              <p>
                Dr. Abdulsalam began conducting farm visits across Kaduna
                State, documenting real challenges in livestock health and
                crop productivity, and building the kind of trust that only
                comes from showing up consistently. From those visits, Plush
                Agri Solutions took shape: a field-first practice built on
                credentials, follow-through, and presence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
