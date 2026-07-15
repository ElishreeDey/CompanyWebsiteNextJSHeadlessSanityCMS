/*
 ****************************************************************************************************************************
 * Filename    : writeClient
 * Description : Create ContactUS client messages to Sanity Server with SANITY_API_WRITE_TOKEN
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
