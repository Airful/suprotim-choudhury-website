"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

// Each word's own fade window is widened well beyond its natural slice of
// the line and overlapped with its neighbors, so the reveal reads as one
// continuous, gentle wave passing through the text rather than a sequence of
// hard word-by-word snaps.
const WORD_WINDOW_OVERLAP = 3.2;

export function ScrubbedLine({
  text,
  className,
  justify = "center",
}: {
  text: string;
  className: string;
  justify?: "center" | "start";
}) {
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
    <p
      ref={ref}
      className={`flex flex-wrap gap-x-[0.35em] ${justify === "center" ? "justify-center" : "justify-start"} ${className}`}
    >
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
  // Opacity-only fade — no vertical drift — so a word mid-reveal still sits
  // on the same baseline as its fully-lit neighbors instead of reading as
  // misaligned while it's fading in.
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}
