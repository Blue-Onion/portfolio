"use client";
import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Home from "@/components/Home";
import Robo from "@/components/Robo";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative p-4 sm:p-6 max-w-6xl 2xl:max-w-[1600px] mx-auto min-h-screen overflow-hidden">
      {/* Fullscreen loader */}
      {!loaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <p className="text-white text-lg animate-pulse">Loading robot...</p>
        </div>
      )}

      <SmoothScroll>
        {/* Robo in the background */}
        <div className="fixed inset-0 -z-10">
          <Robo onReady={() => setLoaded(true)} />
        </div>

        {/* Main content */}
        <Home />
      </SmoothScroll>
    </main>
  );
}
