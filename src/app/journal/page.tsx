import type { Metadata } from "next";
import { Journal } from "@/components/Journal";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Journal | ${SITE.name}`,
};

export default function JournalPage() {
  return <Journal />;
}
