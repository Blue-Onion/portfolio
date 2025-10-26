"use client";
import { useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

const Keyboard = () => {
  const [hoveredKey, setHoveredKey] = useState(null);
  const splineRef = useRef();

  const onLoad = (splineApp) => {
    splineRef.current = splineApp;
  };

  const handleHover = (e) => {
    if (e.target.name) {
      setHoveredKey(e.target.name);
    } else {
      setHoveredKey(null);
    }
  };
if(hoveredKey){
  console.log(hoveredKey);
  
}
  return (
    <div className="relative w-full flex flex-col items-center justify-center">

      <Spline
        scene="assets/aditya_copy.spline"
        onLoad={onLoad}
        onMouseOver={handleHover}
        className="w-full h-[full] scale-130 md:scale-none" 
        style={{ background: "none" }}
      />

      {/* Key Name Display */}
      {hoveredKey && (
        <div className="absolute top-5 text-white text-xl sm:text-2xl md:text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          {hoveredKey}
        </div>
      )}
    </div>
  );
};

export default Keyboard;
