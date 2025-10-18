'use client';
import Spline from '@splinetool/react-spline';

export default function Robo() {
  return (
    <main>
      <div className="w-screen h-screen overflow-hidden relative">
        <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] overflow-hidden">
          <Spline scene="https://prod.spline.design/0FmzagSxHExthxG8/scene.splinecode"/>
        </div>
      </div>
    </main>
  );
}
