import Image from "next/image";
import React from "react";
import CtaButton from "../_ui/_buttons/cta-button";

export default function Hero() {
  return (
    <section className="relative top-2xl flex mt-xl h-[648px] items-start justify-center">
      <Image
        src={"/images/hero-phone.png"}
        alt="Phone with tepago app"
        width={648}
        height={648}
        className="absolute top-0 left-0"
      />
      <div className="relative flex flex-col items-center justify-center gap-xs top-3xl">
        <h1 className="font-open-sans font-bold text-xl justify-center items-center">
          Una sola cuenta, sin cuentos
        </h1>
        <p>
          Compra, paga, ahorra y envía dinero sin cobros. Todo claro, sin
          cuentos.
        </p>
        <div className="flex gap-xs w-3/4">
          <CtaButton text="Comienza Ya!" isPrimary={true} />
          <CtaButton text="Pedir tarjeta física" isPrimary={false} />
        </div>
      </div>
       <Image
        src={"/images/moneybag.png"}
        alt="moneybag 3d emoji"
        width={250}
        height={250}
        className="absolute top-[10%] right-[10%]"
      />
        <Image
        src={"/images/pig.png"}
        alt="pig 3d emoji"
        width={402}
        height={402}
        className="absolute bottom-0 right-[10%]"
      />
    </section>
  );
}
