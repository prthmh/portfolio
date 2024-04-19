import React from "react";
import projects from "../../constants/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex justify-start w-full flex-col gap-2 mt-8">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
