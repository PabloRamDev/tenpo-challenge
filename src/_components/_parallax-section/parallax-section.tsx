"use client";
import React, { useEffect, useRef } from "react";

import BackgroundCard from "./background-card";
import MidgroundCard from "./midground-card";
import ForegroundCard from "./foreground-card";
import { CtaButton } from "../_ui/_buttons/cta-button";
import { useMediaQuery } from "react-responsive";

interface cardRefElement extends HTMLElement {
  moveTo: (x: number, y: number) => void;
}
export default function ParallaxSection() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const foregroundCardRef = useRef<cardRefElement>(null);
  const midgroundCardRef = useRef<cardRefElement>(null);
  const backgroundCardRef = useRef<cardRefElement>(null);

  useEffect(() => {
    if (isMobile) {
      return;
    }
    const onMove = ({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }) => {
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      foregroundCardRef?.current?.moveTo(x / 4, y / 4);
      midgroundCardRef?.current?.moveTo(x / 8, y / 8);
      backgroundCardRef.current?.moveTo(x / 16, y / 12);
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
  }, [isMobile]);

  return (
    <section
      id="parallax-section"
      className="relative py-2xl px-md md:px-2xl flex flex-col md:flex-row h-screen md:h-[867px] items-center justify-start md:justify-between bg-gradient-to-br from-neutral-900 to-primary-900 md:rounded-4xl"
    >
      <div className="relative left-0 flex flex-col items-center md:items-start justify-start gap-md">
        <h2 className="font-graphie text-text-0 text-lg md:text-xl text-center md:text-start leading-[90%]">
          Paga en todas partes,
          <br />
          de la forma que quieras
        </h2>
        <p className="font-open-sans text-center md:text-start text-text-0 w-full md:w-1/2">
          Agrega tu tarjeta a tu Wallet en tu teléfono, o bien paga con nuestras
          tarjetas físicas sin contacto en todos los comercios 🛍️.
        </p>
        <div className="flex gap-xs w-auto">
          <CtaButton variant="secondary"> Comienza ya </CtaButton>
        </div>
      </div>
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 md:bottom-40 md:left-[70%] md:transform-none md:right-0 h-1/2 w-screen md:w-full">
        <BackgroundCard ref={backgroundCardRef} />
        <MidgroundCard ref={midgroundCardRef} />
        <ForegroundCard ref={foregroundCardRef} />
      </div>
    </section>
  );
}
