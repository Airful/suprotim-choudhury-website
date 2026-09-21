# Suprotim Choudhury Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local, static Next.js personal website for Suprotim Choudhury, styled after yogawithadriene.com, using the 7 photos and other material he shared in WhatsApp.

**Architecture:** Single-page Next.js App Router site (`src/app/page.tsx`) assembled from focused section components (`Nav`, `Hero`, `About`, `FeaturedVideo`, `Gallery`, `Press`, `Newsletter`, `Footer`), with all copy/media data centralized in one constants file (`src/lib/content.ts`). No CMS, no backend, no booking/payment.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 (CSS-first `@theme` config, no `tailwind.config.ts`) — matching the convention used in `atlasinspire`, another Airful marketing site.

**Deviations from the standard plan template (approved in the spec):**
- No automated test suite — this is a static marketing page; verification is `npm run build` + manual browser review, per the approved spec (`docs/superpowers/specs/2026-09-21-suprotim-choudhury-website-design.md`).
- No git commit steps — `Airful_Coding` is not a git repo, and the user explicitly wants this local-only until a GitHub repo is created in about a week. Steps that would normally end in a commit instead end in a save/verify checkpoint.
- No `tailwind.config.ts` — Tailwind CSS 4 configures entirely via the `@theme` block in `globals.css` (confirmed by checking `atlasinspire`, which also ships no `tailwind.config.ts`). The spec's file tree listed one speculatively; it's unnecessary with Tailwind 4's CSS-first config.

---

## Task 1: Scaffold project config and verify a blank Next.js app boots

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\package.json`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\tsconfig.json`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\postcss.config.mjs`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\next.config.ts`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\.gitignore`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\app\layout.tsx`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\app\page.tsx`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\app\globals.css`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "suprotim-choudhury-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0"
  }
}
```

- [ ] **Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Create `postcss.config.mjs`**

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

- [ ] **Step 4: Create `next.config.ts`**

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All images are local (public/images) — no remote image patterns needed.
};

export default nextConfig;
```

- [ ] **Step 5: Create `.gitignore`**

```
node_modules
.next
next-env.d.ts
.env*.local
```

- [ ] **Step 6: Create a minimal `src/app/globals.css`**

```css
@import "tailwindcss";

@theme {
  --color-cream: #f7f3ec;
  --color-ink: #1c1917;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-cream);
  color: var(--color-ink);
}
```

- [ ] **Step 7: Create a minimal `src/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suprotim Choudhury",
  description: "Personal website of Suprotim Choudhury, yoga teacher.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 8: Create a minimal `src/app/page.tsx`**

```tsx
export default function Home() {
  return <main className="p-10 text-2xl">Suprotim Choudhury — site scaffold OK</main>;
}
```

- [ ] **Step 9: Install dependencies**

Run (from `C:\Airful_Coding\suprotim-choudhury-website`):
```bash
npm install
```
Expected: installs without errors, creates `node_modules/` and `package-lock.json`.

- [ ] **Step 10: Verify the dev server boots**

Run:
```bash
npm run dev
```
Expected: "Ready" message, server on `http://localhost:3000`. Open it in a browser (or `curl http://localhost:3000`) and confirm the page renders "Suprotim Choudhury — site scaffold OK". Stop the server (Ctrl+C) once confirmed.

---

## Task 2: Copy reference photos into the project

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\public\images\portrait-warm-indoor.jpg`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\public\images\portrait-black-tshirt.jpg`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\public\images\himalaya-standing-1.jpg`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\public\images\himalaya-standing-2.jpg`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\public\images\himalaya-meditation.jpg`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\public\images\portrait-smiling.jpg`
- Create: `C:\Airful_Coding\suprotim-choudhury-website\public\images\portrait-nature.jpg`

(Source files: `C:\Users\KIIT\Downloads\Suprotim1.jpeg` through `Suprotim7.jpeg`, downloaded from the WhatsApp group. These are **copied**, not moved — originals stay untouched in Downloads.)

- [ ] **Step 1: Create the images directory and copy files with descriptive names**

