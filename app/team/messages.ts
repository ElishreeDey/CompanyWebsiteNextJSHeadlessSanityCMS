/*
 ****************************************************************************************************************************
 * Filename    : messages
 * Description : Team centralized messages.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-10
 ****************************************************************************************************************************
 */

export const TEAM_MESSAGES = {

  // app/team/page.tsx 
  listTitle: "Our Team",
  listDescription: "Meet the team members.",
  emptyState: "No team members published yet.",

  // app/team/error.tsx 
  errorTitle: "Couldn't load the team",
  errorMessage: "Unable to fetch team members from Sanity.",
  retryButtonLabel: "Please try again",

  // app/team/[id]/page.tsx — when an id has no matching member.
  memberNotFoundTitle: "Team member not found",
} as const;
