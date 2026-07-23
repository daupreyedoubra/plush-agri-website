"use client";

import { motion, type Variants } from "framer-motion";
import { Users, Tractor, CalendarDays, School, Megaphone, Syringe } from "lucide-react";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const programmes = [
  {
    icon: Users,
    name: "Community Dialogues",
    description:
      "Conversations with local leaders, cooperatives, and households that build trust before any advisory work begins.",
  },
  {
    icon: Tractor,
    name: "Farm Visits",
    description:
      "On-site checks with individual farmers: disease signs, husbandry, and practical next steps for their herd.",
  },
  {
    icon: CalendarDays,
    name: "Monthly Farmers' Forum",
    description:
      "A standing meeting where farmers raise problems directly and hear from a vet in person.",
  },
  {
    icon: School,
    name: "School-Based One Health Education",
    description:
      "Sessions with pupils in Danhonu 1 that connect animal health to the health of the whole community.",
  },
  {
    icon: Megaphone,
    name: "Awareness Campaigns",
    description:
      "Simple, repeated messages on disease prevention and safe drug use, carried beyond the farm gate.",
  },
  {
    icon: Syringe,
    name: "Vaccination Support",
    description:
      "Guidance and coordination that helps farmers protect their herds before disease takes hold.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0, 0, 1] } },
};

const inView = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function ApproachSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p className="label mb-6" {...inView} transition={{ duration: 0.5, ease: EASE }}>
          Our Approach
        </motion.p>
        <motion.h2
          className="text-navy text-3xl lg:text-4xl mb-16 max-w-xl"
          {...inView}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          Six programmes, one community-embedded model.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {programmes.map((programme) => (
            <motion.div
              key={programme.name}
              className="card group bg-sage-tint p-8 flex flex-col gap-5 transition-[transform,box-shadow] duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] hover:-translate-y-[5px] hover:shadow-[0_16px_36px_rgba(22,54,92,0.18)] motion-reduce:hover:translate-y-0"
              variants={cardVariants}
            >
              <span className="w-12 h-12 rounded-full bg-olive/15 flex items-center justify-center transition-colors duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] group-hover:bg-bright-green/20">
                <programme.icon
                  className="w-6 h-6 text-olive transition-colors duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] group-hover:text-bright-green"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <h3 className="text-navy font-bold text-lg leading-snug">{programme.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{programme.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
