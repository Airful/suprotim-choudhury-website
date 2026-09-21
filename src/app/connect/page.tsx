import type { Metadata } from "next";
import { Newsletter } from "@/components/Newsletter";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Connect | ${SITE.name}`,
};

export default function ConnectPage() {
  return <Newsletter />;
}
