"use client";
import React, { forwardRef, useRef, useImperativeHandle } from "react";
import Image from "next/image";
import gsap from "gsap";

// eslint-disable-next-line react/display-name
const MidgroundCard = forwardRef((_props, ref) => {
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
        id="card-2"
        src={"/images/card2.png"}
        alt="teal credit card in middle"
        width={550}
        height={403}
        className="absolute bottom-25 right-70 z-[2]"
      />

  );
});

export default MidgroundCard;
