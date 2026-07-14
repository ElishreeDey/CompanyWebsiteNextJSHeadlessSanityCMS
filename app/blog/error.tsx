/*
 ****************************************************************************************************************************
 * Filename    : error
 * Description : Error boundary for the blog segment. Catches failures from the Sanity fetch on /blog and /blog/[slug]
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-09
 ****************************************************************************************************************************
 */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { BLOG_MESSAGES } from "@/app/blog/messages"; //centralized message for this segment

export default function BlogError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-start gap-4 px-16 py-20">
      <h1 className="text-2xl font-semibold tracking-tight">
        {BLOG_MESSAGES.errorTitle}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        {BLOG_MESSAGES.errorMessage}
      </p>
      <button
        onClick={() => unstable_retry()} // re-fetch and re-render
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        {BLOG_MESSAGES.retryButtonLabel}
      </button>
    </main>
  );
}
