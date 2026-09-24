"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-line/40 py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block text-xs uppercase tracking-[0.2em] text-terracotta"
        >
          Stay Connected
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mt-2 font-heading text-3xl text-ink"
        >
          Subscribe for New Practices
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-4 text-ink/70"
        >
          Occasional notes on practice, breath, and stillness — no noise, no
          spam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8"
        >
          {submitted ? (
            <p className="font-heading text-lg text-terracotta">
              Thank you — you&apos;re on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full flex-1 rounded-full border border-ink/15 bg-cream px-5 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-ink px-6 py-3 text-sm uppercase tracking-wider text-cream transition-colors hover:bg-terracotta"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
