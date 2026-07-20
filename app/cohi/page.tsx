import type { Metadata } from "next";
import CohiHero from "@/components/sections/cohi/CohiHero";
import WhatCohiIsSection from "@/components/sections/cohi/WhatCohiIsSection";
import ApproachSection from "@/components/sections/cohi/ApproachSection";
import PilotCommunitySection from "@/components/sections/cohi/PilotCommunitySection";
import PartnerCTASection from "@/components/sections/cohi/PartnerCTASection";

export const metadata: Metadata = {
  title: "Community One Health Initiative | Plush Agri Solutions",
  description:
    "COHI brings veterinary care into the community: dialogues, farm visits, a monthly farmers' forum, school-based education, awareness campaigns, and vaccination support, piloted in Danhonu 1, Chikun LGA.",
  openGraph: {
    title: "Community One Health Initiative | Plush Agri Solutions",
    description:
      "One Health in Action. One Community at a Time. Our flagship programme, piloted in Danhonu 1, Chikun LGA, Kaduna State.",
  },
};

export default function CohiPage() {
  return (
    <main>
      <CohiHero />
      <WhatCohiIsSection />
      <ApproachSection />
      <PilotCommunitySection />
      <PartnerCTASection />
    </main>
  );
}
