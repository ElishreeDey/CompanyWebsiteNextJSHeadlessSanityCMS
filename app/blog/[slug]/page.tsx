/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Blog post detail page — Incremental Static Regeneration (ISR). Known slugs are prerendered at
 *               build time via generateStaticParams; pages are then re-generated in the background at most
 *               once every REVALIDATE_SECONDS.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-09
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { BLOG_MESSAGES } from "@/app/blog/messages"; //centralized message for this segment

const REVALIDATE_SECONDS = 60;

export const revalidate = REVALIDATE_SECONDS;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await client.fetch(POST_SLUGS_QUERY);
  return slugs.map((slug) => ({ slug }));
}

async function getPost(slug: string) {
  return client.fetch(
    POST_QUERY,
    { slug },
    { next: { revalidate: REVALIDATE_SECONDS } }
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

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
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-16 py-20">
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
