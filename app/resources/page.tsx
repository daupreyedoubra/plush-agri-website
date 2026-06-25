import type { Metadata } from "next";
import ResourcesHero from "@/components/sections/resources/ResourcesHero";
import ResourcesHub from "@/components/sections/resources/ResourcesHub";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical field knowledge on animal health, farmer education, disease prevention, biosecurity, and field insights from the PAS veterinary and agricultural team in Kaduna, Nigeria.",
  alternates: {
    canonical: "https://plushagrisolutions.com/resources",
  },
  openGraph: {
    url: "https://plushagrisolutions.com/resources",
    title: "Resources | Plush Agri Solutions | Field Knowledge Hub",
    description:
      "Practical guides on animal health, disease prevention, biosecurity, and farm management for farmers in Northern Nigeria.",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesHub />
    </>
  );
}
