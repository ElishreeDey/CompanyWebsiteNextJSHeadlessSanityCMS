/*
 ****************************************************************************************************************************
 * Filename    : writeClient
 * Description : Write contact us client messages.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});
