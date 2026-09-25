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

          <div className="mt-16 space-y-10 border-l border-ink/15 pl-8">
            {TEACHING.journey.credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="relative"
              >
                <span className="absolute -left-[2.28rem] top-1.5 h-2.5 w-2.5 rounded-full bg-terracotta" />
                <p className="text-xs uppercase tracking-[0.2em] text-terracotta">
                  {credential.year}
                </p>
                <h3 className="mt-1 font-heading text-xl text-ink">{credential.title}</h3>
                <p className="text-sm text-ink/50">{credential.location}</p>
                <p className="mt-2 text-ink/70">{credential.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
