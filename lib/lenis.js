"use client";

import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
};
