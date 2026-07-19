import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import DanhonuPilotSection from "@/components/sections/DanhonuPilotSection";
import TeamSection from "@/components/sections/TeamSection";
import COHIBannerSection from "@/components/sections/COHIBannerSection";
import TwoDoorSection from "@/components/sections/TwoDoorSection";

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
      <WhatWeDoSection />
      <HowWeWorkSection />
      <DanhonuPilotSection />
      <TeamSection />
      <COHIBannerSection />
      <TwoDoorSection />
    </>
  );
}
