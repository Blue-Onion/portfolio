"use client";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Robo({ onReady }) {
  const splineContainer = useRef();

  return (
    <div className="min-h-screen flex justify-center items-center md:justify-end">
      <div className="w-full h-full flex justify-center items-center lg:justify-end">
        <div className="flex justify-center items-center md:justify-end mt-12 md:mt-0">
          <div
            className="
              w-[320px] h-[320px]
              sm:w-[400px] sm:h-[400px]
              md:w-[480px] md:h-[480px]
              xl:w-[560px] xl:h-[560px]
              2xl:w-[600px] 2xl:h-[600px]
            "
          >
            <Spline
              className="w-full h-full"
              ref={splineContainer}
              scene="/assets/robo.spline"
              onLoad={() => {
                console.log("Spline loaded ✅");
                onReady?.(); // notify parent
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
