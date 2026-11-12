import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { blogCategories, getVisiblePosts, type BlogPost } from "@/lib/blog";

/** One recent article with an image from each category, in category order. */
function featuredPosts(): BlogPost[] {
  const posts = getVisiblePosts().filter((p) => p.image);
  const picks = blogCategories
    .map((c) => posts.find((p) => p.category === c.name))
    .filter((p): p is BlogPost => Boolean(p));
  // Top up with the most recent others if a category has no article yet.
  for (const p of posts) {
    if (picks.length >= 3) break;
    if (!picks.includes(p)) picks.push(p);
  }
  return picks.slice(0, 3);
}

export default function ResourcesPreview() {
  const posts = featuredPosts();

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <Reveal className="mb-14">
          <p className="label mb-5">Resources &amp; Blog</p>
          <h2 className="text-navy text-3xl lg:text-[2.6rem] max-w-2xl">
            Knowledge farmers can use.
          </h2>
        </Reveal>

        <ul className="grid gap-8 md:grid-cols-3 md:gap-10 mb-20">
          {blogCategories.map((c, i) => (
            <li key={c.name} className="border-t-2 border-navy/15 pt-5">
              <p className="font-heading text-sm font-semibold text-olive mb-2 num-tabular">
                0{i + 1}
              </p>
              <h3 className="text-navy text-lg font-semibold mb-2">{c.name}</h3>
              <p className="text-gray-700 text-[0.95rem] leading-relaxed">
                {c.description}
              </p>
            </li>
          ))}
        </ul>

        <ul className="grid gap-x-6 gap-y-14 md:grid-cols-3 mb-16">
          {posts.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-2xl mb-6">
                    <Image
                      src={post.image!.src}
                      alt={post.image!.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-[center_30%] transition-transform duration-700 ease-[cubic-bezier(0.25,0,0,1)] group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  {post.category && (
                    <p className="label mb-3">{post.category}</p>
                  )}
                  <h3 className="text-navy text-xl font-semibold leading-snug mb-3 group-hover:text-olive transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-dark-green">
                    Read article
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <CtaButton href="/blog">Explore All Resources</CtaButton>
      </div>
    </section>
  );
}
