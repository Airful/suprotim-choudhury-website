"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PRESS_ITEMS } from "@/lib/content";

export function Press() {
  return (
    <section className="bg-line/40 pb-24 pt-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block text-xs uppercase tracking-[0.2em] text-terracotta"
        >
          As Seen In
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-2 font-heading text-3xl text-ink"
        >
          Featured In
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PRESS_ITEMS.map((item, index) => (
            <motion.a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-xl border border-transparent"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, borderColor: "#b54b32" }}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 640px) 30vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:translate-x-2">
                <ArrowUpRight className="h-4 w-4" />
              </div>

              <div className="relative flex flex-col gap-2 px-6 py-5 text-left text-cream">
                <span className="font-heading text-xl">{item.title}</span>
                <span className="text-sm text-cream/80">{item.description}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
