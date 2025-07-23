"use client"
import Image from "next/image";
import React from "react";
import CtaButton from "../_ui/_buttons/cta-button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  // const timeline = gsap.timeline();

  useGSAP(() => {


    gsap.from("#hero-phone", {
      y: 250,
      duration: 1,
      opacity:0,
      scale: 1.1,
      ease: 'power0.in'
    })

    gsap.from("#hero-pig", {
      y:100,
      duration: 1,
      scale: 1.1,
      opacity: 0,
      ease: "power0.in"
    })
    gsap.from("#hero-moneybag", {
      x: 10,
      y:-100,
      scale: 1.1,
      opacity: 0,
      duration: 1,
      ease: "power0.in"
    })
    gsap.from("#hero-h1", {
      y:-10,
      duration: 1,
      scale: 1.1,
      ease: "power0.in"
    })
    gsap.from("#hero-p", {
      y:10,
      duration: 1,
      scale: 1.1,
      ease: "power0.in"
    })

    gsap.from("#hero-actions", {
      y: 20,
      duration: 0.5,
      opacity: 0,
      delay: 0.5
    })
  }, [])
  return (
    <section className="relative top-2xl flex mt-xl h-[648px] items-start justify-center">
      <Image
        id="hero-phone"
        src={"/images/hero-phone.png"}
        alt="Phone with tepago app"
        width={648}
        height={648}
        className="absolute top-0 left-0"
      />
      <div className="relative flex flex-col items-center justify-center gap-xs top-3xl">
        <h1 id="hero-h1" className="font-open-sans font-bold text-xl justify-center items-center">
          Una sola cuenta, sin cuentos
        </h1>
        <p id="hero-p">
          Compra, paga, ahorra y envía dinero sin cobros. Todo claro, sin
          cuentos.
        </p>
        <div id="hero-actions" className="flex gap-xs w-3/4">
          <CtaButton text="Comienza Ya!" isPrimary={true} />
          <CtaButton text="Pedir tarjeta física" isPrimary={false} />
        </div>
      </div>
       <Image
       id="hero-moneybag"
        src={"/images/moneybag.png"}
        alt="moneybag 3d emoji"
        width={250}
        height={250}
        className="absolute top-[10%] right-[10%]"
      />
        <Image
        id="hero-pig"
        src={"/images/pig.png"}
        alt="pig 3d emoji"
        width={452}
        height={452}
        className="absolute bottom-0 right-[10%]"
      />
    </section>
  );
}
