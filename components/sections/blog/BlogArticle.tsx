"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { formatDate, type BlogPost } from "@/lib/blog";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white">
      {/* Header band */}
      <header className="relative z-10 bg-navy pt-24 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <motion.nav
            className="flex items-center gap-2 text-xs text-white/40 mb-10 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">
              Blog
            </Link>
          </motion.nav>

          <div className="max-w-[68ch]">
            <motion.p
              className="label !text-bright-green mb-6"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
            >
              {post.category ? `${post.category} · ${formatDate(post.date)}` : formatDate(post.date)}
            </motion.p>

            <motion.h1
              className="text-white text-3xl lg:text-5xl font-bold leading-[1.15]"
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
            >
              {post.title}
            </motion.h1>

            <motion.p
              className="mt-6 text-sm text-white/60"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
            >
              By {post.author}
            </motion.p>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-[68ch] mx-auto">
          {post.image && (
            <motion.div
              className="relative card overflow-hidden aspect-[16/9] mb-14"
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 68ch"
                priority
              />
            </motion.div>
          )}

          <div
            className="text-lg text-gray-700"
            style={{ lineHeight: 1.85 }}
          >
            {post.body.map((block, i) =>
              block.type === "h2" ? (
                <motion.h2
                  key={i}
                  className="font-heading text-2xl font-bold text-navy leading-snug mt-12 mb-4"
                  {...inView}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {block.text}
                </motion.h2>
              ) : (
                <motion.p
                  key={i}
                  className="mb-6"
                  {...inView}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {block.text}
                </motion.p>
              )
            )}
          </div>

          {/* Author block */}
          <motion.div
            className="mt-16 pt-10 border-t border-accent flex items-start gap-5"
            {...inView}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-olive/10">
              <Image
                src="/images/Rukkayah.jpeg"
                alt="Dr. Rukayyah Abdulsalam"
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-olive mb-1">
                Written by
              </p>
              <p className="text-base font-bold text-navy">{post.author}</p>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Founder and principal consultant, Plush Agri Solutions. Kaduna
                State, Northern Nigeria.
              </p>
            </div>
          </motion.div>

          {/* Back link */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-olive transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
