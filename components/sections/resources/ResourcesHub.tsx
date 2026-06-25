"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { categories, articles, type CategorySlug } from "@/lib/resources";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0, 0, 1] },
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ResourcesHub() {
  const [activeCategory, setActiveCategory] = useState<CategorySlug>("all");

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const activeCategoryData = categories.find((c) => c.slug === activeCategory)!;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        {/* Category Filter Nav */}
        <div className="sticky top-20 z-40 bg-white border-b border-accent pb-0 mb-12 lg:mb-16 -mx-6 lg:-mx-8 px-6 lg:px-8">
          <div
            className="flex items-center gap-0 overflow-x-auto scrollbar-none"
            role="tablist"
            aria-label="Filter resources by category"
          >
            {categories.map((cat) => (
              <button
                key={cat.slug}
                role="tab"
                aria-selected={activeCategory === cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`flex-shrink-0 px-4 py-4 text-xs font-semibold tracking-wide border-b-2 transition-colors whitespace-nowrap ${
                  activeCategory === cat.slug
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-400 hover:text-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category description */}
        <motion.p
          key={activeCategory + "-desc"}
          className="text-sm text-gray-500 mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {activeCategoryData.description}
        </motion.p>

        {/* Article Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-accent"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filtered.map((article) => {
              const cat = categories.find((c) => c.slug === article.category)!;
              return (
                <motion.article
                  key={article.id}
                  className="bg-white p-8 lg:p-10 flex flex-col gap-4 group"
                  variants={cardVariants}
                  whileHover={{ y: -3 }}
                  transition={{ type: "tween", duration: 0.22, ease: [0.25, 0, 0, 1] }}
                >
                  {/* Category + Read time */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wide text-secondary">
                      {cat.label}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-8 h-px bg-accent group-hover:w-12 transition-[width] duration-300" aria-hidden="true" />

                  {/* Title */}
                  <h3 className="text-base lg:text-lg font-bold text-primary leading-snug group-hover:text-secondary transition-colors duration-200">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-accent mt-auto">
                    <span className="text-xs text-gray-400">
                      {formatDate(article.publishedAt)}
                    </span>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded"
                      aria-label={`Read: ${article.title}`}
                    >
                      <span className="text-xs font-semibold text-secondary tracking-wide uppercase">
                        Read More
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-secondary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              );
            })}

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
