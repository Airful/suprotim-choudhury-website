"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_VIDEO, SITE } from "@/lib/content";
import { VideoPlayer } from "@/components/VideoPlayer";

export function FeaturedVideo() {
  return (
    <section className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-3xl"
        >
          {FEATURED_VIDEO.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-10"
        >
          <VideoPlayer
            src={FEATURED_VIDEO.src}
            title={FEATURED_VIDEO.title}
            poster={FEATURED_VIDEO.poster}
            className="aspect-video w-full rounded-xl"
          />
        </motion.div>
        <p className="mt-4 text-sm text-cream/60">
          <a
            href={SITE.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 underline hover:text-cream"
          >
            More videos on YouTube
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
