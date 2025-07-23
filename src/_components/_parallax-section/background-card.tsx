"use client";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import Image from "next/image";
import gsap from "gsap";

// eslint-disable-next-line react/display-name
const BackgroundCard = forwardRef((_props, ref) => {
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
        id="card-3"
        src={"/images/card3.png"}
        alt="green credit card in front"
        width={500}
        height={347}
        className="absolute right-50 bottom-50 z-[1]"
      />

  );
});

export default BackgroundCard;
