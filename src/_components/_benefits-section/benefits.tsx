import { benefitCardData } from "@/_lib/benefit-cards";
import React from "react";
import BenefitCard from "./benefit-card";

export default function Benefits() {
  return (
    <section className="relative flex flex-col my-xl h-full w-full items-center md:justify-start md:items-center gap-xl px-lg md:px-2xl py-xl">
        <div className="flex flex-col justify-center gap-md">
      <h2 className="font-graphie text-lg md:text-xl text-center md:text-start leading-[100%]">
        Conoce los beneficios de tepago
      </h2>
      <p className="text-center md:text-start">
        Tepago te entrega un sin fin de motivos para cambiarte: conoce nuestros
        beneficios acá: 👇
      </p>
      </div>
      <div className="flex flex-col gap-lg md:flex-row w-full">
      {
        benefitCardData.map(item => <BenefitCard key={item.id} title={item.title} image={item.image} description={item.description}/>)
      }
      </div>
    </section>
  );
}
