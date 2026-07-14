/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Team listing page — fetches all team members from Sanity via sanityFetch
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-10
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import { TEAM_MESSAGES } from "@/app/team/messages";

export const metadata: Metadata = {
  title: TEAM_MESSAGES.listTitle,
  description: TEAM_MESSAGES.listDescription,
};

export default async function TeamPage() {
  const { data: members } = await sanityFetch({ query: TEAM_MEMBERS_QUERY });

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-16 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        {TEAM_MESSAGES.listTitle}
      </h1>

      {members.length === 0 && (
        <p className="text-zinc-600 dark:text-zinc-400">
          {TEAM_MESSAGES.emptyState}
        </p>
      )}

      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {members.map((member) => (
          <li key={member._id} className="flex flex-col gap-3">
            <Link href={`/team/${member._id}`} className="flex flex-col gap-3">
              {member.photo ? (
                <Image
                  src={urlFor(member.photo).width(400).height(400).url()}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="aspect-square rounded-lg object-cover"
                />
              ) : null}
              <h2 className="text-lg font-semibold hover:underline">
                {member.name}
              </h2>
            </Link>
            <p className="text-sm text-zinc-500">{member.designation}</p>
            <p className="text-zinc-600 dark:text-zinc-400">{member.bio}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
