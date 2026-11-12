import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import vetPhoto from "@/public/images/field/poultry-health.jpg";
import advisoryPhoto from "@/public/images/field/farm-advisory.jpg";
import trainingPhoto from "@/public/images/field/farmer-training.jpg";
import suppliesPhoto from "@/public/images/field/farm-supplies.jpg";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";

type Service = {
  title: string;
  body: string;
  photo: StaticImageData;
  alt: string;
  position?: string;
};

const services: Service[] = [
  {
    title: "Veterinary Services",
    body: "Animal health checks, disease diagnosis, treatment, vaccination and other veterinary support.",
    photo: vetPhoto,
    alt: "Broiler chickens beside feeders and drinkers in a poultry pen",
  },
  {
    title: "Farm Advisory and Management",
    body: "Farm visits, practical advice, disease prevention, biosecurity and better farm management practices.",
    photo: advisoryPhoto,
    alt: "A farmer working her plot during a Plush Agri Solutions farm visit",
    position: "object-[45%_center]",
  },
  {
    title: "Farmer Training and Capacity Building",
    body: "Practical training to help farmers improve their knowledge, skills and farm productivity.",
    photo: trainingPhoto,
    alt: "A trainer presenting to farmers at a farm health awareness session",
  },
  {
    title: "Agricultural Inputs and Supplies",
    body: "Access to quality veterinary products, animal health supplies, feeds, poultry equipment and other essential farm inputs.",
    photo: suppliesPhoto,
    alt: "A Plush Agri Solutions animal health product pack",
    position: "object-[center_35%]",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end mb-14">
          <div className="lg:col-span-7">
            <p className="label mb-5">Our Services</p>
            <h2 className="text-navy text-3xl lg:text-[2.6rem]">
              Practical support at every stage of production.
            </h2>
          </div>
          <p className="lg:col-span-5 text-gray-700">
            At Plush Agri Solutions, we provide practical support to guide
            farmers at every stage of their production journey.
          </p>
        </Reveal>

        <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.06}>
                <Link href="/services" className="group block">
                  <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                    <Image
                      src={s.photo}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0,0,1)] group-hover:scale-[1.04] motion-reduce:group-hover:scale-100 ${s.position ?? ""}`}
                      placeholder="blur"
                    />
                  </div>
                  <p className="font-heading text-sm font-semibold text-olive mb-2 num-tabular">
                    0{i + 1}
                  </p>
                  <h3 className="text-navy text-xl font-semibold mb-3 group-hover:text-olive transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                    {s.body}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <CtaButton href="/services">Explore Our Services</CtaButton>
        </div>
      </div>
    </section>
  );
}
