"use client";

import { motion } from "motion/react";
import { INTRODUCTION } from "@/lib/content";
import { ScrubbedLine } from "@/components/ScrubbedText";

export function Introduction() {
  return (
    <section className="bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <div className="space-y-3 text-center">
          {INTRODUCTION.lines.map((line) => (
            <ScrubbedLine
              key={line}
              text={line}
              className="font-heading text-[1.75rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl"
            />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl space-y-4 text-center">
          {INTRODUCTION.paragraphs.map((paragraph) => (
            <ScrubbedLine
              key={paragraph}
              text={paragraph}
              className="font-body text-base leading-relaxed tracking-wide text-ink/70 sm:text-lg"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-14 text-center"
        >
          <div className="mx-auto mb-6 h-px w-12 bg-terracotta/40" />
          <p className="bg-gradient-to-r from-terracotta to-ink bg-clip-text font-heading text-2xl font-semibold leading-snug tracking-tight text-transparent sm:text-3xl">
            {INTRODUCTION.closingLines.join(" ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
