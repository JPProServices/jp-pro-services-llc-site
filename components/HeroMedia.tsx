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
  const pausedByUser = useRef(false);
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      pausedByUser.current = false;
      video.play().catch(() => {});
      setPlaying(true);
    } else {
      pausedByUser.current = true;
      video.pause();
      setPlaying(false);
    }
  };

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
      if (entry.isIntersecting && !pausedByUser.current) video.play().catch(() => {});
      else if (!entry.isIntersecting) video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <>
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
      {src ? (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className="absolute bottom-4 right-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75"
        >
          {playing ? (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5h3v14H7zM14 5h3v14h-3z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      ) : null}
    </>
  );
}
