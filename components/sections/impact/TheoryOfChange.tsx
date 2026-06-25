"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const stages = [
  {
    label: "Inputs",
    title: "What we bring",
    points: [
      "Credentialed veterinary expertise",
      "Field-tested advisory protocols",
      "Quality biological inputs",
      "Community relationships",
    ],
    bg: "#1F4D36",
    textColor: "#ffffff",
    labelColor: "rgba(220,232,215,0.7)",
  },
  {
    label: "Activities",
    title: "What we do",
    points: [
      "Farm visits & assessments",
      "Livestock health programmes",
      "Farmer training sessions",
      "Cooperative & community advisory",
    ],
    bg: "#5E8B3D",
    textColor: "#ffffff",
    labelColor: "rgba(255,255,255,0.65)",
  },
  {
    label: "Outputs",
    title: "What we produce",
    points: [
      "Farms visited & documented",
      "Farmers trained & certified",
      "Vaccines & inputs delivered",
      "Protocols implemented",
    ],
    bg: "#163A70",
    textColor: "#ffffff",
    labelColor: "rgba(255,255,255,0.65)",
  },
  {
    label: "Outcomes",
    title: "What changes",
    points: [
      "Reduced livestock mortality",
      "Improved herd productivity",
      "Better farm decisions",
      "Stronger cooperatives",
    ],
    bg: "#DCE8D7",
    textColor: "#1F4D36",
    labelColor: "#5E8B3D",
  },
  {
    label: "Impact",
    title: "What it means",
    points: [
      "Farmer income security",
      "Community food resilience",
      "Agricultural system strength",
      "Scalable rural development",
    ],
    bg: "#F6F2E8",
    textColor: "#1F4D36",
    labelColor: "#5E8B3D",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stageVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function TheoryOfChange() {
  return (
    <section className="bg-neutral py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Theory of Change
        </motion.p>
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-4 max-w-2xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          From field presence to lasting impact.
        </motion.h2>
        <motion.p
          className="text-base text-gray-500 mb-16 lg:mb-20 max-w-2xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          PAS operates on a clear causal chain. Each stage is documented and
          measurable, from the inputs we bring to the community-level outcomes
          we exist to create.
        </motion.p>

        {/* Flow diagram — horizontal on desktop */}
        <motion.div
          className="flex flex-col lg:flex-row items-stretch gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex lg:flex-row flex-col items-stretch flex-1">
              {/* Stage block */}
              <motion.div
                className="flex-1 p-7 lg:p-8 flex flex-col gap-5"
                style={{ backgroundColor: stage.bg }}
                variants={stageVariants}
              >
                {/* Label */}
                <span
                  className="text-[10px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: stage.labelColor }}
                >
                  {stage.label}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-bold leading-snug"
                  style={{ color: stage.textColor }}
                >
                  {stage.title}
                </h3>

                {/* Divider */}
                <span
                  className="block h-px w-8 opacity-30"
                  style={{ backgroundColor: stage.textColor }}
                  aria-hidden="true"
                />

                {/* Points */}
                <ul className="space-y-2.5 flex-1">
                  {stage.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-xs leading-relaxed"
                      style={{ color: stage.textColor, opacity: 0.85 }}
                    >
                      <span
                        className="mt-1.5 block w-1 h-1 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: stage.textColor, opacity: 0.6 }}
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Arrow connector — horizontal on desktop, vertical on mobile */}
              {i < stages.length - 1 && (
                <div
                  className="flex items-center justify-center lg:w-8 h-8 lg:h-auto flex-shrink-0"
                  aria-hidden="true"
                >
                  {/* Desktop: horizontal arrow */}
                  <svg
                    className="hidden lg:block"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="#1F4D36"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* Mobile: vertical arrow */}
                  <svg
                    className="block lg:hidden"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5v14M6 13l6 6 6-6"
                      stroke="#1F4D36"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
