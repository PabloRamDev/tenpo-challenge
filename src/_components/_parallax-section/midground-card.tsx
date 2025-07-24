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
    <div ref={el}   className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-[2] w-[350px] md:w-auto md:bottom-25 md:left-auto md:transform-none md:right-[15%] 2xl:right-[25%]">
      <Image
        id="card-2"
        src={"/images/card2.png"}
        alt="teal credit card in middle"
        width={550}
        height={403}
        className="w-[350px] 2xl:w-full"
      />
    </div>
  );
});

export default MidgroundCard;
