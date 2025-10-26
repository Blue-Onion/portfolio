import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (project.images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [project.images.length, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Card className="w-full max-w-lg mx-auto  shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group">
      {/* Image Carousel */}
      <CardHeader
        className="p-0 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Carousel className="w-full">
          <CarouselContent
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            className="flex transition-transform duration-500 ease-in-out"
          >
            {project.images.map((image, index) => (
              <CarouselItem key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          {project.images.length > 1 && (
            <>
              <CarouselPrevious
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-white/90 hover:bg-white shadow-lg border-0 text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === 0 ? project.images.length - 1 : prev - 1
                  )
                }
              />
              <CarouselNext
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-white/90 hover:bg-white shadow-lg border-0 text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                onClick={() =>
                  setCurrentIndex((prev) =>
                    prev === project.images.length - 1 ? 0 : prev + 1
                  )
                }
              />
            </>
          )}
        </Carousel>

        {/* Modern Indicator Dots */}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Tech Badge Overlay */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            Project
          </span>
        </div>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-6 md:p-7 lg:p-8">
        <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 md:mb-4">
          {project.title}
        </CardTitle>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed md:leading-loose mb-4 md:mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-5">
          {project.frontend.map((tech) => (
            <span
              key={tech}
              className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-xl text-xs font-semibold border border-blue-200/50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {tech}
            </span>
          ))}
          {project.backend?.map((tech) => (
            <span
              key={tech}
              className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-3 py-1.5 rounded-xl text-xs font-semibold border border-green-200/50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="flex gap-3 md:gap-4 p-6 md:p-7 lg:p-8 pt-0">
        {project.github && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 md:flex-none items-center gap-2 h-11 px-4 rounded-xl border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:scale-105 transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">GitHub</span>
            </Link>
          </Button>
        )}
        {project.liveDemo && (
          <Button asChild size="sm" className="">
            <Link
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Live Demo</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
