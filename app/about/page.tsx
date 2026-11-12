import type { Metadata } from "next";
import AboutIntro from "@/components/sections/about/AboutIntro";
import AboutValuesSection from "@/components/sections/about/AboutValuesSection";
import FounderSection from "@/components/sections/about/FounderSection";
import TeamSection from "@/components/sections/TeamSection";
import AboutCTASection from "@/components/sections/about/AboutCTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Plush Agri Solutions is a veterinary and agricultural solutions business based in Kaduna State, founded by Dr. Rukayyah Abdulsalam to bring practical support to farmers at the farm gate.",
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
      <AboutIntro />
      <AboutValuesSection />
      <FounderSection />
      <TeamSection />
      <AboutCTASection />
    </>
  );
}
