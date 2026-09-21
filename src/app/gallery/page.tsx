import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Gallery | ${SITE.name}`,
};

export default function GalleryPage() {
  return <Gallery />;
}
