import type { Metadata } from "next";
import { Poppins, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const figtree = Figtree({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Plush Agri Solutions | Veterinary and Agricultural Advisory Services, Nigeria",
    template: "%s | Plush Agri Solutions",
  },
  description:
    "Plush Agri Solutions provides credentialed veterinary advisory services, livestock health support, and agricultural consulting to farmers across Northern Nigeria. Based in Kaduna State.",
  keywords: [
    "Veterinary Services Nigeria",
    "Veterinary Consultant Kaduna",
    "Livestock Advisory Services Nigeria",
    "Agricultural Advisory Services Nigeria",
    "Animal Health Services Kaduna",
  ],
  authors: [{ name: "Plush Agri Solutions" }],
  creator: "Plush Agri Solutions",
  openGraph: {
    type: "website",
    siteName: "Plush Agri Solutions",
    title:
      "Plush Agri Solutions | Veterinary and Agricultural Advisory Services, Nigeria",
    description:
      "Credentialed veterinary advisory services and agricultural consulting for farmers across Northern Nigeria.",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Plush Agri Solutions | Veterinary and Agricultural Advisory Services, Nigeria",
    description:
      "Credentialed veterinary advisory services and agricultural consulting for farmers across Northern Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${figtree.variable}`}>
      <body className="font-sans min-h-screen flex flex-col antialiased bg-white text-gray-900">
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
