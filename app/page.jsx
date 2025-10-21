import Robo from "@/components/Robo";
import SmoothScroll from "@/components/SmoothScroll";
import { Button } from "@/components/ui/button";
import { File, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen max-w-6xl mx-auto min-h-screen ">
      <SmoothScroll>
        <section id="home" className="grid md:grid-cols-2 grid-cols-1  ">
          <div className="flex items-start mt-28 justify-center h-full w-full">
            <div className="flex flex-col justify-start p-5 gap-4  items-start">
              <span className="text-muted-foreground text-lg">Hi,I am </span>
              <h1 className="text-white text-5xl md:text-9xl font-semibold  h-full ">
                Aditya Rawat
              </h1>
              <p className="text-muted-foreground">Devops Enthusiast</p>
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
          <div className=" mt-32 flex items-end justify-center w-[600px] h-[600px] ">
            <div className="w-full h-full">

            <Robo />
            </div>
          </div>
        </section>
      </SmoothScroll>
    </main>
  );
}
