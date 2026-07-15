/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : Homepage
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  SITE_SETTINGS_QUERY,
  FEATURED_SERVICES_QUERY,
  FEATURED_POSTS_QUERY,
} from "@/sanity/lib/queries";
import { SITE_MESSAGES } from "@/app/messages";

export default async function Home() {
  const [siteSettings, featuredServices, featuredPosts] = await Promise.all([
    client.fetch(SITE_SETTINGS_QUERY, {}, { next: { revalidate: false } }),
    client.fetch(FEATURED_SERVICES_QUERY, {}, { next: { revalidate: false } }),
    client.fetch(FEATURED_POSTS_QUERY, {}, { next: { revalidate: false } }),
  ]);
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

      {featuredServices.length > 0 && (
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {SITE_MESSAGES.homeServicesHeading}
            </h2>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-amber-500 hover:underline"
            >
              {SITE_MESSAGES.homeServicesCta}
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {featuredServices.map((service) => (
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
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-zinc-500">
                  ${service.price.toLocaleString()}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {featuredPosts.length > 0 && (
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {SITE_MESSAGES.homeBlogHeading}
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-amber-500 hover:underline"
            >
              {SITE_MESSAGES.homeBlogCta}
            </Link>
          </div>

          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <li key={post._id} className="flex flex-col gap-3">
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="flex flex-col gap-3"
                >
                  {post.image ? (
                    <Image
                      src={urlFor(post.image).width(400).height(200).url()}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="aspect-video rounded-lg object-cover"
                    />
                  ) : null}
                  <h3 className="text-lg font-semibold hover:underline">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-sm text-zinc-500">
                  {post.author} ·{" "}
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {post.excerpt}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
