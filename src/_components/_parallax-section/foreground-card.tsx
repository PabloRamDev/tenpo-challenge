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

      <Image
      ref={el}
        id="card-1"
        src={"/images/card1.png"}
        alt="grend credit card in front"
        width={600}
        height={445}
        className="absolute bottom-0 right-1/2 md:right-90 z-[3]"
      />
  );
});

export default ForegroundCard;
