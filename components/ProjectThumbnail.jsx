import { Card } from "@/components/ui/card";

const ProjectThumbnail = ({ image,title }) => {
  return (
    <div className="w-full flex flex-col max-w-sm rounded-lg overflow-hidden relative">
      <div className="relative w-full aspect-[8/5]">
        {/* Project image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Bottom-only black gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none">
        

        {/* Project title over gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 flex items-end p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
