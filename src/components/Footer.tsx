import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-cream py-10 text-center text-sm text-ink/60">
      <p>{SITE.name}</p>
      <a
        href={SITE.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block transition-colors hover:text-terracotta"
      >
        Instagram
      </a>
      <p className="mt-4">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}
