/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Blog listing page — fetches all posts from Sanity via sanityFetch and renders them.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-09
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import Image from "next/image"; //import optimized Next.js image component
import Link from "next/link"; //import Link for navigation to the post detail page
import { sanityFetch } from "@/sanity/lib/live"; //import fetch data from Sanity
import { urlFor } from "@/sanity/lib/image"; //Convert Sanity image object into a real URL
import { POSTS_QUERY } from "@/sanity/lib/queries"; //import GROQ query created in queries.ts
import type { Post } from "@/sanity/lib/types"; //shared post shape, since POSTS_QUERY isn't typed by sanityFetch

export const metadata: Metadata = {
  title: "Blog",
  description: "News, updates, and articles from the team.",
};

export default async function BlogPage() {
  const { data } = await sanityFetch({ query: POSTS_QUERY });
  const posts = data as Post[];

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-16 py-32">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>

      {posts.length === 0 && (
        <p className="text-zinc-600 dark:text-zinc-400">
          No posts published yet.
        </p>
      )}

      <ul className="flex flex-col gap-10">
        {posts.map((post) => (
          <li key={post._id} className="flex flex-col gap-3">
            <Link href={`/blog/${post.slug.current}`} className="flex flex-col gap-3">
              {post.image ? (
                <Image
                  src={urlFor(post.image).width(800).height(400).url()}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover"
                />
              ) : null}
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-zinc-500">
              {post.author} ·{" "}
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
