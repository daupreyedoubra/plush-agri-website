import type { Metadata } from "next";
import { getVisiblePosts } from "@/lib/blog";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogGrid from "@/components/sections/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes from Plush Agri Solutions on livestock health, preventive veterinary care, and practical farming for smallholders across Northern Nigeria.",
  alternates: {
    canonical: "https://plushagrisolutions.com/blog",
  },
  openGraph: {
    url: "https://plushagrisolutions.com/blog",
    title: "Blog | Plush Agri Solutions",
    description:
      "Plain-language writing on animal health, preventive care, and everyday farm decisions, from Dr. Rukayyah Abdulsalam and the Plush Agri Solutions team.",
  },
};

export default function BlogPage() {
  const posts = getVisiblePosts();

  return (
    <>
      <BlogHero />
      <BlogGrid posts={posts} />
    </>
  );
}
