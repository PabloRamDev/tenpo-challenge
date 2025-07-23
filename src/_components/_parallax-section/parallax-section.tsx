"use client"
import React, { useEffect, useRef } from "react";

import BackgroundCard from "./background-card";
import MidgroundCard from "./midground-card";
import ForegroundCard from "./foreground-card";
import { CtaButton } from "../_ui/_buttons/cta-button";


interface cardRefElement extends HTMLElement {
    moveTo: (x: number, y: number) => void;
}
export default function ParallaxSection() {

const foregroundCardRef = useRef<cardRefElement>(null);
const midgroundCardRef = useRef<cardRefElement>(null);
const backgroundCardRef = useRef<cardRefElement>(null);

  useEffect(() => {
    const onMove = ({ clientX, clientY } : {clientX: number, clientY: number}) => {
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      foregroundCardRef?.current?.moveTo(x / 4, y / 4);
      midgroundCardRef?.current?.moveTo(x / 8, y / 8);
      backgroundCardRef.current?.moveTo(x / 16, y / 16);
    };

    const onLeave = () => {
      foregroundCardRef.current?.moveTo(0, 0);
      midgroundCardRef.current?.moveTo(0, 0);
      backgroundCardRef.current?.moveTo(0, 0);
    };

    document.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);


  return (
    <section id="parallax-section" className="relative flex mt-xl min-h-[870px] items-center justify-start bg-gradient-to-br from-primary-900 to-secondary-900 rounded-4xl px-2xl">
      <div className="relative left-0 flex flex-col items-start justify-start gap-md">
        <h2 className="font-graphie text-text-0 text-xl justify-center items-center leading-[90%]">
          Paga en todas partes,
          <br/>
          de la forma que quieras
        </h2>
        <p className="font-open-sans text-text-0 w-1/2">
         Te tenemos completamente cubierto,Agrega tu tarjeta a tu Wallet, o bien paga con nuestras tarjetas físicas sin contacto en todos los comercios 🛍️.
        </p>
        <div className="flex gap-xs w-auto">
                 <CtaButton> Comienza ya </CtaButton>
        </div>
      </div>
      <div className="absolute right-0 bottom-40 flex h-1/2 w-1/2">
  <BackgroundCard ref={backgroundCardRef}/>
    <MidgroundCard ref={midgroundCardRef}/>
    <ForegroundCard ref={foregroundCardRef} />
      </div>
    </section>
  );
}
