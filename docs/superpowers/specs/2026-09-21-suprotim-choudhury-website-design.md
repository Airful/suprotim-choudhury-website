# Suprotim Choudhury Personal Website — Design Spec

Date: 2026-09-21
Status: Approved by Sam (user), local-only build (no GitHub repo yet — planned in ~1 week)

## Background

Avi (Airful) asked Sam to build a personal website for Suprotim Choudhury, a yoga
teacher and personal friend of Avi's. Brief came via the WhatsApp group
"Suprotim Airful Work" (2026-09-20). Target eventual domain:
`suprotimchoudhary.com` (note: this spelling differs from the correct name
spelling "Choudhury" — flagged for Avi/Suprotim to confirm before the domain
is finalized; not blocking this local build).

Design reference chosen from four sites Suprotim shared: **yogawithadriene.com**
— a calm, personal, photography-led single-teacher brand site, judged the
closest fit since Suprotim is a solo teacher, not a studio.

Deadline mentioned in the brief: live on the real domain by end of September
2026. This spec covers only the local, pre-repo build.

## Scope

A static, single-page personal/portfolio site. No booking, no payments, no
course sales (Suprotim has not shared any bookable offering). No CMS/backend —
all content is hardcoded and meant to be edited directly as real material
comes in.

Out of scope for this iteration: multi-page navigation, working newsletter
backend, blog, course/booking system, GitHub repo/deployment.

## Approach

Single-page site (Next.js App Router) with anchor-linked navigation, mirroring
how yogawithadriene.com's homepage is structured — one content-rich scrollable
page rather than multiple routes. Multi-page structure can be introduced later
if content volume grows.

## Stack

Matches the convention used by other Airful marketing sites (e.g.
`atlasinspire`):
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Project location

New, isolated folder: `C:\Airful_Coding\suprotim-choudhury-website\`
No other file, folder, or project under `Airful_Coding` is to be modified.

## Structure

```
suprotim-choudhury-website/
├── app/
│   ├── layout.tsx        # metadata, fonts, global styles
│   ├── page.tsx          # assembles all sections
│   └── globals.css
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── FeaturedVideo.tsx
│   ├── Gallery.tsx
│   ├── Press.tsx
│   ├── Newsletter.tsx
│   └── Footer.tsx
├── public/
│   └── images/            # 7 photos copied from Downloads (originals untouched)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Section-by-section content plan

- **Nav** — "Suprotim Choudhury" wordmark + anchor links (About, Gallery,
  Press, Connect). Sticky; transparent over hero, solid on scroll.
- **Hero** — full-bleed/split layout using one of the strong portrait or
  Himalayan photos. Placeholder philosophical tagline + supporting line
  (clearly marked as a TODO placeholder in code — no real tagline exists
  yet). One CTA scrolling to Newsletter.
- **About** — placeholder bio paragraph (marked TODO — no real bio copy
  provided yet) + a portrait photo, mirroring Adriene's About layout.
- **Featured Video** — embeds the one YouTube video link Suprotim shared.
- **Gallery** — grid of all 7 downloaded photos, click-to-enlarge lightbox
  built with plain CSS/JS (no external library needed). No captions (none
  provided).
- **Press** — two cards linking out to the la Repubblica and Radio Wellness
  mentions Suprotim shared (title + outbound link, opens in new tab).
- **Newsletter** — email input + subscribe button, **UI-only**: submission is
  not wired to any backend/email service in this iteration, per explicit
  decision (local-only scope, no repo/service yet).
- **Footer** — name, Instagram link (@supro_ethernal), copyright line.

## Data flow

No CMS or database. All content (bio placeholder, image list, press links,
video ID) lives as TypeScript constants/props inside each component. Updating
real content later is a direct code edit to these constants.

## Error handling

Minimal, appropriate for a static page:
- All images have descriptive `alt` text.
- YouTube embed shows fallback text if it fails to load.
- Outbound press/Instagram links open in new tabs with
  `rel="noopener noreferrer"`.
- No form-submission error handling needed — Newsletter is UI-only.

## Testing / verification

No automated test suite (not warranted for a static marketing page).
Verification consists of:
1. `npm run build` completing without errors.
2. Manual review of every section in a running dev server (`npm run dev`) in
   a browser.

## Known open questions (not blocking this build)

- Real tagline and bio copy — placeholders used until Suprotim/Avi provide
  real text.
- Domain spelling discrepancy (`suprotimchoudhary.com` vs. "Choudhury") —
  flagged for Avi to confirm before the real domain/repo work begins.
- Email newsletter backend — to be decided when the site moves toward the
  real GitHub repo / deployment phase.
