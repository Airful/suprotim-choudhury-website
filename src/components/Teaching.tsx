"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { TEACHING } from "@/lib/content";
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

// A gathering — radiating lines for a festival, a moment shared with others.
function FestivalIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} className="h-5 w-5 text-terracotta">
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 3v5M16 24v5M3 16h5M24 16h5M7 7l3.5 3.5M25 7l-3.5 3.5M7 25l3.5-3.5M25 25l-3.5-3.5" />
    </svg>
  );
}

// A seal with ribbon tails — a credential recorded, not just claimed.
function CertificationIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} className="h-5 w-5 text-terracotta">
      <circle cx="16" cy="12" r="7" />
      <path d="M11.5 18 8 29l8-4 8 4-3.5-11" />
    </svg>
  );
}

const CREDENTIAL_ICONS = [FestivalIcon, CertificationIcon];

export function Teaching() {
  return (
    <section className="overflow-hidden bg-cream pb-24 pt-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="relative sm:h-44 sm:overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-4 top-0 select-none font-heading text-[7rem] leading-none text-ink/[0.04] sm:top-2 sm:text-[11rem]"
          >
            TEACHING
          </span>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative max-w-2xl"
          >
            <SectionLabel>Teaching</SectionLabel>
            <h1 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">
              {TEACHING.intro.heading}
            </h1>
          </motion.div>
        </div>

        <div className="relative mt-8 grid grid-cols-1 gap-10 sm:mt-14 sm:grid-cols-[0.6fr_1.4fr] sm:gap-16">
          <div className="hidden sm:block">
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-px w-16 origin-left bg-terracotta/50"
            />
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="mt-8 font-heading text-3xl italic leading-[1.15] tracking-tight text-terracotta/80"
            >
              &ldquo;Every body is different.&rdquo;
            </motion.p>
          </div>
          <div className="space-y-6 sm:col-start-2 sm:-mt-2">
            {TEACHING.intro.paragraphs.map((paragraph) => (
              <ScrubbedLine
                key={paragraph}
                text={paragraph}
                justify="start"
                className="text-base leading-relaxed text-ink/70 sm:text-lg"
              />
            ))}
          </div>
        </div>

        <div className="mt-24 sm:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel>What You May Explore</SectionLabel>
          </motion.div>

          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {TEACHING.offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group flex flex-col gap-2 py-7 transition-colors duration-300 sm:flex-row sm:items-baseline sm:gap-8 sm:py-8"
              >
                <div className="flex items-baseline gap-4 sm:w-2/5">
                  <span className="font-heading text-sm text-terracotta">{offering.number}</span>
                  <h3 className="flex items-center gap-2 font-heading text-xl text-ink transition-colors duration-300 group-hover:text-terracotta sm:text-2xl">
                    {offering.title}
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                </div>
                <p className="text-ink/70 sm:w-3/5">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 max-w-2xl sm:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel>My Journey</SectionLabel>
            <h2 className="mt-4 font-heading text-2xl leading-snug tracking-tight text-ink sm:text-3xl">
              {TEACHING.journey.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 space-y-4 text-ink/70"
          >
            {TEACHING.journey.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 space-y-2 font-heading text-xl italic leading-snug text-ink sm:text-2xl"
          >
            {TEACHING.journey.questions.map((question) => (
              <p key={question}>{question}</p>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-ink/70"
          >
            {TEACHING.journey.closing}
          </motion.p>

          <div className="relative mt-16 pl-[3.75rem]">
            <motion.div
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
              className="absolute left-6 top-6 bottom-6 w-px bg-ink/15"
            />
            <div className="space-y-12">
              {TEACHING.journey.credentials.map((credential, index) => {
                const Icon = CREDENTIAL_ICONS[index];
                return (
                  <motion.div
                    key={credential.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3, ease: "easeOut" }}
                    className="relative"
                  >
                    <span className="absolute -left-[3.75rem] top-0 flex h-12 w-12 items-center justify-center rounded-full border border-terracotta/30 bg-cream shadow-[0_0_0_4px_var(--color-cream)]">
                      <Icon />
                    </span>
                    <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                      {credential.year}
                    </p>
                    <h3 className="mt-1 font-heading text-xl text-ink">{credential.title}</h3>
                    <p className="text-sm text-ink/50">{credential.location}</p>
                    <p className="mt-2 text-ink/70">{credential.description}</p>
                    {credential.link && (
                      <a
                        href={credential.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-4 inline-flex items-center gap-1.5 text-sm text-terracotta transition-colors duration-300 hover:text-ink"
                      >
                        {credential.link.label}
                        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-0.5 transition-transform duration-300 group-hover/link:translate-x-0" />
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
