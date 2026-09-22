"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";

type Phase = { name: string; label: string; duration: number; scale: number };

// Classic 4-7-8 breathing technique.
const PHASES: Phase[] = [
  { name: "inhale", label: "Breathe In", duration: 4, scale: 1 },
  { name: "hold", label: "Hold", duration: 7, scale: 1 },
  { name: "exhale", label: "Breathe Out", duration: 8, scale: 0.6 },
];

export function BreathingGuide() {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Visitors who've asked their OS/browser to reduce motion get a static,
  // paused guide by default rather than an unstoppable looping animation.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const current = PHASES[phaseIndex];
    timeoutRef.current = setTimeout(() => {
      setPhaseIndex((i) => (i + 1) % PHASES.length);
    }, current.duration * 1000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phaseIndex, playing]);

  const current = PHASES[phaseIndex];
  const targetScale = playing ? current.scale : 0.6;
  const transitionDuration = playing ? current.duration : 0.6;

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.2em] text-terracotta"
        >
          A Moment To Pause
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-2 font-heading text-3xl text-ink"
        >
          Breathe With Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 max-w-md text-ink/70"
        >
          Follow the circle for one round of 4-7-8 breathing — inhale for 4,
          hold for 7, exhale for 8.
        </motion.p>

        <div className="relative mt-12 flex h-64 w-64 items-center justify-center">
          <div className="absolute h-64 w-64 rounded-full border border-ink/10" />
          <motion.div
            initial={{ scale: 0.6 }}
            animate={{ scale: targetScale }}
            transition={{ duration: transitionDuration, ease: "easeInOut" }}
            className="absolute h-40 w-40 rounded-full bg-terracotta/20"
          />
          <motion.div
            initial={{ scale: 0.6 }}
            animate={{ scale: targetScale }}
            transition={{ duration: transitionDuration, ease: "easeInOut" }}
            className="absolute h-40 w-40 rounded-full border-2 border-terracotta/60"
          />
          <span
            aria-live="polite"
            className="relative font-heading text-xl text-ink"
          >
            {playing ? current.label : "Paused"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="mt-10 flex items-center gap-2 rounded-full border border-ink px-5 py-2 text-sm uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          {playing ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          {playing ? "Pause" : "Resume"}
        </button>
      </div>
    </section>
  );
}
