"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getVisiblePosts } from "@/lib/blog";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const EXCERPT_MAX = 120;

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const sliced = text.slice(0, max).trimEnd();
  const lastSpace = sliced.lastIndexOf(" ");
  return `${sliced.slice(0, lastSpace > 0 ? lastSpace : max)}…`;
}

export default function BlogPreviewSection() {
  const posts = getVisiblePosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-6"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          From the Field
        </motion.p>

        <motion.p
          className="text-gray-600 text-lg leading-relaxed mb-14 max-w-2xl"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
        >
          Practical knowledge, shared freely. Read our latest articles on
          livestock health, farm productivity, and agricultural best
          practice.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              className="bg-white border border-[#87A878] p-8 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              {post.category && (
                <p
                  className="font-heading font-semibold text-xs tracking-[0.12em] uppercase mb-4"
                  style={{ color: "#5E8B3D" }}
                >
                  {post.category}
                </p>
              )}
              <h3
                className="font-heading font-bold text-xl leading-snug mb-3"
                style={{ color: "#1F4D36" }}
              >
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {truncate(post.excerpt, EXCERPT_MAX)}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="font-heading font-semibold text-sm self-start hover:underline"
                style={{ color: "#5E8B3D" }}
              >
                Read More
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
        >
          <Link
            href="/blog"
            className="font-heading font-bold text-sm px-10 h-14 inline-flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1F4D36", color: "#F6F2E8" }}
          >
            Read All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
