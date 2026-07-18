"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const steps = [
  { number: "01", title: "Community entry", body: "We build trust with local leaders before any advisory work begins." },
  { number: "02", title: "Field diagnostics", body: "Farm visits identify the specific health and management issues at hand." },
  { number: "03", title: "Integrated advisory", body: "Farmers get a One Health plan covering their animals, household, and land." },
  { number: "04", title: "Follow-up loop", body: "We return to check progress and adjust the plan as conditions change." },
];

export default function HowWeWorkSection() {
  return (
    <section className="bg-dark-green py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label !text-bright-green mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          How We Work
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <p className="text-bright-green font-bold text-4xl mb-4">
                {step.number}
              </p>
              <h3 className="text-white text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
