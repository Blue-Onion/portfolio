"use client";
import { Suspense, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Robo() {
  const splineContainer = useRef();
  const [splineApp, setSplineApp] = useState(null);

  const bypassLoading = () => {
    // Add your loading bypass logic here
    console.log('Spline loaded');
  };

  return (
    <div className='w-full h-full'>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
className='w-full h-full'
          ref={splineContainer}
          onLoad={(app) => {
            setSplineApp(app);
            bypassLoading();
          }}
          scene="/assets/robo.spline"
        />
      </Suspense>
    </div>
  );
}