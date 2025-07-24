"use client";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import Image from "next/image";
import gsap from "gsap";


export type BenefitCardRef = {
  moveTo: (x: number, y: number) => void;
  el: HTMLDivElement | null;
};
type BenefitCardProps = {
  id?: string;
  title: string;
  description: string;
  image: string;
};

export type benefitCardProps = {
    id: string
    title: string,
    image: string,
    description: string,

}
// eslint-disable-next-line react/display-name
const BenefitCard = forwardRef<BenefitCardRef, BenefitCardProps>(
  ({ title, description, image, id }, ref) => {
    const el = useRef<HTMLDivElement | null>(null);

useImperativeHandle(
  ref,
  () => ({
    moveTo(x: number, y: number) {
      if (el.current) {
        gsap.to(el.current, { x, y });
      }
    },
    el: el.current, 
  }),
  []
);

  return (
    <div
      ref={el}
      className="relative flex flex-col w-full items-center justify-start gap-md md:gap-xl bg-primary-400 rounded-4xl p-lg md:py-xl aspect-square overflow-clip"
    >
      <div className="flex flex-col gap-xs">
        <h3 className="text-neutral-900 font-open-sans font-bold text-md md:text-lg text-center leading-[90%]">
          {title}
        </h3>
        <p className="w-full text-center">{description}</p>
      </div>

      <div className="absolute bottom-[-25%] md:bottom-[-15%] w-[250px] md:w-[250px] h-auto">
        <Image
          id={id}
          src={image}
          alt="benefit card image"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
    </div>
  );
});


export default BenefitCard;
