import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Subscribe } from "@/components/Subscribe";
import { FeaturedVideo } from "@/components/FeaturedVideo";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Subscribe />
      <FeaturedVideo />
    </>
  );
}
