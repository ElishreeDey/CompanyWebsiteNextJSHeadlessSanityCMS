/*
 ****************************************************************************************************************************
 * Filename    : post
 * Description : GROQ queries for 'post' documents.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-10
 ****************************************************************************************************************************
 */

import { defineQuery } from "next-sanity";

// All posts, newest first (order by publishedAt) — for the blog listing page.
export const POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    image
  }
`);

// Single post by slug, including the full body — for the blog detail page.
export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    image,
    content
  }
`);
