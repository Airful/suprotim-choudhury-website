import type { Metadata } from "next";
import { About } from "@/components/About";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `About | ${SITE.name}`,
};

export default function AboutPage() {
  return <About />;
}
