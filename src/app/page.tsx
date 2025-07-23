import ParallaxSection from "@/_components/_parallax-section/parallax-section";
import Hero from "@/_components/_hero/hero";


export default function Home() {
  return (
    <main className="flex flex-col gap-xl">
      <Hero />
      <ParallaxSection />
    </main>
  );
}
