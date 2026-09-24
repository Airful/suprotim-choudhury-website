"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cream">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-heading text-4xl leading-tight text-ink sm:text-5xl">
            {HERO.tagline}
          </h1>
          <p className="mt-6 max-w-md text-base text-ink/70">{HERO.subtext}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={HERO.image.src}
            alt={HERO.image.alt}
            fill
            priority
            quality={90}
            sizes="(min-width: 640px) 40vw, 90vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
