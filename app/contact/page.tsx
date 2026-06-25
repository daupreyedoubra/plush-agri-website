import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";
import ContactFormsSection from "@/components/sections/contact/ContactFormsSection";

export const metadata: Metadata = {
  title: "Contact | Plush Agri Solutions",
  description:
    "Reach Plush Agri Solutions for veterinary advice, farm consultancy, or partnership inquiries. Call, WhatsApp, or send a message; we respond within 48 hours.",
  openGraph: {
    title: "Contact | Plush Agri Solutions",
    description:
      "Talk to a vet today. Call, WhatsApp, or send a message; we respond within 48 hours.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfoSection />
      <ContactFormsSection />
    </main>
  );
}
