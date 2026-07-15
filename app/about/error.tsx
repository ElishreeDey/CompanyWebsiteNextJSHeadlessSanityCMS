/*
 ****************************************************************************************************************************
 * Filename    : error
 * Description : Errors for the about segment. Catches failures from the Sanity fetch for Site Settings (e.g. API being unreachable)
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { ABOUT_MESSAGES } from "@/app/about/messages";

export default function AboutError({
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
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start gap-4 px-16 py-20">
      <h1 className="text-2xl font-semibold tracking-tight">
        {ABOUT_MESSAGES.errorTitle}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        {ABOUT_MESSAGES.errorMessage}
      </p>
      <button
        onClick={() => unstable_retry()}
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        {ABOUT_MESSAGES.retryButtonLabel}
      </button>
    </main>
  );
}
