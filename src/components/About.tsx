"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ABOUT } from "@/lib/content";

export function About() {
  return (
    <section className="bg-cream pb-24 pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:order-2"
        >
          <Image
            src={ABOUT.image.src}
            alt={ABOUT.image.alt}
            fill
            sizes="(min-width: 640px) 40vw, 90vw"
            quality={90}
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="sm:order-1"
        >
          <h2 className="font-heading text-3xl text-ink">About Suprotim</h2>
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-ink/70">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
