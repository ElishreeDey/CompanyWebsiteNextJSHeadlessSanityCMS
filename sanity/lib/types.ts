/*
 ****************************************************************************************************************************
 * Filename    : types
 * Description : Shared TypeScript shapes for 'post' documents fetched from Sanity. 
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-09
 ****************************************************************************************************************************
 */

import type { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

// Shape returned by POSTS_QUERY — used on the blog listing page.
export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  publishedAt: string;
  excerpt: string;
  image: SanityImageSource;
};

// Shape returned by POST_QUERY — used on the blog post detail page.
export type PostDetail = Post & {
  content: PortableTextBlock[];
};
