"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ABOUT } from "@/lib/content";

function SectionLabel({
  children,
  className = "text-terracotta",
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`block text-xs uppercase tracking-[0.25em] ${className}`}>
      — {children}
    </span>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const [ledeLine, ...introRest] = ABOUT.paragraphs;
  const reflections = introRest.slice(2);
  const [pullQuote, ...supportingLines] = [...ABOUT.practiceWithoutPretence.paragraphs].reverse();

  return (
    <section ref={sectionRef} className="overflow-hidden bg-cream pb-0 pt-32">
      <div className="relative mx-auto max-w-6xl px-6">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-4 top-0 select-none font-heading text-[7rem] leading-none text-ink/[0.04] sm:top-2 sm:text-[11rem]"
        >
          PRESENCE
        </span>

        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:order-2"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-[-6%]">
              <Image
                src={ABOUT.image.src}
                alt={ABOUT.image.alt}
                fill
                sizes="(min-width: 640px) 40vw, 90vw"
                quality={90}
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="relative sm:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <SectionLabel>About</SectionLabel>
              <h2 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">
                About Suprotim
              </h2>
              <p className="mt-6 font-heading text-2xl leading-snug tracking-tight text-ink sm:text-3xl">
                {ledeLine}
              </p>
              {introRest.slice(0, 2).map((paragraph) => (
                <p key={paragraph} className="mt-5 text-ink/70">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {reflections.map((paragraph, index) => (
            <motion.div
              key={paragraph}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative flex min-h-[220px] items-center overflow-hidden rounded-3xl border border-ink/10 bg-white/40 p-8 transition-colors duration-300 hover:border-terracotta/40 sm:min-h-[260px] sm:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-8xl text-ink/[0.06] transition-colors duration-300 group-hover:text-terracotta/[0.12] sm:text-9xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="relative text-ink/70">{paragraph}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-24 bg-ink py-24 text-cream"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel className="text-terracotta">
            A Practice Without Pretence
          </SectionLabel>
          <p className="mx-auto mt-6 max-w-2xl font-heading text-2xl font-medium leading-snug tracking-tight text-cream sm:text-3xl">
            {pullQuote}
          </p>
          <div className="mx-auto mt-8 max-w-xl space-y-4 text-cream/60">
            {supportingLines.reverse().map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
