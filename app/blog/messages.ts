/*
 ****************************************************************************************************************************
 * Filename    : messages
 * Description : Messages for the blog segment
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-10
 ****************************************************************************************************************************
 */

export const BLOG_MESSAGES = {
  listTitle: "Blog",
  listDescription: "News, updates, and articles from the team.",
  emptyState: "No posts published yet.",
  searchPlaceholder: "Search posts by title...",
  searchNoResults: "No posts match your search.",

  // app/blog/error.tsx — fetchfailure UI.
  errorTitle: "Couldn't load the blog",
  errorMessage: "Unable to fetch posts from Sanity.",
  retryButtonLabel: "Please try again",

  // app/blog/[slug]/page.tsx — when a slug has no matching post.
  postNotFoundTitle: "Post not found",
} as const;
