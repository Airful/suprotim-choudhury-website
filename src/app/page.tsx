import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Subscribe } from "@/components/Subscribe";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Instagram } from "@/components/Instagram";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedVideo />
      <Instagram />
      <Subscribe />
    </>
  );
}
