"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "/about", label: "About Me" },
  { href: "/gallery", label: "Gallery" },
  { href: "/journal", label: "Journal" },
  { href: "/press", label: "Press" },
  { href: "/connect", label: "Connect" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu automatically whenever navigation completes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="block">
          <Image
            src={SITE.logo.src}
            alt={SITE.logo.alt}
            width={SITE.logo.width}
            height={SITE.logo.height}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <ul className="hidden gap-8 text-sm uppercase tracking-wider text-ink sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative inline-block py-1 transition-colors hover:text-terracotta"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px w-0 bg-terracotta transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-ink sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-ink/10 bg-cream px-6 pb-4 text-sm uppercase tracking-wider text-ink sm:hidden"
          >
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 transition-colors hover:text-terracotta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
