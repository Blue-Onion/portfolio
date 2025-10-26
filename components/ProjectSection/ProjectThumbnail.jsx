import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const ProjectThumbnail = ({ image, title, githubLink, liveDemoLink }) => {
  return (
    <div className="w-full flex flex-col max-w-sm rounded-lg overflow-hidden relative">
      <div className="relative w-full aspect-[8/5]">
        {/* Project image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
        />

        {/* Top-right icons (always visible) */}
        <div className="absolute top-2 right-2 flex space-x-2">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent parent click
              className="bg-black bg-opacity-60 p-2 rounded-full text-white"
            >
              <Github size={16} />
            </Link>
          )}
          {liveDemoLink && (
            <Link
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent parent click
              className="bg-black bg-opacity-60 p-2 rounded-full text-white"
            >
              <ExternalLink size={16} />
            </Link>
          )}
        </div>

        {/* Bottom-only black gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Project title over gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 flex items-end p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
