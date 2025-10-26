import Keyboard from "./Keyboard";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" gap-9 h-full p-6 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-6xl  md:text-7xl lg:text-9xl gradient-title p-8">
        Skills
      </h2>

      <div className="w-full">
        <Keyboard />
      </div>
    </section>
  );
};

export default Skills;
