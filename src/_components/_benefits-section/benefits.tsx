import { benefitCardData } from "@/_lib/benefit-cards";
import React, { useRef } from "react";
import BenefitCard, { BenefitCardRef } from "./benefit-card2";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

export default function Benefits() {

    const cardRefs = useRef<(BenefitCardRef | null)[]>([]);

      useGSAP(() => {
          const elements = cardRefs.current.map((ref) => ref?.el).filter(Boolean);
    const headlineSplit = new SplitText("#benefits-title", { type: "chars, words" });
    const paragraphSplit = new SplitText("#benefits-p", { type: "chars, lines" });

      const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#benefits-section",
      start: "top 80%",
      toggleActions: "restart none none none",
    },
  });

  tl.from(headlineSplit.chars, {
    opacity: 100,
    duration: 0.5,
    stagger: 0.05,
    ease: "expo.out",
  }, "<");

  tl.from(paragraphSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 0.5,
    stagger: 0.05,
  }, "<");

  tl.from(elements, {
    scale: 0.8,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  }, "<");
  }, []);
  return (
    <section id="benefits-section" className="relative flex flex-col h-screen 2xl:max-h-[867px] w-full items-center md:justify-start md:items-center gap-xl px-lg md:px-2xl">
        <div className="flex flex-col justify-center gap-md">
      <h2 id="benefits-title" className="font-graphie text-lg md:text-xl text-center leading-[100%]">
        Conoce los beneficios de tepago
      </h2>
      <p id="benefits-p" className="text-center">
        Tepago te entrega un sin fin de motivos para cambiarte: conoce nuestros
        beneficios acá: 👇
      </p>
      </div>
      <div className="flex flex-col gap-lg md:flex-row w-full">
      {
        benefitCardData.map((item, index) => <BenefitCard ref={(el) => {
      cardRefs.current[index] = el;
    }} key={item.id} id={item.id} title={item.title} image={item.image} description={item.description}/>)
      }
      </div>
    </section>
  );
}
