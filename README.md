# emtiazzahid.github.io

Personal site and blog for Emtiaz Zahid. Static Astro build, deployed to GitHub Pages
on every push to `main`. No database, no server, no runtime cost.

**Live:** https://emtiazzahid.github.io

## Run it

```bash
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 (drafts are visible) |
| `npm run build` | Static build into `dist/` (drafts are excluded) |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Type-check `.astro` files and post frontmatter |
| `npm run og` | Re-render `public/og.png` + `public/apple-touch-icon.png` (needs Chrome) |

## Writing a post

Add a Markdown file to `src/content/writing/`. The filename becomes the URL:
`hello-world.md` → `/writing/hello-world/`.

```markdown
---
title: Designing Laravel queues that survive failure
date: 2026-07-12
lede: One or two sentences. Shown under the title and used as the meta description.
draft: false
---

Body starts here. `##` for section headings, fenced blocks for code.
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | |
| `date` | yes | `YYYY-MM-DD`. Drives ordering and the year grouping on `/writing/` |
| `lede` | yes | The 19px muted line under the title, and the SEO description |
| `draft` | no | `true` hides it from the build; still visible in `npm run dev` |
| `readingTime` | no | Number, overrides the computed "N min read" |
| `updated` | no | `YYYY-MM-DD`, emitted as `article:modified_time` |

Push to `main` and it's live in about a minute. Home shows the newest 3 posts,
`/writing/` groups everything by year, and the RSS feed rebuilds itself.

## Structure

```
src/
  consts.js              site config — URL, email, booking link, accent
  content/writing/       the posts
  content.config.ts      frontmatter schema
  layouts/BaseLayout     html shell, SEO tags, nav + footer
  components/            Nav, Footer, PostRow
  pages/                 /, /about, /contact, /writing, /writing/[slug], /rss.xml, 404
  styles/global.css      all styling; design tokens live in :root
  lib/posts.ts           sorting, year grouping, date + reading-time formatting
public/                  favicon, og.png, robots.txt — copied verbatim
scripts/                 HTML sources for the social image, rendered by npm run og
```

## Changing things

- **Accent colour** — `--accent` in `src/styles/global.css`. The design ships alternates:
  `#166d4e` green, `#a8501f` rust, `#191919` mono.
- **Booking link, email, GitHub, posts-on-home** — `src/consts.js`.
- **Adding a Work/Projects page** — add the route under `src/pages/`, then add it to
  `NAV` in `src/consts.js`. The nav has a deliberate empty slot for it.

## Custom domain later

Buy a domain, then:

1. Put the bare domain in `public/CNAME` (one line, e.g. `emtiazzahid.com`).
2. Change `SITE.url` in `src/consts.js` and the `Sitemap:` line in `public/robots.txt`.
3. Point DNS at GitHub Pages: `A` records to `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153`, `185.199.111.153`, plus `CNAME` `www` → `emtiazzahid.github.io`.
4. In repo Settings → Pages, set the custom domain and tick "Enforce HTTPS".

## Deploy

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
Repo Settings → Pages → Source must be set to **GitHub Actions**.

Design reference: `Portfolio.dc.html` handoff — flat, ruled, editorial. No shadows,
no cards, no gradients; border-radius only on code blocks.
