import type { Metadata } from "next";
import { Teaching } from "@/components/Teaching";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Teaching | ${SITE.name}`,
};

export default function TeachingPage() {
  return <Teaching />;
}
