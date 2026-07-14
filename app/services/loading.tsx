/*
 ****************************************************************************************************************************
 * Filename    : loading
 * Description : Instant loading UI for the services segment.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

export default function ServicesLoading() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-16 py-20">
      <div className="h-9 w-48 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex flex-col gap-3">
            <div className="aspect-square w-full animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-5 w-1/2 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          </li>
        ))}
      </ul>
    </main>
  );
}
