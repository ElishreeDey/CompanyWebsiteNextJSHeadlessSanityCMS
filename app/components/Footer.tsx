/*
 ****************************************************************************************************************************
 * Filename    : Footer
 * Description : Site footer, rendered once in the root layout.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { SITE_MESSAGES } from "@/app/messages";

async function getSiteSettings() {
  try {
    const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY });
    return data;
  } catch (error) {
    console.error("[Footer]", error);
    return null;
  }
}

export default async function Footer() {
  const siteSettings = await getSiteSettings();
  const companyName =
    siteSettings?.companyName ?? SITE_MESSAGES.defaultCompanyName;

  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-1 px-16 py-8 text-sm text-zinc-500">
        {siteSettings?.footerText ? (
          <p>{siteSettings.footerText}</p>
        ) : (
          <p>
            © {new Date().getFullYear()} {companyName}
          </p>
        )}
      </div>
    </footer>
  );
}
