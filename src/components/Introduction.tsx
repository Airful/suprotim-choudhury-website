"use client";

import { motion } from "motion/react";
import { INTRODUCTION } from "@/lib/content";

export function Introduction() {
  return (
    <section className="bg-cream pb-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-2xl leading-relaxed text-ink sm:text-3xl"
        >
          {INTRODUCTION.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-8 space-y-4 text-ink/70"
        >
          {INTRODUCTION.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 font-heading text-xl text-terracotta"
        >
          {INTRODUCTION.closingLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
