import Keyboard from "./Keyboard";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" h-full p-6 lg:min-h-screen flex flex-col items-center text-center"
    >
      <h2 className="text-6xl  md:text-7xl lg:text-9xl gradient-title p-8">
        Skills
      </h2>

      <div className="w-full flex items-center  justify-center">
        <Keyboard />
      </div>
    </section>
  );
};

export default Skills;
