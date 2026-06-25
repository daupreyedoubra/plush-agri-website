"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// NOTE: Replace all pillar content with exact text from Company Profile Section 04 (Pillars A, B, C, D)
const pillars = [
  {
    letter: "A",
    name: "Veterinary & Animal Health",
    description:
      "The delivery of credentialed veterinary advisory and livestock health services directly to farmers. This pillar covers farm visits, diagnosis, preventive health programmes, biosecurity advisory, and direct input supply.",
    activities: [
      "On-site veterinary assessments",
      "Livestock disease prevention programmes",
      "Vaccination and deworming protocols",
      "Biosecurity design and implementation",
      "Direct supply of quality biologicals",
    ],
  },
  {
    letter: "B",
    name: "Agricultural Advisory & Input Access",
    description:
      "Field-based agricultural advisory covering crop management, soil health, and input selection, combined with direct, fair-price access to the inputs farmers need to act on the guidance they receive.",
    activities: [
      "Crop management advisory",
      "Input selection and procurement support",
      "Fair-market supply of seeds, tools, and materials",
      "Post-season review and planning",
      "Input quality verification",
    ],
  },
  {
    letter: "C",
    name: "Training & Capacity Building",
    description:
      "Structured, progressive training programmes that build lasting farmer capability. This pillar moves beyond one-off sessions to create the kind of knowledge that stays on the farm and multiplies across the community.",
    activities: [
      "Individual and group farmer training",
      "Multi-session capacity building cohorts",
      "Cooperative-level advisory programmes",
      "Train-the-trainer support",
      "Progress tracking and outcome documentation",
    ],
  },
  {
    letter: "D",
    name: "Community Engagement & Partnerships",
    description:
      "Community-level programming and formal partnerships with NGOs, government, and development organisations. This pillar ensures PAS's work reaches beyond individual farms and contributes to systemic change.",
    activities: [
      "Community health and nutrition engagement",
      "Cooperative and farmer group support",
      "Technical partnership with NGOs and government",
      "Development programme implementation support",
      "M&E contribution and evidence generation",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const pillarVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function DeliveryPillars() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Delivery Model
        </motion.p>
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-white leading-[1.2] mb-4 max-w-xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Four pillars. One integrated delivery model.
        </motion.h2>
        <motion.p
          className="text-base text-white/60 mb-16 lg:mb-20 max-w-2xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          PAS delivers impact through four interdependent pillars. Each pillar
          reinforces the others: advisory without inputs stalls; inputs without
          training waste; training without community reach fails to scale.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.letter}
              className="bg-primary p-10 lg:p-12 flex flex-col gap-6"
              variants={pillarVariants}
            >
              {/* Letter badge */}
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center border border-white/20 text-white font-bold text-lg flex-shrink-0">
                  {pillar.letter}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {pillar.name}
                </h3>
              </div>

              <p className="text-sm text-white/60 leading-relaxed">
                {pillar.description}
              </p>

              {/* Activities */}
              <ul className="space-y-2 pt-2 border-t border-white/10">
                {pillar.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-3 text-xs text-white/50"
                  >
                    <span
                      className="mt-1.5 block w-1 h-1 flex-shrink-0 bg-secondary"
                      aria-hidden="true"
                    />
                    {activity}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
