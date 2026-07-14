/*
 ****************************************************************************************************************************
 * Filename    : teamMember
 * Description : GROQ queries for 'teamMember'
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-10
 ****************************************************************************************************************************
 */

import { defineQuery } from "next-sanity";

// All team members, alphabetical by name — for the team listing page.
export const TEAM_MEMBERS_QUERY = defineQuery(`
  *[_type == "teamMember"] | order(name asc) {
    _id,
    name,
    photo,
    designation,
    bio
  }
`);

// Single team member by _id — for the team member detail page. teamMember has no slug field, so the document's own _id is the route param.
export const TEAM_MEMBER_QUERY = defineQuery(`
  *[_type == "teamMember" && _id == $id][0] {
    _id,
    name,
    photo,
    designation,
    bio
  }
`);
