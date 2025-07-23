import CardsSection from "@/_components/_cards-section/cards-section";
import Hero from "@/_components/_hero/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-xl">
      <Hero />
      <CardsSection />
    </main>
  );
}
