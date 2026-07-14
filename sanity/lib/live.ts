//live.ts file used if a content editor changes a blog title in Sanity. Website page updates immediately without refreshing.
import { defineLive } from "next-sanity/live";
import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: false,
  browserToken: false,
});
