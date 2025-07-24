"use client";
import Image from "next/image";
import React from "react";
import { CtaButton } from "../_ui/_buttons/cta-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
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
        scrub: 1,
      },
    });

    heroTween.to("#circle-ref", {
      y: "-100%",
      scale: 0,
      ease: "power0.inOut",
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
      className="relative flex md:my-xl h-screen w-full justify-start md:items-start md:justify-center"
    >
      <div
        id="circle-ref"
        className="absolute top-[25%] md:top-[-10%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-400 h-[1000px] md:h-[2000px] w-[1000px] md:w-[2000px] aspect-square  rounded-full -z-[1]"
      />
      <div className="relative flex flex-col justify-start items-center md:justify-center h-auto gap-sm top-2xl px-lg">
        <div className="w-2/3 md:w-auto">
          <Image
            src={"/images/tepago-go-white.png"}
            alt="Hero logo"
            width={400}
            height={400}
            className="w-[md:300px] 2xl-w-full"
          />
        </div>
        <div className="flex flex-col gap-sm">
          <h1
            id="hero-h1"
            className="font-open-sans text-lg md:text-xl text-center leading-[100%]"
          >
            Tu cuenta, sin cuentos
          </h1>
          <p id="hero-p" className="text-center md:text-start">
            Compra, paga, ahorra y envía dinero sin cobros. Todo rápido y
            seguro.
          </p>
        </div>
        <div
          id="hero-actions"
          className="flex gap-xs w-full md:w-3/4 justify-center"
        >
          <CtaButton> Comienza ya </CtaButton>
          <CtaButton> Pedir tarjeta </CtaButton>
        </div>
      </div>
      <div id="hero-phone" className="hidden md:flex absolute top-[10%] md:left-0 2xl:left-0 ">
        <Image
          src={"/images/hero-phone.png"}
          alt="Phone with tepago app"
          width={600}
          height={580}
          className="w-[400px] 2xl:w-[600px]"
        />
      </div>

      <div
        id="hero-moneybag"
        className="absolute top-[3%] md:top-[15%] right-0 2xl:right-[5%]"
      >
        <Image
          src={"/images/moneybag.png"}
          alt="moneybag 3d emoji"
          width={220}
          height={220}
          className="w-[120px] md:w-[180px] 2xl:w-full"
        />
      </div>

      <div
        id="hero-pig"
        className="absolute bottom-[25%] right-[50%] md:right-[5%] md:bottom-[40%] 2xl:right-[10%]"
      >
        <Image
          src={"/images/pig.png"}
          alt="pig 3d emoji"
          width={400}
          height={400}
          className="md:w-[320px] 2xl:w-full"
          
        />
      </div>
    </section>
  );
}
