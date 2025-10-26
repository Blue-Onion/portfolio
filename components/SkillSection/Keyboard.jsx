"use client";
import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

// 🧠 Fun skill data
const skills = {
  javascript: "The OG of web magic — brings websites to life with logic and interactivity.",
  python: "Clean, powerful, and chill — the go-to for AI, automation, and backend brains.",
  html: "The skeleton of the web — it gives every page its structure and bones.",
  css: "The web’s fashion designer — handles colors, layouts, and all the pretty stuff.",
  react: "The cool kid of UI libraries — builds fast, snappy, and reusable components.",
  nextjs: "React’s smarter sibling — handles SEO, server rendering, and routing like a pro.",
  tailwind: "The utility boss — helps you style anything fast without writing custom CSS.",
  gsap: "The animation wizard — makes your site move smoother than butter.",
  node: "JavaScript but on the server — makes backend development a piece of cake.",
  express: "Node’s speedy framework — helps you build APIs without the headache.",
  npm: "Your project’s app store — installs everything from libraries to chaos.",
  postgres: "The database with class — reliable, structured, and open-source goodness.",
  docker: "Packs your app into neat little containers so it runs anywhere, flawlessly.",
  github: "The coder’s social media — where commits, collabs, and chaos live together.",
  git: "Keeps your code history safe — like a time machine for developers.",
  k8s: "Short for Kubernetes — the container overlord that automates deployments.",
  mongodb: "The flexible data hoarder — stores your info in chill JSON-like docs."
};

const Keyboard = () => {
  const [hoveredKey, setHoveredKey] = useState(null);
  const splineRef = useRef(null);

  const onLoad = (splineApp) => {
    splineRef.current = splineApp;

    // 🎹 Add event listeners for interactions
    splineApp.addEventListener("mouseHover", (e) => {
      if (e.target && e.target.name) {
        const keyName = e.target.name.toLowerCase();
        if (skills[keyName]) setHoveredKey(keyName);
        else setHoveredKey(null);
      } else {
        setHoveredKey(null);
      }
    });

    splineApp.addEventListener("mouseDown", (e) => {
      if (e.target && e.target.name) console.log("Pressed:", e.target.name);
    });

    splineApp.addEventListener("mouseUp", (e) => {
      if (e.target && e.target.name) console.log("Released:", e.target.name);
    });
  };

  // Capitalize first letter helper
  const formatTitle = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="relative  lg:min-h-screen w-full flex flex-col items-center justify-center">
      <Spline
        scene="assets/aditya_copy.spline"
        onLoad={onLoad}
        className="w-full md:scale-none scale-125  my-32 lg:my-0 h-full"
        style={{ background: "none" }}
      />

      {hoveredKey && (
        <div className="absolute top-0 left-0  max-w-md flex items-start justify-start flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-5xl gradient-title font-bold px-2">
            {formatTitle(hoveredKey)}
          </h2>
          <p className="text-sm sm:text-base text-left text-gray-200">
            {skills[hoveredKey]}
          </p>
        </div>
      )}
    </div>
  );
};

export default Keyboard;
