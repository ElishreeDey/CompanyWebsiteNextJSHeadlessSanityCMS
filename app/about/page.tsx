/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : About page — statically generated (SSG). Shows the company vision and team members from Sanity.
 *               Rebuild/redeploy to pick up Sanity content changes.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SITE_SETTINGS_QUERY, TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import { ABOUT_MESSAGES } from "@/app/about/messages";

export const metadata: Metadata = {
  title: ABOUT_MESSAGES.pageTitle,
  description: ABOUT_MESSAGES.pageDescription,
};

export default async function AboutPage() {
  const [siteSettings, teamMembers] = await Promise.all([
    client.fetch(SITE_SETTINGS_QUERY, {}, { next: { revalidate: false } }),
    client.fetch(TEAM_MEMBERS_QUERY, {}, { next: { revalidate: false } }),
  ]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-16 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        {ABOUT_MESSAGES.pageTitle}
      </h1>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          {ABOUT_MESSAGES.visionHeading}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          {siteSettings?.vision ?? ABOUT_MESSAGES.missingVision}
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          {ABOUT_MESSAGES.teamHeading}
        </h2>

        {teamMembers.length === 0 && (
          <p className="text-zinc-600 dark:text-zinc-400">
            {ABOUT_MESSAGES.teamEmptyState}
          </p>
        )}

        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <li key={member._id} className="flex flex-col gap-3">
              <Link
                href={`/team/${member._id}`}
                className="flex flex-col gap-3"
              >
                {member.photo ? (
                  <Image
                    src={urlFor(member.photo).width(400).height(400).url()}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="aspect-square rounded-lg object-cover"
                  />
                ) : null}
                <h3 className="text-lg font-semibold hover:underline">
                  {member.name}
                </h3>
              </Link>
              <p className="text-sm text-zinc-500">{member.designation}</p>
              <p className="text-zinc-600 dark:text-zinc-400">{member.bio}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
