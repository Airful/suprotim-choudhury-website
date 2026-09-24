import type { Metadata } from "next";
import { Practice } from "@/components/Practice";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Practice | ${SITE.name}`,
};

export default function PracticePage() {
  return <Practice />;
}
