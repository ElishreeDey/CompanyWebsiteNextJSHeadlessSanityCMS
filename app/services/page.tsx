/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Services listing page — fetches all services from Sanity via sanityFetch and renders them
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { SERVICES_QUERY } from "@/sanity/lib/queries";
import { SERVICES_MESSAGES } from "@/app/services/messages";

export const metadata: Metadata = {
  title: SERVICES_MESSAGES.listTitle,
  description: SERVICES_MESSAGES.listDescription,
};

export default async function ServicesPage() {
  const { data: services } = await sanityFetch({ query: SERVICES_QUERY });

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-16 py-32">
      <h1 className="text-3xl font-semibold tracking-tight">
        {SERVICES_MESSAGES.listTitle}
      </h1>

      {services.length === 0 && (
        <p className="text-zinc-600 dark:text-zinc-400">
          {SERVICES_MESSAGES.emptyState}
        </p>
      )}

      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service) => (
          <li key={service._id} className="flex flex-col gap-3">
            {service.image ? (
              <Image
                src={urlFor(service.image).width(400).height(400).url()}
                alt={service.title}
                width={400}
                height={400}
                className="aspect-square rounded-lg object-cover"
              />
            ) : null}
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="text-sm text-zinc-500">
              ${service.price.toLocaleString()}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
