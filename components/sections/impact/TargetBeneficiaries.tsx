"use client";

import { Users, TrendingUp, Building2, Network, Home, Handshake } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

interface Beneficiary {
  type: string;
  description: string;
  metric: string;
  Icon: LucideIcon;
}

const beneficiaries: Beneficiary[] = [
  {
    type: "Smallholder Farmers",
    description:
      "Primary beneficiaries: farmers managing small plots and a few head of livestock, for whom credentialed veterinary and agricultural guidance is otherwise inaccessible.",
    metric: "Primary target group",
    Icon: Users,
  },
  {
    type: "Semi-Commercial Farmers",
    description:
      "Scaling farmers who are investing in growth and need structured advisory to protect that investment and ensure it produces returns.",
    metric: "Secondary target group",
    Icon: TrendingUp,
  },
  {
    type: "Commercial Livestock Farms",
    description:
      "Established operations seeking ongoing veterinary oversight, biosecurity systems, and evidence-based herd management at scale.",
    metric: "Technical advisory target",
    Icon: Building2,
  },
  {
    type: "Cooperatives",
    description:
      "Farmer groups and associations that benefit from shared advisory, collective input access, and coordinated training across membership.",
    metric: "Group delivery channel",
    Icon: Network,
  },
  {
    type: "Rural Communities",
    description:
      "Communities in which agricultural productivity, animal health, and nutritional security are directly interdependent and must be addressed together.",
    metric: "Community engagement target",
    Icon: Home,
  },
  {
    type: "Development Partners",
    description:
      "NGOs, government agencies, and international organisations that need a trusted technical partner with verified community access and functioning M&E.",
    metric: "Partnership & funding channel",
    Icon: Handshake,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function TargetBeneficiaries() {
  return (
    <section className="bg-neutral py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Target Beneficiaries
        </motion.p>
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end mb-16 lg:mb-20">
          <motion.h2
            className="lg:col-span-6 text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-4 lg:mb-0"
            {...inView}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Who benefits from this work.
          </motion.h2>
          <motion.p
            className="lg:col-span-6 text-base text-gray-500 leading-relaxed"
            {...inView}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            Six target groups, each engaging with PAS at a different level,
            from individual farm advisory to community-wide programming and
            development partnership.
          </motion.p>
        </div>

        {/* 2×3 card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {beneficiaries.map((b) => (
            <motion.div
              key={b.type}
              className="bg-white border border-accent p-7 flex flex-col gap-4"
              variants={cardVariants}
            >
              {/* Icon */}
              <div style={{ color: "#1F4D36" }}>
                <b.Icon size={28} strokeWidth={1.5} />
              </div>

              {/* Type + metric */}
              <div>
                <h3 className="text-base font-bold text-primary leading-snug mb-1">
                  {b.type}
                </h3>
                <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary">
                  {b.metric}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
