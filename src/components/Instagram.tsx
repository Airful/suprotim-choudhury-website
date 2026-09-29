"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { INSTAGRAM, SITE } from "@/lib/content";

export function Instagram() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + INSTAGRAM.images.length) % INSTAGRAM.images.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % INSTAGRAM.images.length,
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
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="block text-xs uppercase tracking-[0.25em] text-terracotta">
            — Instagram
          </span>
          <h2 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">{INSTAGRAM.heading}</h2>
          <div className="mx-auto mt-5 max-w-lg space-y-2 text-ink/70">
            {INSTAGRAM.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-1 px-1 sm:grid-cols-4 sm:gap-1.5 sm:px-6">
        {INSTAGRAM.images.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View larger: ${image.alt}`}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
              <Expand className="h-5 w-5 text-cream" />
              <span className="text-xs uppercase tracking-[0.15em] text-cream">View larger</span>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-10 flex flex-col items-center gap-4 px-6 text-center"
      >
        <p className="text-ink/70">For more images, please check out the Instagram.</p>
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm uppercase tracking-wider text-ink transition-colors hover:border-terracotta hover:text-terracotta"
        >
          {INSTAGRAM.ctaLabel}
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <span className="text-sm text-ink/50">{INSTAGRAM.handle}</span>
      </motion.div>

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
              aria-label="Close enlarged image"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>

            <motion.button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white sm:left-8"
              aria-label="Previous image"
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
              aria-label="Next image"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-8 w-8" />
            </motion.button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative h-[80vh] w-full max-w-3xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={INSTAGRAM.images[activeIndex].src}
                alt={INSTAGRAM.images[activeIndex].alt}
                fill
                sizes="90vw"
                quality={90}
                className="object-contain"
              />
            </motion.div>

            <span className="absolute bottom-6 text-sm text-cream/60">
              {activeIndex + 1} / {INSTAGRAM.images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
