/*
 ****************************************************************************************************************************
 * Filename    : loading
 * Description : Instant loading UI for the blog segment. Wraps both /blog and /blog/[slug] 
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-09
 ****************************************************************************************************************************
 */

export default function BlogLoading() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-16 py-32">
      <div className="h-9 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

      <ul className="flex flex-col gap-10">
        {[0, 1, 2].map((i) => (
          <li key={i} className="flex flex-col gap-3">
            <div className="h-[400px] w-full animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-6 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          </li>
        ))}
      </ul>
    </main>
  );
}
