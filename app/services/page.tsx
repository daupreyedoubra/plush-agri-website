import type { Metadata } from "next";
import { services } from "@/lib/services";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesOverview from "@/components/sections/services/ServicesOverview";
import ServiceDetailBlock from "@/components/sections/services/ServiceDetailBlock";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Plush Agri Solutions offers ten practical services: Veterinary Advisory, Farm Visits, Biosecurity, Farmer Training, and Capacity Building. Serving farmers across Northern Nigeria.",
  alternates: {
    canonical: "https://plushagrisolutions.com/services",
  },
  keywords: [
    "Veterinary Services Nigeria",
    "Livestock Health Support Kaduna",
    "Farm Visit Nigeria",
    "Agricultural Advisory Services Nigeria",
    "Biosecurity Advisory Nigeria",
    "Farmer Training Northern Nigeria",
  ],
  openGraph: {
    url: "https://plushagrisolutions.com/services",
    title:
      "Services | Plush Agri Solutions | Veterinary and Agricultural Advisory, Nigeria",
    description:
      "Ten practical, field-tested services for farmers across Northern Nigeria. Veterinary advisory, livestock health, farm visits, training, biosecurity and more.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      {services.map((service, i) => (
        <ServiceDetailBlock
          key={service.id}
          service={service}
          isEven={i % 2 === 0}
        />
      ))}
      <ServicesCTA />
    </>
  );
}
