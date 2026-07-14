/*
 ****************************************************************************************************************************
 * Filename    : messages
 * Description : Messages for the services segment
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

export const SERVICES_MESSAGES = {
  // app/services/page.tsx — list page
  listTitle: "Our Services",
  listDescription: "What we offer.",
  emptyState: "No services published yet.",

  // app/services/error.tsx — fetch-failure UI.
  errorTitle: "Couldn't load our services",
  errorMessage: "Unable to fetch services from Sanity.",
  retryButtonLabel: "Please try again",
} as const;
