"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, MessageSquare, Send, User } from "lucide-react";
import { CONTACT, SITE } from "@/lib/content";

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="block text-xs uppercase tracking-[0.25em] text-terracotta">
      — {children}
    </span>
  );
}

function FieldShell({
  icon: Icon,
  children,
}: {
  icon: typeof User;
  children: ReactNode;
}) {
  return (
    <div className="group relative">
      <Icon className="pointer-events-none absolute left-5 top-4 h-4 w-4 text-ink/30 transition-colors duration-300 group-focus-within:text-terracotta" />
      {children}
    </div>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // UI only for now — no backend wired up yet. Real submission handling
  // (email delivery, etc.) will be decided once Suprotim confirms how he
  // wants to receive these.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="overflow-hidden bg-cream pb-28 pt-32 sm:pb-36">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative sm:h-44 sm:overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-4 top-0 select-none font-heading text-[7rem] leading-none text-ink/[0.04] sm:top-2 sm:text-[11rem]"
          >
            CONTACT
          </span>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative max-w-2xl"
          >
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">{CONTACT.heading}</h1>
          </motion.div>
        </div>

        <div className="relative mt-8 grid grid-cols-1 gap-12 sm:mt-14 sm:grid-cols-[0.75fr_1.25fr] sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="hidden h-px w-16 origin-left bg-terracotta/50 sm:block"
            />
            <p className="mt-0 text-ink/70 sm:mt-8">{CONTACT.paragraph}</p>

            <div className="mt-10 space-y-3">
              <span className="block text-xs uppercase tracking-[0.2em] text-ink/40">
                Or reach out directly
              </span>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-ink transition-colors hover:text-terracotta"
              >
                Instagram
                <ArrowUpRight className="h-4 w-4 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
              <a
                href={SITE.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-ink transition-colors hover:text-terracotta"
              >
                YouTube
                <ArrowUpRight className="h-4 w-4 -translate-x-0.5 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white/50 p-8 shadow-[0_30px_60px_-30px_rgba(28,25,23,0.25)] sm:p-10"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-terracotta via-terracotta/60 to-transparent"
            />

            {submitted ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-heading text-xl text-terracotta"
              >
                Thank you — your message has been sent.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <FieldShell icon={User}>
                  <label htmlFor="contact-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name"
                    className="w-full rounded-full border border-ink/15 bg-cream py-3.5 pl-12 pr-5 text-sm text-ink placeholder:text-ink/40 transition-colors duration-300 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/15"
                  />
                </FieldShell>
                <FieldShell icon={Mail}>
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email"
                    className="w-full rounded-full border border-ink/15 bg-cream py-3.5 pl-12 pr-5 text-sm text-ink placeholder:text-ink/40 transition-colors duration-300 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/15"
                  />
                </FieldShell>
                <FieldShell icon={MessageSquare}>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Message"
                    className="w-full rounded-2xl border border-ink/15 bg-cream py-4 pl-12 pr-5 text-sm text-ink placeholder:text-ink/40 transition-colors duration-300 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/15"
                  />
                </FieldShell>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm uppercase tracking-wider text-cream transition-colors hover:bg-terracotta"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
