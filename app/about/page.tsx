import type { Metadata } from "next";
import AboutIntro from "@/components/sections/about/AboutIntro";
import {
  CoreValues,
  WhatMakesUsDifferent,
} from "@/components/sections/about/AboutValues";
import {
  MeetFounder,
  AdvisoryBoard,
  OurTeam,
} from "@/components/sections/about/AboutPeople";
import WorkWithUs from "@/components/sections/about/WorkWithUs";

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
      "A veterinary and agricultural solutions business based in Kaduna State, founded by Dr. Rukayyah Abdulsalam to bring practical support to farmers at the farm gate.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <CoreValues />
      <WhatMakesUsDifferent />
      <MeetFounder />
      <AdvisoryBoard />
      <OurTeam />
      <WorkWithUs />
    </>
  );
}
