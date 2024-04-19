import { skills } from "../../constants";

const TechStack = () => {
  return (
    <div className=" mt-10">
      <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-neutral-800 p-2 rounded-md border-2 border-transparent hover:border-blue-400 hover:border-opacity-70 transition duration-500 cursor-pointer"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
