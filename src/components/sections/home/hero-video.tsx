"use client";

import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const HeroVideo = memo(function HeroVideo() {
  const [canAnimate, setCanAnimate] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setCanAnimate(!media.matches);
    const handleChange = () => setCanAnimate(!media.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0">
      <Image
        alt=""
        className="object-cover"
        fill
        preload
        sizes="100vw"
        src="/images/hero-video-poster.webp"
      />
      {canAnimate ? (
        <video
          autoPlay
          className={cn("hero-cinematic-video absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-700", ready && "opacity-100")}
          disablePictureInPicture
          loop
          muted
          onCanPlay={() => setReady(true)}
          playsInline
          poster="/images/hero-video-poster.webp"
          preload="auto"
        >
          <source src="/video/sn-group-hero-cinematic.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
});
