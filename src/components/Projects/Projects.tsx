import React from "react";
import projectImg from "../../assets/181b3bfce5f6c16c38e7fba579875067 1.png";
import Image from "../../assets/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project__container">
        <div className="project__img">
          <img src={Image} alt="project-img" />
        </div>
        <div className="project__info__container">
          <div className="project__name">
            <p>Nombre del proyecto</p>
          </div>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              dolores. Repudiandae fugiat reiciendis harum?
            </p>
          </div>
          <div className="project__links">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <p>Ver proyecto</p>
            </a>
          </div>
        </div>
      </div>
      <div className="project__container right">
        <div className="project__img">
          <img src={Image} alt="project-img" />
        </div>
        <div className="project__info__container">
          <div className="project__name">
            <p>Nombre del proyecto</p>
          </div>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              dolores. Repudiandae fugiat reiciendis harum?
            </p>
          </div>
          <div className="project__links">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <p>Ver proyecto</p>
            </a>
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="project__img">
          <img src={Image} alt="project-img" />
        </div>
        <div className="project__info__container">
          <div className="project__name">
            <p>Nombre del proyecto</p>
          </div>
          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              dolores. Repudiandae fugiat reiciendis harum?
            </p>
          </div>
          <div className="project__links">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <p>Ver proyecto</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
