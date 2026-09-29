"use client";

import Image from "next/image";
import { motion } from "motion/react";

// A subtle SC monogram mark used at section boundaries — the brief asks
// for the monogram to appear in the header, favicon, and section
// transitions. "ink" reads on light backgrounds, "cream" on dark ones.
export function SectionDivider({ variant = "ink" }: { variant?: "ink" | "cream" }) {
  const src =
    variant === "cream" ? "/images/sc-monogram-cream.png" : "/images/sc-monogram-ink.png";
  const targetOpacity = variant === "cream" ? 0.4 : 0.18;

  return (
    <div aria-hidden className="flex items-center justify-center py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: targetOpacity, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-7 w-7 sm:h-8 sm:w-8"
      >
        <Image src={src} alt="" fill sizes="32px" className="object-contain" />
      </motion.div>
    </div>
  );
}
