import type { Metadata } from "next";
import HomeHero from "@/components/sections/home/HomeHero";
import WhoWeAre from "@/components/sections/home/WhoWeAre";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import HowWeWork from "@/components/sections/home/HowWeWork";
import ImpactPreview from "@/components/sections/home/ImpactPreview";
import Partners from "@/components/sections/home/Partners";
import ResourcesPreview from "@/components/sections/home/ResourcesPreview";
import FinalCta from "@/components/sections/home/FinalCta";

export const metadata: Metadata = {
  title: "Veterinary and Agricultural Advisory Services, Nigeria",
  description:
    "Plush Agri Solutions provides veterinary services, livestock health advisory and practical farm support to farmers, cooperatives and agribusinesses in Kaduna State, Nigeria.",
  alternates: {
    canonical: "https://plushagrisolutions.com",
  },
  openGraph: {
    url: "https://plushagrisolutions.com",
    title: "Plush Agri Solutions | Practical Farm Solutions, Kaduna Nigeria",
    description:
      "Credentialed veterinary advisory services and agricultural consulting for farmers across Northern Nigeria.",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <WhoWeAre />
      <ServicesPreview />
      <HowWeWork />
      <ImpactPreview />
      <Partners />
      <ResourcesPreview />
      <FinalCta />
    </>
  );
}
