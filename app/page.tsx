import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import AudienceSection from "@/components/sections/AudienceSection";
import ImpactSection from "@/components/sections/ImpactSection";
import PartnershipBannerSection from "@/components/sections/PartnershipBannerSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Plush Agri Solutions | Veterinary and Agricultural Advisory Services, Nigeria",
  description:
    "Plush Agri Solutions provides credentialed veterinary advisory services, livestock health support, and agricultural consulting to farmers across Northern Nigeria. Based in Kaduna State.",
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
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ValuesSection />
      <AudienceSection />
      <ImpactSection />
      <PartnershipBannerSection />
      <FinalCTASection />
    </>
  );
}
