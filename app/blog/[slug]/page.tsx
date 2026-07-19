import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getVisiblePosts } from "@/lib/blog";
import BlogArticle from "@/components/sections/blog/BlogArticle";

export function generateStaticParams() {
  return getVisiblePosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://plushagrisolutions.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://plushagrisolutions.com/blog/${post.slug}`,
      title: `${post.title} | Plush Agri Solutions`,
      description: post.excerpt,
      authors: [post.author],
      ...(post.image ? { images: [{ url: post.image.src }] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogArticle post={post} />;
}
