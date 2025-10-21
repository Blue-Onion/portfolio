import Robo from "@/components/Robo";
import SmoothScroll from "@/components/SmoothScroll";
import { Button } from "@/components/ui/button";
import { File, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4 sm:p-6 max-w-6xl 2xl:max-w-[1600px] mx-auto min-h-screen">
      <SmoothScroll>
        <section
          id="home"
          className="grid min-h-screen grid-cols-1 md:grid-cols-2 items-center"
        >
          {/* Left Section - Text */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col gap-2  items-center md:items-start max-w-lg xl:max-w-2xl">
              <span className="text-muted-foreground text-sm sm:text-base">
                Hi, I am
              </span>
              <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl xl:text-[8rem] font-extrabold ">
                Aditya Rawat
              </h1>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                DevOps Enthusiast
              </p>

              <div className="flex flex-col gap-3">
                <Button variant={"secondary"}>
                  <span className="flex">
                    <File className="w-5 h-5 mr-2" />
                    Resume
                  </span>
                </Button>
                <div className="flex gap-2">
                  <Link href={"https://github.com/Blue-Onion"}>
                    <Button variant={""}>
                      <span className="flex items-center justify-center">
                        <Github className="w-5 h-5 mr-2" />
                        Github
                      </span>
                    </Button>
                  </Link>
                  <Link href={""}>
                    <Button variant={""}>
                      <span className="flex items-center justify-center">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </span>
                    </Button>
                  </Link>

                  <Button variant={""}>
                    <span className="flex">
                      <File className="w-5 h-5 mr-2" />
                      Hire Me
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Robo */}
          <div className="flex justify-center items-center md:justify-end mt-12 md:mt-0">
            <div className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px] xl:w-[560px] xl:h-[560px] 2xl:w-[600px] 2xl:h-[600px]">
              <Robo />
            </div>
          </div>
        </section>
      </SmoothScroll>
    </main>
  );
}
