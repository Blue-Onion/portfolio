"use client";
import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

const Keyboard = () => {
    const [hoveredKey, setHoveredKey] = useState(null);
  const splineRef = useRef();

  function onLoad(splineApp) {
    splineRef.current = splineApp;
  }

  function handleHover(e) {
    if (e.target.name && e.target.name.startsWith("key")) {
      setHoveredKey(e.target.name);
    } else {
      setHoveredKey(null);
    }
  }

  return (
    <div className="w-full h-full  ">
        <Spline
        className=""
          scene="assets/aditya_copy.spline"
          onLoad={onLoad}
          onSplineMouseHover={handleHover}
        />

        {hoveredKey && (
          <div className="hover-indicator mt-4 p-4 bg-black text-white rounded-lg">
            Currently hovering: {hoveredKey.replace("key_", "").replace("_", " ")}
          </div>
        )}
      </div>
  )
}

export default Keyboard