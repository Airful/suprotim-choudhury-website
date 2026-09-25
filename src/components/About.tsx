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

        <div
          className="mt-24 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
          style={{ perspective: 1200 }}
        >
          {reflections.map((paragraph, index) => (
            <motion.div
              key={paragraph}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{
                y: -8,
                rotateX: 3,
                rotateY: -3,
                boxShadow: "0 24px 48px -16px rgba(28, 25, 23, 0.16)",
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative flex min-h-[220px] items-center overflow-hidden rounded-3xl border border-ink/10 bg-white/40 p-8 transition-colors duration-300 hover:border-terracotta/40 sm:min-h-[260px] sm:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 select-none font-heading text-8xl text-ink/[0.06] transition-colors duration-300 group-hover:text-terracotta/[0.14] sm:text-9xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="relative font-heading text-base leading-snug text-ink/70 transition-colors duration-300 group-hover:text-ink sm:text-lg">
                {paragraph}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 bg-ink py-24 text-cream">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel className="text-terracotta">
              A Practice Without Pretence
            </SectionLabel>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl bg-gradient-to-r from-cream via-cream to-terracotta bg-clip-text font-heading text-2xl font-medium leading-snug tracking-tight text-transparent sm:text-3xl"
          >
            {pullQuote}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mt-8 max-w-xl space-y-4 text-cream/60"
          >
            {supportingLines.reverse().map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
