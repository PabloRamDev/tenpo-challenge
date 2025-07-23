"use client"
import React, { useEffect, useRef } from "react";
import { iphoneimages } from "@/_lib/image-sequence";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CtaButton } from "../_ui/_buttons/cta-button";


export default function VideoSection() {

  const videoSequenceTriggerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

    useGSAP(() => {
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
          end: `+=${window.innerHeight * 3}`,
          scrub: true,
          pin: true,
          markers: true,
        },
        onUpdate: updateImage,
      });
    }
  }, { scope: videoSequenceTriggerRef });

  return (
        <section ref={videoSequenceTriggerRef} id="video-section" className="relative flex flex-col md:flex-row my-xl md:h-[867px] w-full items-start justify-start md:items-center md:justify-between">
      <div className="relative md:top-0 flex flex-col justify-center items-start gap-xs px-lg md:px-2xl">
          <h2 className="font-graphie text-text-900 text-xl d:text-xl text-center md:text-start leading-[90%]">
          nueva tepago app
        </h2>
        <p className="text-center md:text-start" >
   Lleva tepago contigo a todos lados: administra tu cuenta, realiza pagos y transferencias en una sola aplicación.
La libertad financiera nunca fue tan fácil 💸.
        </p>
          
    <CtaButton>Descargar</CtaButton>

      </div>
      
   <div className="relative top-0 right-0 justify-self-end h-[700px] md:h-full w-full md:bg-radial from-primary-300 to-primary-400  md:aspect-square md:rounded-3xl">
  <canvas
    className="absolute top-1/2 left-1/2 h-full w-auto -translate-x-[45%] -translate-y-[58%]"
    ref={canvasRef}
  />


</div>


    </section>

        
  
  );
}
