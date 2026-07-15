/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Blog listing page — statically generated (SSG). Client-side BlogList then keeps itself
 *               fresh via SWR and provides search-by-title filtering.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-09
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import { client } from "@/sanity/lib/client"; //fetch data from Sanity, SSG-cacheable
import { POSTS_QUERY } from "@/sanity/lib/queries"; //import GROQ query created in queries/post.ts
import { BLOG_MESSAGES } from "@/app/blog/messages"; //centralized copy for this segment
import BlogList from "@/app/blog/BlogList";

export const metadata: Metadata = {
  title: BLOG_MESSAGES.listTitle,
  description: BLOG_MESSAGES.listDescription,
};

export default async function BlogPage() {
  // POSTS_QUERY is defined with defineQuery(), so Sanity TypeGen (npm run typegen) maps this
  // exact query string to POSTS_QUERY_RESULT — the result is typed automatically, no cast needed.
  const posts = await client.fetch(
    POSTS_QUERY,
    {},
    { next: { revalidate: false } }
  );

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-16 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        {BLOG_MESSAGES.listTitle}
      </h1>

      <BlogList initialPosts={posts} />
    </main>
  );
}
