/*
 ****************************************************************************************************************************
 * Filename    : siteSettings
 * Description : GROQ query for the 'siteSettings'
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

import { defineQuery } from "next-sanity";

// The single Site Settings document — used by the shared Nav/Footer and the homepage.
export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    companyName,
    bannerTitle,
    subtitle,
    logo,
    vision,
    footerText
  }
`);
