"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { formatDate, type BlogPost } from "@/lib/blog";

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

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="relative z-0 bg-white pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-10"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          Latest Posts
        </motion.p>

        {posts.length === 0 ? (
          <p className="text-gray-500 text-lg">
            New posts are on the way. Check back soon.
          </p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {posts.map((post) => (
              <motion.article key={post.slug} variants={cardVariants}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card group flex h-full flex-col overflow-hidden bg-white border border-accent transition-transform hover:-translate-y-1"
                >
                  {/* Media zone: real photo where it fits, else on-brand panel */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-olive mb-3">
                      {post.category ? `${post.category} · ${formatDate(post.date)}` : formatDate(post.date)}
                    </p>
                    <h2 className="font-heading text-xl font-semibold text-navy leading-snug mb-3 group-hover:text-olive transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    <p className="mt-auto pt-4 border-t border-accent text-xs text-gray-500">
                      {post.author}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
