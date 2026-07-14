/*
 ****************************************************************************************************************************
 * Filename    : messages
 * Description : Messages for Site — Nav, Footer, and the homepage
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

export const SITE_MESSAGES = {
  defaultCompanyName: "Company",
  defaultBannerTitle: "Welcome to our site",
  defaultVision: "Learn more about our company, our team, and what we offer.",

  // app/components/Nav.tsx
  navHome: "Home",
  navBlog: "Blog",
  navBlogTooltip: "News, updates, and articles from the team.",
  navTeam: "Team",
  navTeamTooltip: "Meet the people behind the company.",
  navServices: "Services",
  navServicesTooltip: "What we offer.",

  // app/page.tsx — homepage sections.
  visionHeading: "Our Vision",
} as const;
