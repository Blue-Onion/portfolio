import Keyboard from "./Keyboard";

const Skills = () => {
  return (
    <section className="min-h-screen h-full p-4 grid place-items-center">
      <h2 className="text-5xl md:text-7xl lg:text-9xl gradient-title mb-8">
        Skills
      </h2>

      <div className="w-full h-ful grid place-items-center ">
        <Keyboard />
      </div>
    </section>
  );
};

export default Skills;
