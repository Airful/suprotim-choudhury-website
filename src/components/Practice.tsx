"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import { PRACTICE } from "@/lib/content";
import { ScrubbedLine } from "@/components/ScrubbedText";

function SectionLabel({
  children,
  className = "text-terracotta",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`block text-xs uppercase tracking-[0.25em] ${className}`}>
      — {children}
    </span>
  );
}

const ICON_CLASS =
  "h-6 w-6 text-terracotta transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7";

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-terracotta/25 bg-terracotta/[0.08] transition-colors duration-300 group-hover:border-terracotta/50 group-hover:bg-terracotta/[0.14] sm:h-16 sm:w-16">
      {children}
    </span>
  );
}

// Seated figure — the body settled into stillness, head resting above a quiet spine.
function AsanaIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} className={ICON_CLASS}>
        <circle cx="16" cy="7" r="3" />
        <path d="M16 10v6" />
        <path d="M16 16 8 26M16 16l8 10" />
        <path d="M9 20h14" />
      </svg>
    </IconBadge>
  );
}

// Breath rings — a single point expanding outward, the way a breath moves through the body.
function PranayamaIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} className={ICON_CLASS}>
        <circle cx="16" cy="16" r="1.8" fill="currentColor" stroke="none" />
        <circle cx="16" cy="16" r="7" />
        <circle cx="16" cy="16" r="12" />
      </svg>
    </IconBadge>
  );
}

// A watchful, half-closed eye — attention observing without reacting.
function DhyanaIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} className={ICON_CLASS}>
        <path d="M4 16Q16 6 28 16Q16 26 4 16Z" />
        <circle cx="16" cy="16" r="2.8" fill="currentColor" stroke="none" />
      </svg>
    </IconBadge>
  );
}

// A returning cycle — practice as something revisited again and again, not arrived at once.
function SadhanaIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} className={ICON_CLASS}>
        <path d="M16 4a12 12 0 1 1-8.49 3.51" />
        <path d="M6 4v6h6" />
      </svg>
    </IconBadge>
  );
}

const DIMENSION_ICONS = [AsanaIcon, PranayamaIcon, DhyanaIcon, SadhanaIcon];

export function Practice() {
  return (
    <section className="overflow-hidden bg-cream pb-0 pt-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative sm:h-44 sm:overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-4 top-0 select-none font-heading text-[7rem] leading-none text-ink/[0.04] sm:top-2 sm:text-[11rem]"
          >
            PRACTICE
          </span>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative max-w-2xl"
          >
            <SectionLabel>The Practice</SectionLabel>
            <h1 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">
              Four Dimensions of Practice
            </h1>
          </motion.div>
        </div>

        <div
          className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 sm:mt-10"
          style={{ perspective: 1200 }}
        >
          {PRACTICE.dimensions.map((dimension, index) => {
            const Icon = DIMENSION_ICONS[index];
            return (
            <motion.div
              key={dimension.sanskrit}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: -3,
                boxShadow: "0 24px 48px -16px rgba(28, 25, 23, 0.16)",
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-white/40 p-8 transition-colors duration-300 hover:border-terracotta/40 sm:min-h-[300px] sm:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-8xl text-ink/[0.06] transition-colors duration-300 group-hover:text-terracotta/[0.14] sm:text-9xl"
              >
                {dimension.number}
              </span>
              <div className="relative">
                <Icon />
                <h3 className="mt-5 font-heading text-2xl italic text-ink sm:text-3xl">
                  {dimension.sanskrit}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-terracotta">
                  {dimension.subtitle}
                </p>
              </div>
              <p className="relative mt-6 font-heading text-base leading-snug text-ink/70 transition-colors duration-300 group-hover:text-ink sm:text-lg">
                {dimension.paragraph}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden bg-cream py-28 sm:py-36">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-6 -top-16 select-none font-heading text-[16rem] leading-none text-ink/[0.035] sm:-top-24 sm:text-[24rem]"
        >
          &ldquo;
        </span>

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[0.85fr_1.15fr] sm:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionLabel>My Philosophy</SectionLabel>
              <h2 className="mt-4 font-heading text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                {PRACTICE.philosophy.heading}
              </h2>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="mt-6 block h-px w-16 origin-left bg-terracotta/50"
              />
            </motion.div>

            <div className="space-y-8 border-ink/10 sm:border-l sm:pl-16">
              {PRACTICE.philosophy.paragraphs.map((paragraph, index) => {
                if (index === 0) {
                  const [firstWord, ...rest] = paragraph.split(" ");
                  return (
                    <div key={paragraph} className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-heading text-6xl leading-[0.75] text-terracotta sm:text-7xl">
                        {firstWord}
                      </span>
                      <ScrubbedLine
                        text={rest.join(" ")}
                        justify="start"
                        className="max-w-md font-heading text-xl leading-relaxed text-ink sm:text-2xl"
                      />
                    </div>
                  );
                }
                return (
                  <ScrubbedLine
                    key={paragraph}
                    text={paragraph}
                    justify="start"
                    className="text-base leading-relaxed text-ink/70 sm:text-lg"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-ink py-28 text-cream sm:py-36">
        {/* A slow, looping "breath" — the section is literally about the pause
            between inhale and exhale, so the ambient motion echoes the copy
            instead of just decorating it. */}
        <div
          aria-hidden
          style={{ "--breathe-scale-to": 1.12, "--breathe-opacity-from": 0.25, "--breathe-opacity-to": 0.55 } as CSSProperties}
          className="animate-breathe pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-terracotta/25 sm:h-[32rem] sm:w-[32rem]"
        />
        <div
          aria-hidden
          style={{ "--breathe-scale-to": 1.25, "--breathe-opacity-from": 0.3, "--breathe-opacity-to": 0.6, animationDelay: "1s" } as CSSProperties}
          className="animate-breathe pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/10 blur-3xl sm:h-80 sm:w-80"
        />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel className="text-terracotta">
              {PRACTICE.deeper.heading}
            </SectionLabel>
          </motion.div>

          <motion.p
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
            className="mx-auto mt-6 max-w-2xl font-heading text-2xl font-medium leading-snug tracking-tight text-cream sm:text-3xl"
          >
            {PRACTICE.deeper.paragraphs[0]}
          </motion.p>

          <div className="mx-auto mt-8 max-w-xl space-y-4 text-cream/60">
            {PRACTICE.deeper.paragraphs.slice(1).map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, x: -12, skewX: 4 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15, ease: "easeOut" }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
