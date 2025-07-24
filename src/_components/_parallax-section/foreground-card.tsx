"use client";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import Image from "next/image";
import gsap from "gsap";

// eslint-disable-next-line react/display-name
const ForegroundCard = forwardRef((_props, ref) => {
  const el = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x: number, y: number) {
          gsap.to(el.current, { x, y });
        },
      };
    },
    []
  );

  return (
    <div ref={el} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-[3] w-[400px] md:w-auto md:bottom-0 md:left-auto md:transform-none md:right-[20%] 2xl:right-[30%] " >
      <Image
        id="card-1"
        src={"/images/card1.png"}
        alt="grend credit card in front"
        width={600}
        height={445}
        className="w-[400px] 2xl:w-full"
      />
    </div>
  );
});

export default ForegroundCard;
