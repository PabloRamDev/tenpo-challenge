"use client"
import ParallaxSection from "@/_components/_parallax-section/parallax-section";
import Hero from "@/_components/_hero/hero";
import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all"
import AnimationSection from "@/_components/_animation-section/animation-section";


gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {

  
  return (
    <main className="flex flex-col gap-xl">
      <Hero />
      <ParallaxSection />
      <AnimationSection />
    </main>
  );
}