Run:
```bash
mkdir -p "/c/Airful_Coding/suprotim-choudhury-website/public/images"
cp "/c/Users/KIIT/Downloads/Suprotim1.jpeg" "/c/Airful_Coding/suprotim-choudhury-website/public/images/portrait-warm-indoor.jpg"
cp "/c/Users/KIIT/Downloads/Suprotim2.jpeg" "/c/Airful_Coding/suprotim-choudhury-website/public/images/portrait-black-tshirt.jpg"
cp "/c/Users/KIIT/Downloads/Suprotim3.jpeg" "/c/Airful_Coding/suprotim-choudhury-website/public/images/himalaya-standing-1.jpg"
cp "/c/Users/KIIT/Downloads/Suprotim4.jpeg" "/c/Airful_Coding/suprotim-choudhury-website/public/images/himalaya-standing-2.jpg"
cp "/c/Users/KIIT/Downloads/Suprotim5.jpeg" "/c/Airful_Coding/suprotim-choudhury-website/public/images/himalaya-meditation.jpg"
cp "/c/Users/KIIT/Downloads/Suprotim6.jpeg" "/c/Airful_Coding/suprotim-choudhury-website/public/images/portrait-smiling.jpg"
cp "/c/Users/KIIT/Downloads/Suprotim7.jpeg" "/c/Airful_Coding/suprotim-choudhury-website/public/images/portrait-nature.jpg"
```

- [ ] **Step 2: Verify all 7 files copied successfully**

Run:
```bash
ls -la "/c/Airful_Coding/suprotim-choudhury-website/public/images"
```
Expected: 7 `.jpg` files listed with non-zero sizes, matching the names above.

---

## Task 3: Create the centralized content/data file

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\lib\content.ts`

- [ ] **Step 1: Create `src/lib/content.ts`**

```ts
export const SITE = {
  name: "Suprotim Choudhury",
  tagline: "Yoga Teacher",
  instagramUrl: "https://www.instagram.com/supro_ethernal/",
};

export const HERO = {
  // TODO: Replace with Suprotim's own words once provided — no real tagline exists yet.
  tagline: "Stillness is not the absence of movement.",
  subtext:
    "Placeholder introduction text — replace with Suprotim's own words once available.",
  image: {
    src: "/images/portrait-nature.jpg",
    alt: "Suprotim Choudhury standing outdoors among sunlit trees",
  },
};

export const ABOUT = {
  // TODO: Replace with Suprotim's real biography once provided — no real bio exists yet.
  paragraphs: [
    "This is placeholder biography text for Suprotim Choudhury. Replace with his real story, teaching background, and philosophy once he provides it.",
  ],
  image: {
    src: "/images/portrait-smiling.jpg",
    alt: "Suprotim Choudhury smiling indoors",
  },
};

export const FEATURED_VIDEO = {
  youtubeId: "1c84sUPASio",
  title: "Watch & Practice",
};

export const GALLERY_IMAGES = [
  {
    src: "/images/portrait-warm-indoor.jpg",
    alt: "Suprotim Choudhury portrait, warm indoor lighting",
  },
  {
    src: "/images/portrait-black-tshirt.jpg",
    alt: "Suprotim Choudhury portrait outdoors at dusk",
  },
  {
    src: "/images/himalaya-standing-1.jpg",
    alt: "Suprotim Choudhury standing on a rock in the Himalayas",
  },
  {
    src: "/images/himalaya-standing-2.jpg",
    alt: "Suprotim Choudhury standing among Himalayan peaks",
  },
  {
    src: "/images/himalaya-meditation.jpg",
    alt: "Suprotim Choudhury meditating in a Himalayan valley",
  },
  {
    src: "/images/portrait-smiling.jpg",
    alt: "Suprotim Choudhury smiling indoors",
  },
  {
    src: "/images/portrait-nature.jpg",
    alt: "Suprotim Choudhury standing outdoors among sunlit trees",
  },
];

