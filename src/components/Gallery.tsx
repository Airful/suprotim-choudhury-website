"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/content";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const showPrev = () =>
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
    );
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % GALLERY_IMAGES.length,
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
      <div className="mx-auto max-w-6xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block text-center text-xs uppercase tracking-[0.2em] text-terracotta"
        >
          Moments &amp; Movement
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-2 text-center font-heading text-3xl text-ink"
        >
          Gallery
        </motion.h2>

        <div className="mt-12 columns-2 gap-4 sm:columns-3">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative mb-4 block w-full overflow-hidden rounded-lg break-inside-avoid"
              aria-label={`View larger: ${image.alt}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 640px) 33vw, 50vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                <Expand className="h-6 w-6 text-cream" />
              </div>
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
                src={GALLERY_IMAGES[activeIndex].src}
                alt={GALLERY_IMAGES[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <span className="absolute bottom-6 text-sm text-cream/60">
              {activeIndex + 1} / {GALLERY_IMAGES.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
