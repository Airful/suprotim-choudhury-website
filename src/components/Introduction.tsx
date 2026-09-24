"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { INTRODUCTION } from "@/lib/content";

// Each word's own fade window is widened well beyond its natural slice of
// the line and overlapped with its neighbors, so the reveal reads as one
// continuous, gentle wave passing through the text rather than a sequence of
// hard word-by-word snaps.
const WORD_WINDOW_OVERLAP = 3.2;

function ScrubbedLine({ text, className }: { text: string; className: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  // Tied to this line's own position in the viewport (not a shared,
  // passage-wide progress), so every line finishes lighting up well before
  // it reaches a comfortable reading position — regardless of how long the
  // overall passage is or where this line falls within it.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.55"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const words = text.split(" ");
  const step = 1 / words.length;
  const windowSize = step * WORD_WINDOW_OVERLAP;

  return (
    <p ref={ref} className={`flex flex-wrap justify-center gap-x-[0.35em] ${className}`}>
      {words.map((word, i) => {
        const center = (i + 0.5) * step;
        const wordStart = center - windowSize / 2;
        const wordEnd = center + windowSize / 2;
        return (
          <Word key={`${word}-${i}`} progress={progress} range={[wordStart, wordEnd]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useSpring>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {children}
    </motion.span>
  );
}

export function Introduction() {
  return (
    <section className="bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <div className="space-y-3 text-center">
          {INTRODUCTION.lines.map((line) => (
            <ScrubbedLine
              key={line}
              text={line}
              className="font-heading text-[1.75rem] font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl"
            />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl space-y-4 text-center">
          {INTRODUCTION.paragraphs.map((paragraph) => (
            <ScrubbedLine
              key={paragraph}
              text={paragraph}
              className="font-body text-base leading-relaxed tracking-wide text-ink/70 sm:text-lg"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-14 text-center"
        >
          <div className="mx-auto mb-6 h-px w-12 bg-terracotta/40" />
          <p className="bg-gradient-to-r from-terracotta to-ink bg-clip-text font-heading text-2xl font-semibold leading-snug tracking-tight text-transparent sm:text-3xl">
            {INTRODUCTION.closingLines.join(" ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