export const PRESS_ITEMS = [
  { title: "La Repubblica", url: "https://share.google/IShu5bc6VSgZEg8rP" },
  { title: "Radio Wellness", url: "https://share.google/Q9jTPjXsLgMbmebSl" },
];
```

- [ ] **Step 2: Verify it compiles**

Run:
```bash
npx tsc --noEmit
```
Expected: no errors (this file has no dependents yet, so this mainly checks syntax).

---

## Task 4: Build the Nav component

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\components\Nav.tsx`

- [ ] **Step 1: Create `src/components/Nav.tsx`**

```tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#press", label: "Press" },
  { href: "#connect", label: "Connect" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="#top" className="font-heading text-lg tracking-wide text-ink">
          {SITE.name}
        </Link>
        <ul className="hidden gap-8 text-sm uppercase tracking-wider text-ink sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-terracotta">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors. (`bg-terracotta`/`text-terracotta` and `bg-cream` classes will only render correctly once the full theme is added in Task 12 — that's expected at this stage; this step only checks TypeScript, not visual output.)

---

## Task 5: Build the Hero component

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\components\Hero.tsx`

- [ ] **Step 1: Create `src/components/Hero.tsx`**

```tsx
import Image from "next/image";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-cream"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 sm:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl leading-tight text-ink sm:text-5xl">
            {HERO.tagline}
          </h1>
          <p className="mt-6 max-w-md text-base text-ink/70">{HERO.subtext}</p>
          <a
            href="#connect"
            className="mt-8 inline-block rounded-full border border-ink px-6 py-3 text-sm uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Stay Connected
          </a>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src={HERO.image.src}
            alt={HERO.image.alt}
            fill
            priority
            sizes="(min-width: 640px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

---

## Task 6: Build the About component

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\components\About.tsx`

- [ ] **Step 1: Create `src/components/About.tsx`**

```tsx
import Image from "next/image";
import { ABOUT } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:order-2">
          <Image
            src={ABOUT.image.src}
            alt={ABOUT.image.alt}
            fill
            sizes="(min-width: 640px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="sm:order-1">
          <h2 className="font-heading text-3xl text-ink">About Suprotim</h2>
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-ink/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

---

## Task 7: Build the FeaturedVideo component

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\components\FeaturedVideo.tsx`

- [ ] **Step 1: Create `src/components/FeaturedVideo.tsx`**

```tsx
import { FEATURED_VIDEO } from "@/lib/content";

export function FeaturedVideo() {
  return (
    <section className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl">{FEATURED_VIDEO.title}</h2>
        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl bg-black">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${FEATURED_VIDEO.youtubeId}`}
            title="Suprotim Choudhury — featured video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
            Your browser does not support embedded video. Watch it directly on{" "}
            <a href={`https://youtu.be/${FEATURED_VIDEO.youtubeId}`}>YouTube</a>.
          </iframe>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

---

