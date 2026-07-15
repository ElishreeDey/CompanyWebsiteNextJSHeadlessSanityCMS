/*
 ****************************************************************************************************************************
 * Filename    : BlogList
 * Description : Client-side blog list — renders posts from SWR (seeded with the server-rendered SSG data, then
 *               periodically revalidated in the browser) and filters them by title via a search input.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-15
 ****************************************************************************************************************************
 */

"use client";

import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { POSTS_QUERY_RESULT } from "@/sanity.types";
import { BLOG_MESSAGES } from "@/app/blog/messages";

const REFRESH_INTERVAL_MS = 60_000;

async function fetchPosts(): Promise<POSTS_QUERY_RESULT> {
  return client.fetch(POSTS_QUERY);
}

export default function BlogList({
  initialPosts,
}: {
  initialPosts: POSTS_QUERY_RESULT;
}) {
  const [search, setSearch] = useState("");
  const { data: posts } = useSWR("posts", fetchPosts, {
    fallbackData: initialPosts,
    refreshInterval: REFRESH_INTERVAL_MS,
    revalidateOnFocus: true,
  });

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={BLOG_MESSAGES.searchPlaceholder}
        aria-label={BLOG_MESSAGES.searchPlaceholder}
        className="w-full max-w-md rounded border border-black/[.08] px-3 py-2 dark:border-white/[.145] dark:bg-transparent"
      />

      {posts.length === 0 && (
        <p className="text-zinc-600 dark:text-zinc-400">
          {BLOG_MESSAGES.emptyState}
        </p>
      )}

      {posts.length > 0 && filteredPosts.length === 0 && (
        <p className="text-zinc-600 dark:text-zinc-400">
          {BLOG_MESSAGES.searchNoResults}
        </p>
      )}

      <ul className="flex flex-col gap-10">
        {filteredPosts.map((post) => (
          <li key={post._id} className="flex flex-col gap-3">
            <Link
              href={`/blog/${post.slug.current}`}
              className="flex flex-col gap-3"
            >
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
              {post.author} · {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
