"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "@/components/ui/CtaButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/cohi", label: "COHI" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b border-accent"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Plush Agri Solutions Home">
          <Image
            src="/Plush_Agri_Solutions_LOGO_PNG-01.png"
            alt="Plush Agri Solutions"
            width={180}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors pb-1 ${
                pathname === link.href
                  ? "text-navy after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-navy after:rounded-full"
                  : "text-gray-600 hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <CtaButton href="/#partner">Partner With Us</CtaButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 -mr-2 relative z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-gray-800 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer — solid Field Authority green, full opacity so hero
          content can never bleed through, even mid-transition. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden fixed inset-x-0 top-20 z-[9999] bg-dark-green overflow-y-auto mobile-menu-overlay"
          >
            <div className="px-6 py-8 flex flex-col gap-1 min-h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-4 text-xl border-b border-white/15 transition-colors ${
                    pathname === link.href
                      ? "text-white font-semibold"
                      : "text-cream/85 font-medium hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <CtaButton href="/#partner" className="mt-6 w-full">
                Partner With Us
              </CtaButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
