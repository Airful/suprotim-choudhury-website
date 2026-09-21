"use client";

import { motion } from "motion/react";
import { JOURNAL_POSTS } from "@/lib/content";

export function Journal() {
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
          Journal
        </motion.h2>

        {JOURNAL_POSTS.length === 0 ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-ink/60"
          >
            Suprotim's writing will appear here soon — check back for reflections,
            teaching notes, and stories from his practice.
          </motion.p>
        ) : (
          <div className="mt-12 grid gap-6 text-left">
            {JOURNAL_POSTS.map((post, index) => (
              <motion.a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-ink/10 bg-white/40 px-6 py-5 transition-colors hover:border-terracotta"
              >
                <span className="text-xs uppercase tracking-wider text-ink/50">
                  {post.date}
                </span>
                <h3 className="mt-1 font-heading text-xl text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
