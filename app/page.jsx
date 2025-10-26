"use client";
import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";

import Skills from "@/components/SkillSection/Skills";
import Home from "@/components/HomeSection/Home";
import Project from "@/components/ProjectSection/Project";
import Robo from "@/components/HomeSection/Robo";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <p className="text-white text-lg animate-pulse">Loading robot...</p>
        </div>
      )}

      <SmoothScroll>
        <div className="absolute inset-0 -z-10">
          <Robo onReady={() => setLoaded(true)} />
        </div>
        <main className="flex flex-col gap-20">
          <Home />
          <Skills />
          <Project />
        </main>
      </SmoothScroll>
    </>
  );
}
