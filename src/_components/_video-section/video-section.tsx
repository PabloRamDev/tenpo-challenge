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
        <section ref={videoSequenceTriggerRef} id="video-section" className="relative top-2xl flex my-xl h-[867px] items-center justify-between px-2xl">
      <div className="relative flex flex-col justify-center gap-xs">
        <h1 className="font-graphie text-xl justify-center items-center">
          Prueba tepago app 📱
        </h1>
        <p className="w-3/4">
   Lleva tepago contigo a todos lados: administra tu cuenta, realiza pagos y transferencias en una sola aplicación.
La libertad financiera nunca fue tan fácil 💸.
        </p>
        <div className="flex gap-xs w-3/4">
                 <CtaButton> Comienza ya </CtaButton>
        
        </div>
      </div>
      <div className="relative top-0 right-0 justify-self-end h-full bg-radial from-primary-300 to-primary-400 aspect-square rounded-3xl">
  
      <canvas  className="absolute top-1/2 left-1/2 transform h-[100%] -translate-x-[45%] -translate-y-[58%]" ref={canvasRef} />
 
      </div>


    </section>

        
  
  );
}
