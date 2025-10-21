"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy?.();
  }, []);

  return <>{children}</>;
}
