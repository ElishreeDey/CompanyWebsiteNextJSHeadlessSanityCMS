/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Team member detail page — fetches a single team member by _id from Sanity. 
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-12
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { TEAM_MEMBER_QUERY } from "@/sanity/lib/queries";
import { TEAM_MESSAGES } from "@/app/team/messages";

type Props = {
  params: Promise<{ id: string }>;
};



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { data: member } = await sanityFetch({ query: TEAM_MEMBER_QUERY, params: { id } });

  if (!member) {
    return { title: TEAM_MESSAGES.memberNotFoundTitle };
  }

  return {
    title: member.name,
    description: member.designation,
    openGraph: {
      title: member.name,
      description: member.designation,
      images: member.photo ? [urlFor(member.photo).width(1200).height(630).url()] : [],
    },
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { id } = await params;
  const { data: member } = await sanityFetch({ query: TEAM_MEMBER_QUERY, params: { id } });

  if (!member) {
    notFound(); // renders not-found
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-16 py-32">
      {member.photo ? (
        <Image
          src={urlFor(member.photo).width(600).height(600).url()}
          alt={member.name}
          width={600}
          height={600}
          priority
          className="aspect-square w-full max-w-xs rounded-lg object-cover"
        />
      ) : null}

      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight">{member.name}</h1>
        <p className="text-sm text-zinc-500">{member.designation}</p>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300">{member.bio}</p>
    </main>
  );
}
