"use client";
import React from "react";
import { CtaButton } from "../_ui/_buttons/cta-button";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

export default function CtaSection() {
  useGSAP(() => {
    const headlineSplit = new SplitText("#cta-title", { type: "chars, words" });
    const paragraphSplit = new SplitText("#cta-p", { type: "chars, lines" });

      const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cta-section",
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });

  tl.from(headlineSplit.chars, {
    yPercent: 100,
    duration: 1,
    stagger: 0.05,
    ease: "expo.out",
  });

  tl.from(paragraphSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 0.5,
    stagger: 0.05,
  }, "+=0.1");
  }, []);

  return (
    <section
      id="cta-section"
      className="relative px-md md:px-2xl flex flex-col md:flex-row mt-xl h-screen md:h-[867px] items-center justify-center bg-gradient-to-br from-neutral-900 to-primary-900 md:rounded-4xl overflow-hidden"
    >
      <Image
        src="/images/cta-image.jpeg"
        fill
        alt="hero"
        className="w-full h-full object-cover object-center before:bg-neutral-300 grayscale"
      />
      <div className="absolute inset-0 bg-neutral-700/70 mix-blend-multiply pointer-events-none" />

      <div className="relative left-0 flex flex-col items-center justify-center gap-md">
        <h2
          id="cta-title"
          className="font-graphie text-text-0 text-lg md:text-xl text-center leading-[90%]"
        >
          Siempre hay espacio para alguien más 🥰
        </h2>
        <p
          id="cta-p"
          className="font-open-sans text-center text-md  text-text-0 w-full md:w-3/2"
        >
          Somos miles de usuarios manejando nuestro dinero con tepago. <br/>
          Únete a quienes verdaderamente saben de plata
        </p>
        <div className="flex gap-xs w-auto">
          <CtaButton variant="secondary"> Comienza ya </CtaButton>
        </div>
      </div>
    </section>
  );
}
