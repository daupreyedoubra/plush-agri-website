import type { Metadata } from "next";
import heroPhoto from "@/public/images/field/trainer-session.jpg";
import PageHero from "@/components/ui/PageHero";
import CtaButton from "@/components/ui/CtaButton";
import ServiceList from "@/components/sections/services/ServiceList";
import FinalCta from "@/components/sections/home/FinalCta";
import { WHATSAPP_VET_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Veterinary services and farm visits, livestock health and biosecurity, farm management and advisory, agricultural inputs and supplies, training, and partnerships from Plush Agri Solutions in Kaduna State.",
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
    title: "Our Services | Plush Agri Solutions",
    description:
      "Veterinary services, livestock health and biosecurity, farm advisory, agricultural inputs, training and partnerships for farmers in Kaduna State.",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumb="Our Services"
        label="Our Services"
        title="Practical support at every stage of production."
        intro="At Plush Agri Solutions, we provide practical support to guide farmers at every stage of their production journey."
        photo={heroPhoto}
        photoAlt="A Plush Agri Solutions trainer speaking with farmers during a session"
        photoPosition="object-[center_30%]"
      >
        <CtaButton href={WHATSAPP_VET_URL}>Talk to a Vet</CtaButton>
      </PageHero>
      <ServiceList />
      <FinalCta />
    </main>
  );
}
