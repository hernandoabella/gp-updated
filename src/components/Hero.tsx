'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Hero() {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}