import SmoothScroll from "@/components/SmoothScroll";
import Home from "@/components/Home";
import Robo from "@/components/Robo";

export default function page() {
  return (
    <main className="relative p-4 sm:p-6 max-w-6xl 2xl:max-w-[1600px] mx-auto min-h-screen overflow-hidden">
      <SmoothScroll>
        <div className="absolute inset-0 -z-10">
          <Robo />
        </div>
        <Home />
      </SmoothScroll>
    </main>
  );
}
