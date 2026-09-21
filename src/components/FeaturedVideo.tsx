"use client";

import { motion } from "motion/react";
import { FEATURED_VIDEO } from "@/lib/content";

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
          className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl bg-black"
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${FEATURED_VIDEO.youtubeId}`}
            title="Suprotim Choudhury — featured video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
        <p className="mt-4 text-sm text-cream/60">
          Video not loading?{" "}
          <a
            href={`https://youtu.be/${FEATURED_VIDEO.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cream"
          >
            Watch it directly on YouTube
          </a>
          .
        </p>
      </div>
    </section>
  );
}
