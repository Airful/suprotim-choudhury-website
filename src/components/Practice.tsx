"use client";

import { motion } from "motion/react";

export function Practice() {
  return (
    <section className="bg-cream pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-3xl text-ink"
        >
          Practice
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-ink/60"
        >
          Content for this page is being built out — check back soon.
        </motion.p>
      </div>
    </section>
  );
}
