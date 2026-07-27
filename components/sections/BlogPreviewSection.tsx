"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { getReadTime, getVisiblePosts } from "@/lib/blog";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0, 0, 1] },
  },
};

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
          className="text-gray-600 text-base leading-relaxed max-w-2xl mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          Practical knowledge, shared freely. Read our latest articles on
          livestock health, farm productivity, and agricultural best
          practice.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {posts.map((post) => (
            <motion.article key={post.slug} variants={cardVariants} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col bg-white overflow-hidden"
                style={{ border: "1px solid #87A878" }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col justify-between bg-navy p-6">
                      <span className="text-xs font-bold tracking-[0.25em] uppercase text-bright-green">
                        Field Notes
                      </span>
                      <span
                        className="font-heading text-white/15 font-bold leading-none"
                        style={{ fontSize: "3.5rem" }}
                        aria-hidden="true"
                      >
                        PAS
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="text-xs text-gray-500 mb-3">
                    {post.author}
                    <span aria-hidden="true"> &middot; </span>
                    {getReadTime(post)} min read
                  </p>
                  <h3
                    className="font-heading font-bold text-lg leading-snug mb-3"
                    style={{ color: "#1F4D36" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
        >
          <Link
            href="/blog"
            className="cta-btn inline-flex items-center justify-center font-heading font-bold text-sm px-10 h-14"
            style={{ backgroundColor: "#1F4D36", color: "#F6F2E8", borderRadius: "4px" }}
          >
            Read All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
