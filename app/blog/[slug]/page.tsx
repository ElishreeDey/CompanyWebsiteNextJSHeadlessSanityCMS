/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Blog post detail page — fetches a single post by slug from Sanity and renders its full content.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-09
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY } from "@/sanity/lib/queries";
import { BLOG_MESSAGES } from "@/app/blog/messages"; //centralized message for this segment

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) {
    return { title: BLOG_MESSAGES.postNotFoundTitle };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.image
        ? [urlFor(post.image).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-16 py-32">
      {post.image ? (
        <Image
          src={urlFor(post.image).width(1200).height(600).url()}
          alt={post.title}
          width={1200}
          height={600}
          priority
          className="rounded-lg object-cover"
        />
      ) : null}

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
        <p className="text-sm text-zinc-500">
          {post.author} · {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>

      <div className="flex flex-col gap-4 text-zinc-700 dark:text-zinc-300">
        <PortableText value={post.content} />
      </div>
    </main>
  );
}
