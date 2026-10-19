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
          {TESTIMONIALS.items.map((item, index) => (
            <div key={item.name}>
              {index > 0 && <SectionDivider variant="ink" />}
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
                  <h2 className="font-heading text-xl text-ink sm:text-2xl">
                    {item.title}
                  </h2>

                  <p className="mt-6 font-heading text-xl italic leading-snug text-terracotta/90 sm:text-2xl">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-6 max-w-2xl space-y-4 text-ink/70">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-ink/10 pt-6">
                    <p className="font-heading text-lg text-ink">{item.name}</p>
                    <p className="text-sm text-ink/50">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
