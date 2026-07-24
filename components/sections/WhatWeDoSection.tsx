"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, GraduationCap, Package, Handshake } from "lucide-react";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const services = [
  {
    icon: Stethoscope,
    title: "Farm Advisory Visits",
    body: "Scheduled farm-gate visits for herd health checks, diagnosis, and hands-on advice.",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    body: "Practical sessions that build farmer and community health worker skills over time.",
  },
  {
    icon: Package,
    title: "Input Supply",
    body: "Access to the feed, supplements, and treatments farmers need, on the ground.",
  },
  {
    icon: Handshake,
    title: "Partnership Delivery",
    body: "Programme design and delivery for partners working in Kaduna State communities.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-6"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          What We Do
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              >
                <Link
                  href="/services"
                  className="card group block h-full p-7 bg-white border border-accent overflow-hidden transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-olive/15 transition-colors duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] group-hover:bg-bright-green/20">
                    <Icon
                      className="w-6 h-6 text-olive transition-colors duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] group-hover:text-bright-green"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-navy">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {service.body}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
