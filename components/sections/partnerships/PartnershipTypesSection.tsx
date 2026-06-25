"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const partnershipTypes = [
  {
    type: "Government",
    description:
      "Technical advisory to agricultural extension services, policy support, and joint programme delivery in Northern Nigerian states. PAS provides the field-level capability that government programmes often lack.",
    offers: [
      "Technical advisory for extension programmes",
      "Field implementation support",
      "Community mobilisation and access",
      "M&E and evidence documentation",
    ],
  },
  {
    type: "NGOs",
    description:
      "Field implementation partnership for agricultural and livelihood programmes. PAS contributes veterinary and agricultural expertise, farmer access, and functioning M&E to NGO-led development work.",
    offers: [
      "Programme design technical input",
      "Beneficiary access and community trust",
      "Field activity implementation",
      "Data collection and reporting",
    ],
  },
  {
    type: "Development Partners",
    description:
      "Collaboration with international development agencies, bilateral donors, and foundations investing in agricultural systems change in Northern Nigeria. PAS provides the local partner with credentialed expertise and verified results.",
    offers: [
      "Local implementation partner capacity",
      "Verified community reach",
      "Credentialed technical oversight",
      "Impact documentation for funders",
    ],
  },
  {
    type: "Investors",
    description:
      "Commercial and impact investment partnerships in agricultural input supply, livestock value chains, and rural market development. PAS's farmer networks and community relationships are the foundation for investable agricultural enterprises.",
    offers: [
      "Farmer network and market access",
      "Agricultural value chain support",
      "Input supply and distribution",
      "Impact measurement for ESG reporting",
    ],
  },
  {
    type: "Research Institutions",
    description:
      "Collaborative research partnerships producing evidence on livestock health, agricultural productivity, and development programme effectiveness in Northern Nigeria. PAS provides field access and data that academic institutions cannot generate alone.",
    offers: [
      "Field data collection and access",
      "Farmer and community engagement",
      "Collaborative study design",
      "Evidence co-production and publication",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function PartnershipTypesSection() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Partnership Types
        </motion.p>
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-white leading-[1.2] mb-16 lg:mb-20 max-w-xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Five ways to build with PAS.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {partnershipTypes.map((pt) => (
            <motion.div
              key={pt.type}
              className="bg-primary p-8 lg:p-10 flex flex-col gap-5 group"
              variants={cardVariants}
            >
              <span
                className="block h-0.5 w-8 group-hover:w-full transition-[width] duration-500 ease-out"
                style={{ backgroundColor: "#DCE8D7" }}
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-white">{pt.type}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {pt.description}
              </p>
              <ul className="space-y-2 pt-3 border-t border-white/10 mt-auto">
                {pt.offers.map((offer) => (
                  <li
                    key={offer}
                    className="flex items-start gap-3 text-xs text-white/40"
                  >
                    <span
                      className="mt-1.5 block w-1 h-1 flex-shrink-0 bg-secondary"
                      aria-hidden="true"
                    />
                    {offer}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* CTA card to fill 6th grid slot on 3-col */}
          <motion.div
            className="hidden lg:flex bg-secondary p-8 lg:p-10 flex-col justify-end gap-6"
            variants={cardVariants}
          >
            <p className="text-base font-bold text-white leading-snug">
              Don&rsquo;t see your organisation type listed?
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              PAS is open to partnership models that serve farmers. Get in touch and let us explore what is possible together.
            </p>
            <Link
              href="/contact"
              className="cta-btn inline-flex items-center justify-center bg-white text-secondary font-semibold text-sm px-6 h-11 hover:bg-white/90 self-start"
              style={{ borderRadius: "4px" }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
