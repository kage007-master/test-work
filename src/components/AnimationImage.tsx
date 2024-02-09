"use client";

import Image, { type StaticImageData } from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top bottom-=40%",
            end: "bottom center",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  return (
    <Image
      src={src}
      alt={alt}
      ref={imageRef}
      className="w-full opacity-0"
      width={500}
      height={40}
    />
  );
}
