import { projects } from "@/data/Project";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectCard from "./projectCard";

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <div className="flex justify-center items-center mb-4 w-full flex-col text-center">
        <h2 className="text-5xl md:text-7xl lg:text-9xl gradient-title">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 my-6 w-full">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger>
              <ProjectThumbnail
                title={project.title}
                image={project.images[0]}
              />
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                {/* Hidden title for accessibility */}
                <DialogTitle className="sr-only">{project.title}</DialogTitle>

                {/* Optional description for screen readers */}
                <DialogDescription className="sr-only">
                  View details about the {project.title} project.
                </DialogDescription>
              </DialogHeader>

              <ProjectCard project={project} />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};

export default Project;
