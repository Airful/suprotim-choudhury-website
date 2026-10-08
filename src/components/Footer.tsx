"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUp, ArrowUpRight, Camera, Play } from "lucide-react";
import { SITE } from "@/lib/content";

const QUICK_LINKS = [
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/teaching", label: "Teaching" },
  { href: "/watch", label: "Watch" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: SITE.instagramUrl, label: "Instagram", icon: Camera },
  { href: SITE.youtubeUrl, label: "YouTube", icon: Play },
];

function ColumnLabel({ children }: { children: string }) {
  return (
    <span className="block text-xs uppercase tracking-[0.2em] text-terracotta/70">
      — {children}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,rgba(197,90,46,0.08),transparent),linear-gradient(180deg,#1c1917,#13110f)] pt-24 text-cream">
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terracotta/50 to-transparent"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[4.5rem] leading-none text-cream/[0.035] sm:text-[8.5rem]"
      >
        NAMASTE
      </span>

      <div
        aria-hidden
        style={
          {
            "--breathe-scale-to": 1.15,
            "--breathe-opacity-from": 0.15,
            "--breathe-opacity-to": 0.35,
          } as CSSProperties
        }
        className="animate-breathe pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-terracotta/15 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden
        style={
          {
            "--breathe-scale-to": 1.3,
            "--breathe-opacity-from": 0.08,
            "--breathe-opacity-to": 0.2,
            animationDelay: "1.5s",
          } as CSSProperties
        }
        className="animate-breathe pointer-events-none absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-cream/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta">
            Practice. Breathe. Observe.
          </span>
          <p className="mt-3 bg-gradient-to-b from-cream to-cream/70 bg-clip-text font-heading text-3xl text-transparent sm:text-4xl">
            {SITE.name}
          </p>
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 h-px w-16 origin-center bg-terracotta/50"
          />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-cream/10 pt-12 text-center sm:grid-cols-3 sm:divide-x sm:divide-cream/10 sm:text-left">
          <div className="sm:pr-8">
            <ColumnLabel>About</ColumnLabel>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">
              Yoga Teacher · Practitioner · Student — sharing a practice
              rooted in breath, presence and stillness.
            </p>
          </div>

          <div className="sm:px-8">
            <ColumnLabel>Explore</ColumnLabel>
            <ul className="mt-3 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-cream/60 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:pl-8">
            <ColumnLabel>Connect</ColumnLabel>
            <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-colors duration-300 hover:border-terracotta hover:bg-terracotta hover:text-cream"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-xs text-cream/30">
              Yoga Teacher · Practitioner · Student
            </p>
          </div>
        </div>

        <div className="relative mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 py-6 text-xs text-cream/30 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span className="hidden sm:inline">Crafted with presence.</span>
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/50 transition-colors duration-300 hover:border-terracotta hover:text-terracotta"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
