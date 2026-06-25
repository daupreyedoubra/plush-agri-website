import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, categories } from "@/lib/resources";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt.slice(0, 160),
    alternates: { canonical: `https://plushagrisolutions.com/resources/${slug}` },
    openGraph: {
      url: `https://plushagrisolutions.com/resources/${slug}`,
      title: `${article.title} | Plush Agri Solutions`,
      description: article.excerpt.slice(0, 160),
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const category = categories.find((c) => c.slug === article.category)!;

  return (
    <main id="main-content">
      {/* Article header */}
      <section className="bg-neutral pt-16 pb-0">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-secondary hover:text-primary transition-colors mb-10"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Resources
          </Link>

          {/* Category tag + read time */}
          <div className="flex items-center gap-4 mb-6">
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5"
              style={{
                backgroundColor: "#DCE8D7",
                color: "#1F4D36",
              }}
            >
              {category.label}
            </span>
            <span className="text-xs text-gray-400">{article.readTime}</span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl lg:text-5xl font-bold text-primary leading-[1.15] mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            {article.title}
          </h1>

          {/* Published date + byline */}
          <div className="flex items-center gap-4 pb-10 border-b border-accent">
            <span className="text-sm text-gray-400">
              {formatDate(article.publishedAt)}
            </span>
            <span className="text-sm text-gray-300" aria-hidden="true">
              ·
            </span>
            <span className="text-sm font-semibold text-secondary">
              PAS Field Team
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-neutral py-12 lg:py-16">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <p
            className="text-base lg:text-lg text-gray-700 leading-[1.8]"
          >
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Talk to a Vet CTA */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "#1F4D36" }}
      >
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: "rgba(220,232,215,0.7)" }}
          >
            Need direct guidance?
          </p>
          <h2
            className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-[1.2]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Talk to a qualified veterinarian.
          </h2>
          <p className="text-base mb-10" style={{ color: "#DCE8D7" }}>
            The PAS field team is available for farm visits, urgent queries,
            and ongoing advisory across Northern Nigeria.
          </p>
          <Link
            href="/contact"
            className="cta-btn inline-flex items-center justify-center bg-white font-semibold text-sm px-10 h-12 hover:bg-neutral transition-colors"
            style={{ borderRadius: "4px", color: "#1F4D36" }}
          >
            Talk to a Vet
          </Link>
        </div>
      </section>
    </main>
  );
}
