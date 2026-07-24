"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

const RUKAYYAH_LINKEDIN =
  "https://ng.linkedin.com/in/rukayyah-abdulsalam-124884117";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = {
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function FounderSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          className="label mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Leadership
        </motion.p>

        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-navy leading-[1.2] mb-14 lg:mb-16"
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
            <div className="relative overflow-hidden aspect-[3/4] rounded-t-full shadow-[0_4px_24px_rgba(22,54,92,0.08)]">
              <Image
                src="/images/Rukkayah.jpeg"
                alt="Dr. Rukayyah Abdulsalam, Founder of Plush Agri Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            {/* Caption */}
            <div className="mt-5 pl-1">
              <a
                href={RUKAYYAH_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base font-bold text-navy no-underline hover:text-[#5E8B3D] hover:underline transition-colors"
              >
                Dr. Rukayyah Abdulsalam
                <LinkedInIcon className="w-3.5 h-3.5 flex-shrink-0" />
              </a>
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
                  className="text-xs font-semibold tracking-wide uppercase px-4 py-2 rounded-full bg-olive/10 text-olive"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio text */}
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
                She works directly with smallholder and commercial farmers,
                cooperatives, rural communities, and development partners
                across Northern Nigeria, building the sustained relationships
                that let farmers grow real capacity over time.
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
