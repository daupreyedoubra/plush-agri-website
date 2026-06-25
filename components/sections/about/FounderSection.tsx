"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function FounderSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Leadership
        </motion.p>

        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-16 lg:mb-20"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Founded and led from the field.
        </motion.h2>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
          {/* Photo */}
          <motion.div
            className="lg:col-span-4 mb-10 lg:mb-0"
            {...inView}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-accent">
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80&auto=format&fit=crop"
                alt="Dr. Rukayyah Abdulsalam, Founder of Plush Agri Solutions"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            {/* Caption */}
            <div className="mt-5 pl-1">
              <p className="text-base font-bold text-primary">
                Dr. Rukayyah Abdulsalam
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Veterinary Doctor &amp; Agricultural Consultant
              </p>
              <p className="text-xs text-gray-400 mt-1">Kaduna, Nigeria</p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="lg:col-span-8"
            {...inView}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          >
            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Veterinary Doctor",
                "Agricultural Consultant",
                "Kaduna State",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold tracking-wide uppercase px-4 py-2 border border-accent text-primary"
                  style={{ borderRadius: "4px" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio text — NOTE: Replace with founder biography from Company Profile */}
            <div className="space-y-5 text-base text-gray-600 leading-relaxed">
              <p>
                Dr. Rukayyah Abdulsalam is the founder and principal consultant
                of Plush Agri Solutions. A qualified Veterinary Doctor and
                Agricultural Consultant based in Kaduna State, she has built
                her practice around a single conviction: that credentialed
                expertise is only valuable when it reaches the people who need
                it most, in the places where they work.
              </p>
              <p>
                Her approach is grounded in field observation, follow-through,
                and the kind of sustained relationships that allow farmers to
                build real capacity over time. She works directly with
                smallholder and commercial farmers, cooperatives, rural
                communities, and development partners across Northern Nigeria.
              </p>
              <p>
                Under her leadership, PAS has developed partnerships with
                ASVIOL Support Initiative and Alraj Agro Enterprise, and
                continues to expand its geographic reach across the region.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
