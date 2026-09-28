"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_VIDEO, SITE, WATCH } from "@/lib/content";
import { ScrubbedLine } from "@/components/ScrubbedText";
import { VideoPlayer } from "@/components/VideoPlayer";

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="block text-xs uppercase tracking-[0.25em] text-terracotta">
      — {children}
    </span>
  );
}

export function Watch() {
  return (
    <section className="bg-cream pb-28 pt-32 sm:pb-36">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionLabel>Watch</SectionLabel>
          <h1 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">{WATCH.heading}</h1>
        </motion.div>

        <div className="mx-auto mt-8 max-w-xl space-y-4">
          {WATCH.paragraphs.map((paragraph) => (
            <ScrubbedLine
              key={paragraph}
              text={paragraph}
              justify="center"
              className="text-base leading-relaxed text-ink/70 sm:text-lg"
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto mt-16 max-w-4xl px-6"
      >
        <VideoPlayer
          src={FEATURED_VIDEO.src}
          title={FEATURED_VIDEO.title}
          poster={FEATURED_VIDEO.poster}
          className="aspect-video w-full rounded-2xl shadow-[0_40px_80px_-20px_rgba(28,25,23,0.35)]"
        />

        <div className="mt-8 flex justify-center">
          <a
            href={SITE.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-wider text-cream transition-colors hover:bg-terracotta"
          >
            Watch on YouTube
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mt-24 max-w-xl px-6 text-center sm:mt-32"
      >
        <div className="mx-auto mb-6 h-px w-12 bg-terracotta/40" />
        <h2 className="font-heading text-2xl text-ink sm:text-3xl">{WATCH.closing.heading}</h2>
        <p className="mt-3 text-ink/60">{WATCH.closing.subtext}</p>
      </motion.div>
    </section>
  );
}
