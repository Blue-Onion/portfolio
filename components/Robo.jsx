"use client";
import { Suspense, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Robo() {
  const splineContainer = useRef();
  const [splineApp, setSplineApp] = useState(null);

  const bypassLoading = () => {
    console.log("Spline loaded");
  };

  return (
    <div className="min-h-screen flex justify-center items-center md:justify-end">
      <div className="w-full h-full flex justify-center items-center lg:justify-end">
        <div className="flex justify-center items-center md:justify-end mt-12 md:mt-0">
          <div
            className="
              w-[320px] h-[320px]        /* bigger for mobile */
              sm:w-[400px] sm:h-[400px]  /* bigger for small tablets */
              md:w-[480px] md:h-[480px]  /* bigger for medium screens */
              xl:w-[560px] xl:h-[560px]
              2xl:w-[600px] 2xl:h-[600px]
            "
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Spline
                className="w-full h-full"
                ref={splineContainer}
                onLoad={(app) => {
                  setSplineApp(app);
                  bypassLoading();
                }}
                scene="/assets/robo.spline"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
