/*
 ****************************************************************************************************************************
 * Filename    : messages
 * Description : Messages for the about segment
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

export const ABOUT_MESSAGES = {
  // app/about/page.tsx
  pageTitle: "About Us",
  pageDescription: "Our vision, values, and what drives us.",
  visionHeading: "Our Vision",
  missingVision: "Our story is being written — check back soon.",
  teamHeading: "Meet the Team",
  teamEmptyState: "Team profiles are coming soon.",

  // app/about/error.tsx — fetch-failure UI.
  errorTitle: "Couldn't load our story",
  errorMessage: "Unable to fetch site settings from Sanity.",
  retryButtonLabel: "Please try again",
} as const;
