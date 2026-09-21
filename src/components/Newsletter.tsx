"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Mail, CheckCircle2 } from "lucide-react";
import { CONNECT } from "@/lib/content";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink text-cream">
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "#b54b32" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-terracotta">
            {CONNECT.overline}
          </span>
          <h2 className="mt-3 font-heading text-4xl">Stay Connected</h2>
          <p className="mt-4 max-w-md text-cream/70">
            Sign up to hear from Suprotim. (This form is a placeholder — it
            does not send data anywhere yet.)
          </p>

          <form
            className="mt-8 flex flex-col gap-3 lg:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="relative w-full">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/40" />
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-cream/30 bg-transparent py-3 pl-11 pr-5 text-cream placeholder:text-cream/40 transition-colors focus:border-terracotta focus:outline-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-cream px-6 py-3 text-sm uppercase tracking-wider text-ink"
            >
              Subscribe
            </motion.button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-4 flex items-center gap-2 text-sm text-cream/70"
              >
                <CheckCircle2 className="h-4 w-4 text-terracotta" />
                Thanks! (Placeholder confirmation — no email was actually sent.)
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-first aspect-[4/5] w-full overflow-hidden rounded-2xl sm:order-last"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={CONNECT.image.src}
              alt={CONNECT.image.alt}
              fill
              sizes="(min-width: 640px) 40vw, 90vw"
              className="rounded-2xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
