"use client";
import Image from "next/image";
import React from "react";
import { CtaButton } from "../_ui/_buttons/cta-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  // const timeline = gsap.timeline();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#hero-pig", {
      y: 100,
      scale: 1.1,
      opacity: 0,
      duration: 1,
      ease: "power0.in",
    })
      .from(
        "#hero-moneybag",
        {
          x: 10,
          y: -100,
          scale: 1.1,
          opacity: 0,
          duration: 1,
          ease: "power0.in",
        },
        "<"
      )
      .from(
        "#hero-h1",
        {
          y: -10,
          scale: 1.1,
          duration: 1,
          ease: "power0.in",
        },
        "<"
      )
      .from(
        "#hero-p",
        {
          y: 10,
          scale: 1.1,
          duration: 1,
          ease: "power0.in",
        },
        "<"
      )
      .from(
        "#hero-actions",
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
        },
        "+=0.5"
      );

    const heroTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom center",
        markers: true,
        scrub: 1,
      },
    });

    heroTween.to("#circle-ref", {
      y: "100%",
      scale: 0
    });

    heroTween.to(
      "#hero-pig",
      {
        y: "-200%",
        x: "-20%",
      },
      "<"
    );

    heroTween.to(
      "#hero-moneybag",
      {
        y: "-200%",
        x: "10%",
      },
      "<"
    );

    heroTween.to(
      "#hero-phone",
      {
        y: "-200%",
        x: "-10%",
      },
      "<"
    );
  }, []);
  return (
    <section
      id="hero-section"
      className="relative py-xl flex md:my-xl min-h-screen w-full items-center md:items-start justify-center"
    >
      <div
        id="circle-ref"
        className="absolute -top-1 md:top-[-30%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-400 h-[1000px] md:h-[2000px] w-[1000px] md:w-[2000px] aspect-square  rounded-full -z-[1]"
      />
      <div className="relative flex flex-col items-center justify-center gap-xs md:top-3xl">
        <h1
          id="hero-h1"
          className="font-open-sans font-bold text-xl justify-center items-center"
        >
          Una sola cuenta, sin cuentos
        </h1>
        <p id="hero-p">
          Compra, paga, ahorra y envía dinero sin cobros. Todo claro, sin
          cuentos.
        </p>
        <div id="hero-actions" className="flex gap-xs w-full md:w-3/4">
          <CtaButton> Comienza ya </CtaButton>
                 <CtaButton> Pedir tarjeta física </CtaButton>
    
        </div>
      </div>
      <div id="hero-phone" className="hidden md:flex absolute top-0 left-0">
        <Image
          src={"/images/hero-phone.png"}
          alt="Phone with tepago app"
          width={648}
          height={648}
        />
      </div>

      <div
        id="hero-moneybag"
        className="absolute top-0 right-[5%] w-[200px] md:w-auto"
      >
        <Image
          src={"/images/moneybag.png"}
          alt="moneybag 3d emoji"
          width={250}
          height={250}
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 250px, 250px"
        />
      </div>

      <div
        id="hero-pig"
        className="absolute bottom-[10%] md:bottom-[40%] md:right-[10%] w-[300px] md:w-auto"
      >
        <Image
          src={"/images/pig.png"}
          alt="pig 3d emoji"
          width={452}
          height={452}
        />
      </div>
    </section>
  );
}
