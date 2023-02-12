import React from "react";
import projectImg from "../../assets/181b3bfce5f6c16c38e7fba579875067 1.png";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Proyectos</h2>
      <div className="project__container">
        <div className="project__img">
          <img src={projectImg} alt="project-img" />
        </div>
        <div className="project__name"></div>
        <div className="project__description"></div>
        <div className="project__links"></div>
      </div>
    </div>
  );
};

export default Projects;
