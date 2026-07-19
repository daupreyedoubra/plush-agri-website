import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import FoundingStorySection from "@/components/sections/about/FoundingStorySection";
import MissionVisionSection from "@/components/sections/about/MissionVisionSection";
import AboutValuesSection from "@/components/sections/about/AboutValuesSection";
import FounderSection from "@/components/sections/about/FounderSection";
import TeamSection from "@/components/sections/TeamSection";
import OrgStructureSection from "@/components/sections/about/OrgStructureSection";
import ExpansionSection from "@/components/sections/about/ExpansionSection";
import AboutCTASection from "@/components/sections/about/AboutCTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Plush Agri Solutions, founded by Dr. Rukayyah Abdulsalam to deliver credentialed veterinary and agricultural advisory services to farmers across Northern Nigeria.",
  alternates: {
    canonical: "https://plushagrisolutions.com/about",
  },
  openGraph: {
    url: "https://plushagrisolutions.com/about",
    title: "About Plush Agri Solutions | Veterinary and Agricultural Consulting, Kaduna",
    description:
      "Founded by Dr. Rukayyah Abdulsalam. A field-first veterinary and agricultural advisory practice serving Northern Nigeria from Kaduna State.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FoundingStorySection />
      <MissionVisionSection />
      <AboutValuesSection />
      <FounderSection />
      <TeamSection />
      <OrgStructureSection />
      <ExpansionSection />
      <AboutCTASection />
    </>
  );
}
