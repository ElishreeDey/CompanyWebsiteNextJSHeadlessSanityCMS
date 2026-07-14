/*
 ****************************************************************************************************************************
 * Filename    : Nav
 * Description : Application navigation bar, rendered once in the root layout so it appears on every page.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { SITE_MESSAGES } from "@/app/messages";

const NAV_LINKS = [
  {
    href: "/blog",
    label: SITE_MESSAGES.navBlog,
    tooltip: SITE_MESSAGES.navBlogTooltip,
  },
  {
    href: "/team",
    label: SITE_MESSAGES.navTeam,
    tooltip: SITE_MESSAGES.navTeamTooltip,
  },
  {
    href: "/services",
    label: SITE_MESSAGES.navServices,
    tooltip: SITE_MESSAGES.navServicesTooltip,
  },
  {
    href: "/contact",
    label: SITE_MESSAGES.navContact,
    tooltip: SITE_MESSAGES.navContactTooltip,
  },
];

async function getSiteSettings() {
  try {
    const { data } = await sanityFetch({ query: SITE_SETTINGS_QUERY });
    return data;
  } catch (error) {
    console.error("[Nav]", error);
    return null;
  }
}

export default async function Nav() {
  const siteSettings = await getSiteSettings();
  const companyName =
    siteSettings?.companyName ?? SITE_MESSAGES.defaultCompanyName;

  return (
    <header className="border-b border-black/[.08] dark:border-white/[.145]">
      <nav className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-16 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          {siteSettings?.logo ? (
            <Image
              src={urlFor(siteSettings.logo).width(32).height(32).url()}
              alt={companyName}
              width={32}
              height={32}
              className="rounded"
            />
          ) : null}
          {companyName}
        </Link>

        <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:font-bold hover:text-amber-500 hover:underline"
            >
              {SITE_MESSAGES.navHome}
            </Link>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                title={link.tooltip}
                className="hover:font-bold hover:text-amber-500 hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
