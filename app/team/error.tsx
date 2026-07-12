/*
 ****************************************************************************************************************************
 * Filename    : error
 * Description : Errors for the team segment. Catches failures from the Sanity fetch on team.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-10
 ****************************************************************************************************************************
 */

"use client"; // Errors must be Client Components

import { useEffect } from "react";
import { TEAM_MESSAGES } from "@/app/team/messages";

export default function TeamError({
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
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start gap-4 px-16 py-32">
      <h1 className="text-2xl font-semibold tracking-tight">
        {TEAM_MESSAGES.errorTitle}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        {TEAM_MESSAGES.errorMessage}
      </p>
      <button
        onClick={() => unstable_retry()}
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        {TEAM_MESSAGES.retryButtonLabel}
      </button>
    </main>
  );
}
