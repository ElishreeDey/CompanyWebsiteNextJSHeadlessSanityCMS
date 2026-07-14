/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Homepage
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { SITE_MESSAGES } from "@/app/messages";

export default async function Home() {
  const { data: siteSettings } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
  });
  const bannerTitle =
    siteSettings?.bannerTitle ?? SITE_MESSAGES.defaultBannerTitle;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-20 px-16 py-20">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">{bannerTitle}</h1>
        {siteSettings?.subtitle ? (
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {siteSettings.subtitle}
          </p>
        ) : null}
      </section>

      {siteSettings?.vision ? (
        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            {SITE_MESSAGES.visionHeading}
          </h2>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
            {siteSettings.vision}
          </p>
        </section>
      ) : null}
    </main>
  );
}
