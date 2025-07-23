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
    <div ref={el}   className="absolute left-1/2 bottom-40 transform -translate-x-1/2 z-[1] w-[300px] md:w-auto md:left-auto md:transform-none md:bottom-50 md:right-50">
      <Image
        id="card-3"
        src={"/images/card3.png"}
        alt="green credit card in front"
        width={500}
        height={347}
      />
    </div>
  );
});

export default BackgroundCard;
