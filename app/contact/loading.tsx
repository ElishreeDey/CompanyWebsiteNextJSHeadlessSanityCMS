/*
 ****************************************************************************************************************************
 * Filename    : loading
 * Description : Instant loading UI for the contact segment.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

export default function ContactLoading() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-16 py-20">
      <div className="h-9 w-48 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

      <div className="flex max-w-md flex-col gap-4">
        <div className="h-16 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-16 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-32 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-10 w-32 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </main>
  );
}
