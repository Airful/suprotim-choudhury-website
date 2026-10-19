import type { Metadata } from "next";
import { Testimonials } from "@/components/Testimonials";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `Testimonials | ${SITE.name}`,
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
