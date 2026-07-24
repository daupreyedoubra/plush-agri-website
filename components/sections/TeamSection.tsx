"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LinkedInIcon from "@/components/ui/LinkedInIcon";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  initials?: string;
  linkedin?: string;
}

const team: TeamMember[] = [
  {
    name: "Dr. Rukayyah Abdulsalam",
    role: "Founder & Lead Veterinarian",
    photo: "/images/Rukkayah.jpeg",
    linkedin: "https://ng.linkedin.com/in/rukayyah-abdulsalam-124884117",
  },
  {
    name: "Nafisah Abdulsalam",
    role: "COO",
    photo: "/images/Nafisah.jpeg",
  },
  {
    name: "Emmanuel Ochekpe",
    role: "Finance Officer",
    photo: "/images/Emmanuel.jpeg",
  },
  {
    name: "Mujahid Yahaya",
    role: "Field Assistant",
    initials: "MY",
  },
  {
    name: "Doubra",
    role: "Brand and Communications Lead",
    photo: "/images/Doubra.png",
  },
  {
    name: "Maryam",
    role: "Field Operations Coordinator",
    photo: "/images/Maryam.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-sage-tint py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-6"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Our Team
        </motion.p>

        <motion.h2
          className="text-navy font-bold text-3xl lg:text-4xl mb-14 max-w-xl"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
        >
          The people behind the work.
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
            >
              <div className="card group overflow-hidden bg-white transition-[transform,box-shadow,background-color] duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] hover:-translate-y-[5px] hover:bg-sage hover:shadow-[0_16px_36px_rgba(22,54,92,0.18)] motion-reduce:hover:translate-y-0">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role} at Plush Agri Solutions`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: "#16365C" }}
                      aria-hidden="true"
                    >
                      <span className="text-white font-heading font-bold text-4xl tracking-wide">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-base font-bold text-navy leading-snug no-underline hover:text-[#5E8B3D] hover:underline transition-colors"
                    >
                      {member.name}
                      <LinkedInIcon className="w-3.5 h-3.5 flex-shrink-0" />
                    </a>
                  ) : (
                    <p className="text-base font-bold text-navy leading-snug">
                      {member.name}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
