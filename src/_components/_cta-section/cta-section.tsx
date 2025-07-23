"use client"
import React, { useEffect, useRef } from "react";
import { CtaButton } from "../_ui/_buttons/cta-button";
import { useMediaQuery } from "react-responsive";

export default function CtaSection() {


  return (
    <section className="relative py-2xl px-md md:px-2xl flex flex-col md:flex-row mt-xl h-screen md:h-[867px] items-center justify-start md:justify-between bg-gradient-to-br from-neutral-900 to-primary-900 md:rounded-4xl">
      <div className="relative left-0 flex flex-col items-center md:items-start justify-start gap-md">
        <h2 className="font-graphie text-text-0 text-lg md:text-xl text-center md:text-start leading-[90%]">
          Paga en todas partes,
          <br/>
          de la forma que quieras
        </h2>
        <p className="font-open-sans text-center md:text-start text-text-0 w-full md:w-1/2">
         Te tenemos completamente cubierto,Agrega tu tarjeta a tu Wallet, o bien paga con nuestras tarjetas físicas sin contacto en todos los comercios 🛍️.
        </p>
        <div className="flex gap-xs w-auto">
                 <CtaButton variant="secondary"> Comienza ya </CtaButton>
        </div>
      </div>
    </section>
  );
}
