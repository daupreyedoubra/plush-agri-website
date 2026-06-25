import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center bg-neutral">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="max-w-lg">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6">
            404
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight mb-6">
            Page not found.
          </h1>
          <p className="text-base lg:text-lg text-gray-500 leading-relaxed mb-10">
            The page you are looking for does not exist or may have moved. Try navigating from the homepage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="cta-btn inline-flex items-center justify-center bg-primary text-white font-semibold text-sm px-8 h-12 hover:bg-primary/90"
              style={{ borderRadius: "4px" }}
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="cta-btn inline-flex items-center justify-center border border-primary text-primary font-semibold text-sm px-8 h-12 hover:bg-primary/5"
              style={{ borderRadius: "4px" }}
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-accent">
            <p className="text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide">Quick links</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/impact", label: "Impact" },
                { href: "/partnerships", label: "Partnerships" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
