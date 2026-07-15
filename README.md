# Company Website — Next.js + Sanity

A multi-page company website built with **Next.js (App Router)** for the frontend and **Sanity** as a headless CMS for all content — site settings, services, team members, blog posts, and contact form submissions.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **CMS:** Sanity (embedded Studio at `/studio`)
- **Styling:** Tailwind CSS 4
- **Data fetching:** Sanity's Live Content API for real-time preview, plain cached `client.fetch` for statically generated pages, and [SWR](https://swr.vercel.app/) for client-side revalidation on the blog list
- **Testing:** Playwright (end-to-end)
- **Tooling:** ESLint, Prettier, Husky + lint-staged (pre-commit), Sanity TypeGen (generated query types)
- **Deployment:** Docker

## Features

| Home | `/` | SSG | Banner, highlighted services, latest blog posts |
| About | `/about` | SSG | Company vision + team members |
| Services | `/services` | SSG | All services with price, description, image |
| Blog | `/blog` | SSG + client-side SWR | Search-by-title, periodic client refresh |
| Blog detail | `/blog/[slug]` | ISR (60s) | Pre-rendered known slugs via `generateStaticParams` |
| Team | `/team` | Live fetch | Team grid |
| Team detail | `/team/[id]` | Live fetch | Individual profile |
| Contact | `/contact` | Dynamic | Form submits via a Server Action, stored in Sanity as a `contactMessage` document (with a length-capped, validated payload) |
| Sanity Studio | `/studio` | — | Embedded content editor |

## Getting Started

### Prerequisites

- Node.js 20+
- A Sanity project (project ID + dataset)

### Environment variables

Copy `.env.example` to `.env.local` and fill in Sanity project details:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_API_VERSION=
SANITY_API_WRITE_TOKEN=
```

`SANITY_API_WRITE_TOKEN` needs **write** access (Editor or higher) — it's used server-side only, to create `contactMessage` documents from the contact form. It must never be exposed to the browser.

You'll also need to add your local dev origin (e.g. `http://localhost:3000`) to your Sanity project's CORS origins at `https://sanity.io/manage/project/<your-project-id>/api`, so the Studio and Live Content API work locally.

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site, or [http://localhost:3000/studio](http://localhost:3000/studio) for the content editor.

## Available Scripts

| `npm run dev` | Start the dev server |
| `npm run build` | Production build (also builds the embedded Studio) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run format` / `format:check` | Prettier write / check |
| `npm run e2e` / `e2e:ui` | Run Playwright end-to-end tests (headless / UI mode) |
| `npm run typegen` | Extract the Sanity schema and regenerate `sanity.types.ts` from the GROQ queries in `sanity/lib/queries` |

## Content Model

Defined in `sanity/schemaTypes/`:

- **Site Settings** — company name, banner title/subtitle, logo, vision, footer text (singleton)
- **Service** — title, description, price, image
- **Team Member** — name, photo, designation, bio
- **Post** — title, slug, author, published date, excerpt, image, body (Portable Text)
- **Contact Message** — name, email, message (created by the public contact form)

## Testing

End-to-end tests (`e2e/`) run with Playwright against a live dev server and the real Sanity dataset — they're read-only by design (the contact form tests exercise validation paths only, never a real submission, so CI runs don't leave spam documents in the dataset).

```bash
npm run e2e
```

## Docker

```bash
docker compose up --build
```

## Deployment

The app builds with `output: "standalone"`, so it deploys cleanly to any Node/Docker host.
