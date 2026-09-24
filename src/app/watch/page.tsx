import type { Metadata } from "next";
import { Watch } from "@/components/Watch";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Watch | ${SITE.name}`,
};

export default function WatchPage() {
  return <Watch />;
}
