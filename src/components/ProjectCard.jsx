import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({
  id,
  name,
  live_link,
  github,
  tech_stack,
  description,
}) => {
  return (
    <div className=" bg-neutral-800 p-4 rounded-md border-2 border-transparent hover:border-blue-400 hover:border-opacity-70 transition duration-500 cursor-pointer flex flex-col justify-between gap-3">
      <h3 className=" text-lg font-semibold">{name}</h3>
      <p className=" text-sm text-neutral-400">{description}</p>

      <div className="flex gap-1 flex-wrap">
        {tech_stack.map((tech, i) => (
          <div
            key={i}
            className=" bg-neutral-700 rounded p-1 text-xs text-neutral-400 "
          >
            {tech}
          </div>
        ))}
      </div>

      {/* buttons */}
      <div className="flex w-full justify-between md:flex-col lg:flex-row">
        <a href={live_link} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center p-2 text-sm font-medium underline hover:text-blue-400 transition-all ease-in duration-200">
            Live Link <MdArrowOutward size={20} />
          </div>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <div className="flex items-cente p-2 text-sm font-medium underline hover:text-blue-400 transition-all ease-in duration-200">
            Source Code <MdArrowOutward size={20} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
