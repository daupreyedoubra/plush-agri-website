import type { Metadata } from "next";
import Image from "next/image";
import ImpactHero from "@/components/sections/impact/ImpactHero";
import TheoryOfChange from "@/components/sections/impact/TheoryOfChange";
import OneHealthSection from "@/components/sections/impact/OneHealthSection";
import DeliveryPillars from "@/components/sections/impact/DeliveryPillars";
import ImpactSection from "@/components/sections/ImpactSection";
import TargetBeneficiaries from "@/components/sections/impact/TargetBeneficiaries";
import EvidenceFramework from "@/components/sections/impact/EvidenceFramework";
import ImpactCTA from "@/components/sections/impact/ImpactCTA";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Plush Agri Solutions operates with a documented Theory of Change, One Health approach, and functioning M&E framework. Evidence-driven agricultural and veterinary impact across Northern Nigeria.",
  alternates: {
    canonical: "https://plushagrisolutions.com/impact",
  },
  openGraph: {
    url: "https://plushagrisolutions.com/impact",
    title:
      "Impact | Plush Agri Solutions | Evidence-Driven Agricultural Development",
    description:
      "Evidence-driven. Field-tested. Community-owned. PAS's impact model, theory of change, One Health approach, and M&E framework.",
  },
};

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <TheoryOfChange />
      <OneHealthSection />
      <DeliveryPillars />
      <div className="relative w-full h-64 lg:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=75&auto=format&fit=crop"
          alt="Agricultural landscape across Northern Nigeria farmland"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      <ImpactSection />
      <TargetBeneficiaries />
      <EvidenceFramework />
      <ImpactCTA />
    </>
  );
}
