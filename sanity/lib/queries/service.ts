/*
 ****************************************************************************************************************************
 * Filename    : service
 * Description : GROQ queries for 'service' documents.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

import { defineQuery } from "next-sanity";

// All services, alphabetical by title — for the services listing page.
export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(title asc) {
    _id,
    title,
    description,
    price,
    image
  }
`);

// First 3 services, alphabetical by title — for the homepage highlights section.
export const FEATURED_SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(title asc) [0...3] {
    _id,
    title,
    description,
    price,
    image
  }
`);
