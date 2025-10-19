'use client';
import Spline from '@splinetool/react-spline';

export default function Robo() {
  return (
    <mai className="w-screen h-screen flex">
      <div className="w-1/2  overflow-hidden relative">
        <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] overflow-hidden">
          <Spline scene="https://prod.spline.design/0FmzagSxHExthxG8/scene.splinecode"/>
        </div>
      </div>
    </mai>
  );
}
