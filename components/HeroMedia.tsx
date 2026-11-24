"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  poster: string;
  posterAlt?: string;
  // Muted, looping clips. Leave unset until the client's footage is encoded.
  videoSrc?: string;
  mobileVideoSrc?: string;
};

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

function shouldSkipVideo() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  if (connection?.saveData) return true;
  return connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g" || connection?.effectiveType === "3g";
}

export default function HeroMedia({ poster, posterAlt = "", videoSrc, mobileVideoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  // Load the video only after the page has finished loading, so the poster stays the LCP image.
  useEffect(() => {
    if (!videoSrc || shouldSkipVideo()) return;
    const pick = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setSrc(isMobile && mobileVideoSrc ? mobileVideoSrc : videoSrc);
    };
    if (document.readyState === "complete") pick();
    else window.addEventListener("load", pick, { once: true });
    return () => window.removeEventListener("load", pick);
  }, [videoSrc, mobileVideoSrc]);

  // Pause the clip while it is off screen to save battery.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div aria-hidden={!posterAlt} className="hero-fade absolute inset-0 -z-10">
      <Image src={poster} alt={posterAlt} fill priority sizes="100vw" className="object-cover" />
      {src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75" />
    </div>
  );
}
