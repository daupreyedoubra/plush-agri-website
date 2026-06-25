import type { Metadata } from "next";
import PartnershipsHero from "@/components/sections/partnerships/PartnershipsHero";
import WhyPartnerSection from "@/components/sections/partnerships/WhyPartnerSection";
import CurrentPartnersSection from "@/components/sections/partnerships/CurrentPartnersSection";
import AlignedOrgsSection from "@/components/sections/partnerships/AlignedOrgsSection";
import PartnershipTypesSection from "@/components/sections/partnerships/PartnershipTypesSection";
import PartnershipFormSection from "@/components/sections/partnerships/PartnershipFormSection";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with Plush Agri Solutions to expand veterinary and agricultural field reach in Northern Nigeria. Open to government, NGOs, development partners, investors, and research institutions.",
  alternates: {
    canonical: "https://plushagrisolutions.com/partnerships",
  },
  openGraph: {
    url: "https://plushagrisolutions.com/partnerships",
    title: "Partnerships | Plush Agri Solutions | Built for Collaboration",
    description:
      "PAS brings technical credibility, genuine community access, and a functioning evidence framework to every partnership. Ready to scale.",
  },
};

export default function PartnershipsPage() {
  return (
    <>
      <PartnershipsHero />
      <WhyPartnerSection />
      <CurrentPartnersSection />
      <AlignedOrgsSection />
      <PartnershipTypesSection />
      <PartnershipFormSection />
    </>
  );
}
