"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { getVisiblePosts } from "@/lib/blog";

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

function excerptFor(text: string): string {
  if (text.length <= 120) return text;
  return `${text.slice(0, 120).trimEnd()}...`;
}

export default function BlogPreviewSection() {
  const posts = getVisiblePosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.h2
          className="font-bold text-3xl lg:text-4xl mb-6 max-w-xl"
          style={{ color: "#1F4D36" }}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          From the Field
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base leading-relaxed max-w-2xl mb-14"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
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
                className="group flex h-full flex-col overflow-hidden bg-white border transition-transform hover:-translate-y-1"
                style={{ borderColor: "#87A878" }}
              >
                {/* Thumbnail */}
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
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{ backgroundColor: "#1F4D36" }}
                      aria-hidden="true"
                    >
                      <Image
                        src="/images/logo-white.png"
                        alt=""
                        width={72}
                        height={72}
                        className="w-16 h-16 object-contain opacity-90"
                      />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-8">
                  <p
                    className="text-xs mb-3"
                    style={{
                      color: "#5E8B3D",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      fontVariant: "small-caps",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {post.category ?? "Field Notes"}
                  </p>
                  <h3
                    className="font-bold text-xl leading-snug mb-3"
                    style={{ color: "#1F4D36", fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {excerptFor(post.excerpt)}
                  </p>
                  <p
                    className="mt-auto pt-4 border-t text-sm font-semibold"
                    style={{ borderColor: "#87A878", color: "#5E8B3D" }}
                  >
                    Read More
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-14"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
        >
          <Link
            href="/blog"
            className="cta-btn inline-flex items-center justify-center font-bold text-sm px-10 h-14"
            style={{
              backgroundColor: "#1F4D36",
              color: "#F6F2E8",
              fontFamily: "var(--font-heading)",
            }}
          >
            Read All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
