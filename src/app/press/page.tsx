import type { Metadata } from "next";
import { Press } from "@/components/Press";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Press | ${SITE.name}`,
};

export default function PressPage() {
  return <Press />;
}
