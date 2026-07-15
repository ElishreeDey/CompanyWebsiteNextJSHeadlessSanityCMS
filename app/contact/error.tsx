/*
 ****************************************************************************************************************************
 * Filename    : error
 * Description : Errors for the contact segment. Catches unexpected rendering failures on the contact page.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { CONTACT_MESSAGES } from "@/app/contact/messages";

export default function ContactError({
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
        {CONTACT_MESSAGES.errorTitle}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        {CONTACT_MESSAGES.errorMessage}
      </p>
      <button
        onClick={() => unstable_retry()}
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        {CONTACT_MESSAGES.retryButtonLabel}
      </button>
    </main>
  );
}