## Task 8: Build the Gallery component (with click-to-enlarge lightbox)

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\components\Gallery.tsx`

- [ ] **Step 1: Create `src/components/Gallery.tsx`**

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/content";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-heading text-3xl text-ink">Gallery</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative aspect-square overflow-hidden rounded-lg"
              aria-label={`View larger: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-6 top-6 text-3xl text-white"
            aria-label="Close enlarged image"
          >
            &times;
          </button>
          <div className="relative h-[80vh] w-full max-w-3xl">
            <Image
              src={GALLERY_IMAGES[activeIndex].src}
              alt={GALLERY_IMAGES[activeIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

---

## Task 9: Build the Press component

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\components\Press.tsx`

- [ ] **Step 1: Create `src/components/Press.tsx`**

```tsx
import { PRESS_ITEMS } from "@/lib/content";

export function Press() {
  return (
    <section id="press" className="bg-line/40 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-heading text-3xl text-ink">Featured In</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PRESS_ITEMS.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-ink/10 bg-cream px-6 py-8 text-ink transition-colors hover:border-terracotta"
            >
              <span className="font-heading text-xl">{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

---

## Task 10: Build the Newsletter component (UI-only, per approved spec)

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\components\Newsletter.tsx`

- [ ] **Step 1: Create `src/components/Newsletter.tsx`**

```tsx
"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="connect" className="bg-ink py-24 text-cream">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h2 className="font-heading text-3xl">Stay Connected</h2>
        <p className="mt-4 text-cream/70">
          Sign up to hear from Suprotim. (This form is a placeholder — it does
          not send data anywhere yet.)
        </p>
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-full border border-cream/30 bg-transparent px-5 py-3 text-cream placeholder:text-cream/40 focus:border-cream focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-cream px-6 py-3 text-sm uppercase tracking-wider text-ink transition-opacity hover:opacity-80"
          >
            Subscribe
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-sm text-cream/70">
            Thanks! (Placeholder confirmation — no email was actually sent.)
          </p>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

---

## Task 11: Build the Footer component

**Files:**
- Create: `C:\Airful_Coding\suprotim-choudhury-website\src\components\Footer.tsx`

- [ ] **Step 1: Create `src/components/Footer.tsx`**

```tsx
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-cream py-10 text-center text-sm text-ink/60">
      <p>{SITE.name}</p>
      <a
        href={SITE.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block transition-colors hover:text-terracotta"
      >
        Instagram
      </a>
      <p className="mt-4">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

---

## Task 12: Wire up the full theme, fonts, layout, and page

**Files:**
- Modify: `C:\Airful_Coding\suprotim-choudhury-website\src\app\globals.css`
- Modify: `C:\Airful_Coding\suprotim-choudhury-website\src\app\layout.tsx`
- Modify: `C:\Airful_Coding\suprotim-choudhury-website\src\app\page.tsx`

- [ ] **Step 1: Replace `src/app/globals.css` with the full theme**

```css
@import "tailwindcss";

@theme {
  --color-cream: #f7f3ec;
  --color-ink: #1c1917;
  --color-terracotta: #b54b32;
  --color-line: #e4ddd0;

  --font-heading: var(--font-playfair), Georgia, serif;
  --font-body: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-cream);
  color: var(--color-ink);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.15;
}
```

- [ ] **Step 2: Replace `src/app/layout.tsx` with the full layout**

```tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SITE } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: "Personal website of Suprotim Choudhury, yoga teacher.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Replace `src/app/page.tsx` to assemble all sections**

```tsx
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Gallery } from "@/components/Gallery";
import { Press } from "@/components/Press";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedVideo />
      <Gallery />
      <Press />
      <Newsletter />
    </>
  );
}
```

- [ ] **Step 4: Verify it compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

---

## Task 13: Final build and manual verification

**Files:** none (verification only)

- [ ] **Step 1: Run a production build**

Run (from `C:\Airful_Coding\suprotim-choudhury-website`):
```bash
npm run build
```
Expected: build completes successfully with no errors (warnings about the YouTube iframe or Next.js `<Image>` are acceptable; hard errors are not).

- [ ] **Step 2: Start the dev server and review every section in a browser**

Run:
```bash
npm run dev
```
Open `http://localhost:3000` and confirm, top to bottom:
- Nav bar shows "Suprotim Choudhury" and links to About/Gallery/Press/Connect, and becomes solid on scroll.
- Hero shows the placeholder tagline, subtext, and the nature portrait image.
- About shows the placeholder bio paragraph and the smiling portrait image.
- Featured Video section loads and plays the embedded YouTube video.
- Gallery shows all 7 photos in a grid, and clicking one opens the enlarged lightbox view; clicking the × or the background closes it.
- Press section shows two cards ("La Repubblica", "Radio Wellness") that open their links in a new tab.
- Newsletter section shows the email input and Subscribe button; submitting shows the "Thanks!" placeholder message without navigating away or sending anything.
- Footer shows the name, an Instagram link, and the copyright line.

- [ ] **Step 3: Stop the dev server**

Press Ctrl+C in the terminal running `npm run dev`.

---

## Post-implementation notes for the user

- Real tagline, bio copy, and the domain-spelling question (`suprotimchoudhary.com` vs. "Choudhury") are still open — see the spec's "Known open questions" section.
- When ready to move to GitHub, this plan intentionally left git untouched; initializing the repo and pushing will be a separate, explicit step.
