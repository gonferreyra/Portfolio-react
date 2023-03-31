import React from "react";
import { projects } from "../../data/data";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>Proyectos</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          className={
            project.right ? "project__container right" : "project__container"
          }
        >
          <div className="project__img">
            <img src={project.projectImg} alt="project-img" />
          </div>
          <div className="project__info__container">
            <div className="project__name">
              <p>{project.name}</p>
            </div>
            <div className="project__description">
              <p>{project.description}</p>
            </div>
            <div className="project__links">
              <button>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Ver Proyecto
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
