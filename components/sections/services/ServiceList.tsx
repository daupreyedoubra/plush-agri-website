import Image, { type StaticImageData } from "next/image";
import visitPhoto from "@/public/images/field/farmer-support.jpg";
import healthPhoto from "@/public/images/field/poultry-health.jpg";
import advisoryPhoto from "@/public/images/field/farm-advisory.jpg";
import suppliesPhoto from "@/public/images/field/farm-supplies.jpg";
import trainingPhoto from "@/public/images/field/farmer-training.jpg";
import partnersPhoto from "@/public/images/field/community-session.jpg";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { PARTNERSHIPS_MAILTO } from "@/lib/contact";

/** Services page: the founder's six categories (Nov 2026). */

type Point = string | { label: string; text: string };

type Service = {
  id: string;
  title: string;
  /** Short line used only where she has not yet sent bullet points. */
  summary?: string;
  points?: Point[];
  photo: StaticImageData;
  alt: string;
  position?: string;
  cta?: { label: string; href: string };
};

const services: Service[] = [
  {
    id: "veterinary-services",
    title: "Veterinary Services and Farm Visits",
    points: [
      "Veterinary consultations and professional advice.",
      "On-farm veterinary visits and clinical care.",
      "Disease diagnosis, treatment and case follow-up.",
    ],
    photo: visitPhoto,
    alt: "A Plush Agri Solutions officer advising a farmer one to one",
  },
  {
    id: "livestock-health",
    title: "Livestock Health and Biosecurity",
    points: [
      "Vaccination programmes.",
      "Deworming and parasite control.",
      "Farm hygiene, sanitation and biosecurity.",
    ],
    photo: healthPhoto,
    alt: "Broiler chickens beside feeders and drinkers in a poultry pen",
  },
  {
    id: "farm-advisory",
    title: "Farm Management and Advisory",
    summary:
      "Practical farm advice and management support to help farmers make informed decisions and manage their farms better.",
    photo: advisoryPhoto,
    alt: "A farmer working her plot during a Plush Agri Solutions farm visit",
    position: "object-[45%_center]",
  },
  {
    id: "inputs-and-supplies",
    title: "Agricultural Inputs, Livestock and Farm Supplies",
    points: [
      {
        label: "Poultry stock",
        text: "Day-old chicks, broilers, layers and point-of-lay pullets.",
      },
      {
        label: "Vaccines and biologicals",
        text: "Quality vaccines and other biological products.",
      },
      {
        label: "Veterinary products",
        text: "Veterinary medicines and animal health products.",
      },
      {
        label: "Animal feed",
        text: "Quality animal feeds and feed supplements.",
      },
      {
        label: "Farm equipment",
        text: "Poultry equipment and other essential farm supplies.",
      },
    ],
    photo: suppliesPhoto,
    alt: "A Plush Agri Solutions animal health product pack",
    position: "object-[center_35%]",
    cta: { label: "Explore Products & Supplies", href: "/products" },
  },
  {
    id: "training",
    title: "Training and Capacity Building",
    summary:
      "Practical training to help farmers improve their knowledge, skills and farm productivity.",
    photo: trainingPhoto,
    alt: "A trainer presenting to farmers at a farm health awareness session",
  },
  {
    id: "partnerships",
    title: "Agricultural Partnerships and Programme Support",
    summary:
      "We welcome opportunities to collaborate with agribusinesses, cooperatives, development organisations and institutions seeking practical solutions across the agricultural value chain.",
    photo: partnersPhoto,
    alt: "Farmers seated at a Plush Agri Solutions community engagement session",
    cta: { label: "Discuss a Partnership", href: PARTNERSHIPS_MAILTO },
  },
];

export default function ServiceList() {
  return (
    <>
      {services.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`${flip ? "bg-white" : "bg-cream"} py-20 lg:py-28 scroll-mt-20`}
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
              <Reveal
                className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={s.photo}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`object-cover ${s.position ?? ""}`}
                    placeholder="blur"
                  />
                </div>
              </Reveal>

              <Reveal
                delay={0.08}
                className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`}
              >
                <p className="font-heading font-bold text-olive text-3xl leading-none num-tabular mb-6">
                  0{i + 1}
                </p>
                <h2 className="text-navy text-2xl lg:text-[2rem] leading-[1.2] mb-8 max-w-[22ch]">
                  {s.title}
                </h2>

                {s.summary && (
                  <p className="text-gray-700 text-lg leading-relaxed max-w-[52ch]">
                    {s.summary}
                  </p>
                )}

                {s.points && (
                  <ul className="max-w-[52ch]">
                    {s.points.map((p) => (
                      <li
                        key={typeof p === "string" ? p : p.label}
                        className="border-t-2 border-navy/15 py-4 text-gray-700 leading-relaxed"
                      >
                        {typeof p === "string" ? (
                          p
                        ) : (
                          <>
                            <span className="block font-heading font-semibold text-navy mb-1">
                              {p.label}
                            </span>
                            {p.text}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {s.cta && (
                  <div className="mt-10">
                    <CtaButton href={s.cta.href}>{s.cta.label}</CtaButton>
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}
    </>
  );
}
