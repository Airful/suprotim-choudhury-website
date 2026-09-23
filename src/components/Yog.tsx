"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { YOG_VIDEOS } from "@/lib/content";
import { LongVideoCarousel } from "@/components/LongVideoCarousel";

export function Yog() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + YOG_VIDEOS.length) % YOG_VIDEOS.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % YOG_VIDEOS.length,
    );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <section className="bg-cream pb-24 pt-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block text-center text-xs uppercase tracking-[0.2em] text-terracotta"
        >
          Practice &amp; Presence
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-2 text-center font-heading text-3xl text-ink"
        >
          Yog
        </motion.h2>

        <LongVideoCarousel />

        <div className="mt-16 grid grid-cols-2 gap-6">
          {YOG_VIDEOS.map((video, index) => (
            <motion.button
              key={video.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Play video: ${video.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl"
              style={{ aspectRatio: `${video.width} / ${video.height}` }}
            >
              <video
                src={video.src}
                preload="metadata"
                muted
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-5 w-5" />
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 px-4 py-3 text-left font-heading text-base text-cream">
                {video.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setActiveIndex(null)}
          >
            <motion.button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-6 top-6 z-10 text-3xl text-white"
              aria-label="Close video"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>

            {YOG_VIDEOS.length > 1 && (
              <>
                <motion.button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrev();
                  }}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white sm:left-8"
                  aria-label="Previous video"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white sm:right-8"
                  aria-label="Next video"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-8 w-8" />
                </motion.button>
              </>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative h-[80vh]"
              style={{
                aspectRatio: `${YOG_VIDEOS[activeIndex].width} / ${YOG_VIDEOS[activeIndex].height}`,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <video
                src={YOG_VIDEOS[activeIndex].src}
                controls
                autoPlay
                playsInline
                className="h-full w-full rounded-lg object-contain"
              />
            </motion.div>

            {YOG_VIDEOS.length > 1 && (
              <span className="absolute bottom-6 text-sm text-cream/60">
                {activeIndex + 1} / {YOG_VIDEOS.length}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
