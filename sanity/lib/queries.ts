/*
 ****************************************************************************************************************************
 * Filename    : queries
 * Description : GROQ queries used to fetch content from Sanity.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-09
 ****************************************************************************************************************************
 */

import groq from 'groq'

// All posts, newest first(order by publishedAt) — for the blog listing page.
export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    image
  }
`

// Single post by slug, including the full body — for the blog detail page.
export const POST_QUERY = groq`
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
`
