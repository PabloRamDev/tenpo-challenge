"use client"
import ParallaxSection from "@/_components/_parallax-section/parallax-section";
import Hero from "@/_components/_hero/hero";
import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all"
import VideoSection from "@/_components/_video-section/video-section";
import Benefits from "@/_components/_benefits-section/benefits";
import CtaSection from "@/_components/_cta-section/cta-section";


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {

  
  return (
    <main className="relative flex flex-col gap-xl md:px-2xl overflow-x-clip py-xl">
      <Hero />
      <Benefits/>
      <ParallaxSection />
      <VideoSection />
      <CtaSection />

    </main>
  );
}
