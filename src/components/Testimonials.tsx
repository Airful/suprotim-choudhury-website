"use client";

import { motion } from "motion/react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionDivider } from "@/components/SectionDivider";

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="block text-xs uppercase tracking-[0.25em] text-terracotta">
      — {children}
    </span>
  );
}

type TestimonialItem = (typeof TESTIMONIALS.items)[number];

function InitialBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-terracotta/25 bg-terracotta/[0.08] font-heading text-xl text-terracotta">
      {name.charAt(0)}
    </span>
  );
}

// A full write-up (title, lede quote, supporting paragraphs) — the
// original long-form testimonial treatment.
function FullTestimonial({ item }: { item: TestimonialItem }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/50 p-8 shadow-[0_30px_60px_-30px_rgba(28,25,23,0.25)] sm:p-12"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-terracotta via-terracotta/60 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -left-2 -top-10 select-none font-heading text-[10rem] leading-none text-ink/[0.05] sm:text-[14rem]"
      >
        &ldquo;
      </span>

      <div className="relative">
        {item.title && (
          <h2 className="font-heading text-xl text-ink sm:text-2xl">{item.title}</h2>
        )}

        <p
          className={`font-heading text-xl italic leading-snug text-terracotta/90 sm:text-2xl ${
            item.title ? "mt-6" : ""
          }`}
        >
          &ldquo;{item.quote}&rdquo;
        </p>

        {item.paragraphs.length > 0 && (
          <div className="mt-6 max-w-2xl space-y-4 text-ink/70">
            {item.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="mt-8 border-t border-ink/10 pt-6">
          <p className="font-heading text-lg text-ink">{item.name}</p>
          {item.role && <p className="text-sm text-ink/50">{item.role}</p>}
        </div>
      </div>
    </motion.article>
  );
}

// A short, standalone quote — styled as a centred "spotlight" rather than
// reusing the long-form layout, so brevity reads as a deliberate choice
// instead of looking like a card missing its title/paragraphs.
function SpotlightTestimonial({ item }: { item: TestimonialItem }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-ink/10 bg-white/50 px-8 py-12 text-center shadow-[0_30px_60px_-30px_rgba(28,25,23,0.25)] sm:px-14 sm:py-16"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-terracotta/60 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none mx-auto block select-none font-heading text-6xl leading-none text-terracotta/20 sm:text-7xl"
      >
        &ldquo;
      </span>

      <p className="mx-auto -mt-2 max-w-xl font-heading text-xl italic leading-snug text-terracotta/90 sm:text-2xl">
        {item.quote}
      </p>

      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mx-auto mt-8 block h-px w-12 origin-center bg-terracotta/40"
      />

      <div className="mt-6 flex flex-col items-center gap-3">
        <InitialBadge name={item.name} />
        <p className="font-heading text-lg text-ink">{item.name}</p>
        {item.role && <p className="text-sm text-ink/50">{item.role}</p>}
      </div>
    </motion.article>
  );
}

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-cream pb-28 pt-32 sm:pb-36">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative sm:h-44 sm:overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-4 top-0 select-none font-heading text-[7rem] leading-none text-ink/[0.04] sm:top-2 sm:text-[11rem]"
          >
            TESTIMONIALS
          </span>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative max-w-2xl"
          >
            <SectionLabel>Testimonials</SectionLabel>
            <h1 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">
              {TESTIMONIALS.heading}
            </h1>
            <div className="mt-5 space-y-2 text-ink/70">
              {TESTIMONIALS.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 space-y-16 sm:mt-14">
          {TESTIMONIALS.items.map((item, index) => {
            const isCompact = !item.title && item.paragraphs.length === 0;
            return (
              <div key={item.name}>
                {index > 0 && <SectionDivider variant="ink" />}
                {isCompact ? (
                  <SpotlightTestimonial item={item} />
                ) : (
                  <FullTestimonial item={item} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
