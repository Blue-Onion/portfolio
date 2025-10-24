"use client";
import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Home from "@/components/Home";
import Robo from "@/components/Robo";
import Project from "@/components/Project";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Fullscreen loader */}
      {!loaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <p className="text-white text-lg animate-pulse">Loading robot...</p>
        </div>
      )}

      <SmoothScroll >
        {/* Robo in the background */}
        <div className="absolute inset-0 -z-10">
          <Robo onReady={() => setLoaded(true)} />
        </div>
        <main className="space-y-6">

        <Home />
        <Project/>
        </main>
      </SmoothScroll>
    </>
  );
}
