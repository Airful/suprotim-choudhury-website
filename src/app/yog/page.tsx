import type { Metadata } from "next";
import { Yog } from "@/components/Yog";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Yog | ${SITE.name}`,
};

export default function YogPage() {
  return <Yog />;
}
