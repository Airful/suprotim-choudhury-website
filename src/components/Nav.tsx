"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice" },
  { href: "/teaching", label: "Teaching" },
  { href: "/watch", label: "Watch" },
  { href: "/gallery", label: "Gallery" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const pathname = usePathname();

  // Close the mobile menu automatically whenever navigation completes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // The pill follows whichever link is hovered, falling back to the active
  // page. Sharing one layoutId across links means Framer Motion animates
  // its position/size itself (FLIP) as it moves from item to item, instead
  // of us hand-animating a left/width.
  const pillTarget = hoveredHref ?? pathname;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/sc-monogram-ink.png"
            alt=""
            aria-hidden
            width={64}
            height={64}
            priority
            className="hidden h-7 w-7 opacity-80 sm:block"
          />
          <Image
            src={SITE.logo.src}
            alt={SITE.logo.alt}
            width={SITE.logo.width}
            height={SITE.logo.height}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <ul
          className="hidden items-center gap-1 text-sm uppercase tracking-wider text-ink sm:flex"
          onMouseLeave={() => setHoveredHref(null)}
        >
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            const showPill = pillTarget === link.href;
            return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoveredHref(link.href)}
              >
                {showPill && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-terracotta/10"
                    transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.5 }}
                  />
                )}
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative z-10 inline-block rounded-full px-4 py-2 transition-colors duration-200 hover:text-terracotta ${
                    isActive ? "text-terracotta" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
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
            {LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block py-3 transition-colors hover:text-terracotta ${
                      isActive ? "text-terracotta" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
