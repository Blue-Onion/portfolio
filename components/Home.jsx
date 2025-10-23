import { Button } from "@/components/ui/button";
import { File, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Robo from "./Robo";

const Home = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen  items-start lg:items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 lg:pt-0"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Content Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="flex flex-col gap-3 sm:gap-4 max-w-2xl">
              <span className="text-muted-foreground text-sm sm:text-base lg:text-lg">
                Hi, I am
              </span>
              <h1 className="text-white px-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold leading-tight">
                Aditya Rawat
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg xl:text-xl">
                DevOps Enthusiast
              </p>

              {/* Buttons Section */}
              <div className="flex flex-col gap-3 lg:w-sm">
                {/* Resume Button */}
                <Link target="_blank " href={"https://drive.google.com/file/d/1KeoiaWYRFC-f8Nt8UTTLrDbsD4DPXZDE/view?usp=sharing"}>
                <Button
                  variant=""
                  className="w-full  px-6 py-3 text-sm sm:text-base"
                  >
                  <span className="flex items-center justify-center">
                    <File className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Resume
                  </span>
                </Button>
                  </Link>

                {/* Social Links */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
                  {/* GitHub */}
                  <Link target="_blank "
                    href="https://github.com/Blue-Onion"
                    className="w-full "
                  >
                    <Button
                      variant="outline"
                      className="w-full  flex items-center justify-center px-5 py-3 text-sm sm:text-base font-semibold tracking-tight "
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="">GitHub</span>

                    </Button>
                  </Link>

                  {/* LinkedIn */}
                  <Link target="_blank "
                    href="https://www.linkedin.com/in/aditya-singh-rawat-0a7416326/"
                    className="w-full "
                  >
                    <Link target="_blank " href={"https://www.linkedin.com/in/aditya-singh-rawat-0a7416326/"}/>
                    <Button
                      variant="outline"
                      className="w-full  flex items-center justify-center px-5 py-3 text-sm sm:text-base font-semibold tracking-tight "
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      <span className="">LinkedIn</span>

                    </Button>
                  </Link>

                  {/* Hire Me */}
                 
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Home;
