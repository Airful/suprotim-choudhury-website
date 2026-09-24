import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact | ${SITE.name}`,
};

export default function ContactPage() {
  return <Contact />;
}
