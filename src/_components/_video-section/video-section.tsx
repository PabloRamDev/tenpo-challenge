"use client";
import React, { useEffect, useRef } from "react";
import { iphoneimages } from "@/_lib/image-sequence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CtaButton } from "../_ui/_buttons/cta-button";

export default function VideoSection() {
  const videoSequenceTriggerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");

      if (!canvas || !context) return;

      canvas.width = 851;
      canvas.height = 1200;

      const frameCount = iphoneimages.length;
      const currentFrame = (index: number) => iphoneimages[index];

      const images: HTMLImageElement[] = [];
      const iphone = { frame: 0 };

      let imagesLoaded = 0;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i).src;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frameCount) {
            initScrollTrigger(); // Start animation only after all images are loaded
            updateImage();
          }
        };
        img.onerror = () => {
          console.error(`Image failed to load: ${img.src}`);
        };
        images.push(img);
      }

      function updateImage() {
        context?.clearRect(0, 0, canvas.width, canvas.height);
        context?.drawImage(images[iphone.frame], 0, 0);
      }

      function initScrollTrigger() {
        gsap.to(iphone, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: videoSequenceTriggerRef.current,
            start: "center center",
            end: `+=${window.innerHeight - 88 * 3}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
          onUpdate: updateImage,
        });

        gsap.to("#circle2" , {
          x: "200%",
        })
      }
    },
    { scope: videoSequenceTriggerRef }
  );

  return (
    <section
      className="relative h-full w-full min-h-screen"
    >
      <div id="video-section" ref={videoSequenceTriggerRef} className="relative h-1/2 md:h-[867px] w-full flex flex-col md:flex-row md:py-0 items-start justify-start md:items-center gap-lg">
      <div className="relative top-[2%] md:top-0 flex flex-col h-auto justify-start items-center md:items-start gap-xs px-lg md:px-2xl pt-2xl-">
        <h2 className="font-graphie text-text-900 text-lg md:text-xl text-center md:text-start leading-[90%]">
          nueva tepago app
        </h2>
        <p className="text-center md:text-start">
          Lleva tepago contigo a todos lados: administra tu cuenta. 
          La libertad financiera nunca fue tan fácil 💸.
        </p>

        <CtaButton>Descargar</CtaButton>
      </div>

      <div className="relative top-0 transform  md:translate-x-none bg-primary-400 rounded-full md:right-0 justify-self-end h-auto w-[100%] md:w-auto md:h-full md:bg-radial aspect-square ">
        <canvas
          className="absolute top-1/2 left-1/2 h-[500px] md:h-[1000px] w-auto -translate-x-[45%] -translate-y-[55%]"
          ref={canvasRef}
        />
      </div>
      </div>
           
    </section>
  );
}
