import React from "react";
import Image from "../../assets/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png";
import Project1 from "../../assets/react1.png";
import Landing from "../../assets/landing1.png";
import Hangman from "../../assets/ahorcado.png";
import EcommerceJS from "../../assets/ecommerceJs.png";
import Decrypter from "../../assets/decripter.png";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="project__container">
        <div className="project__img">
          <img src={Project1} alt="project-img" />
        </div>
        <div className="project__info__container">
          <div className="project__name">
            <p>Shoes Ecommerce</p>
          </div>
          <div className="project__description">
            <p>
              Proyecto Full Stack, front-end realizado con React y Redux,
              back-end con NodeJS, Express y MongoDB.-
            </p>
          </div>
          <div className="project__links">
            <a
              href="https://github.com/gonferreyra/MERN-ecommerce"
              target="_blank"
              rel="noreferrer"
            >
              <p>Ver proyecto</p>
            </a>
          </div>
        </div>
      </div>
      <div className="project__container right">
        <div className="project__img">
          <img src={Landing} alt="project-img" />
        </div>
        <div className="project__info__container">
          <div className="project__name">
            <p>Crypto Landing Web</p>
          </div>
          <div className="project__description">
            <p>Landing page para trabajo integrador de HTML y CSS.</p>
          </div>
          <div className="project__links">
            <a
              href="https://github.com/gonferreyra/landing-crypto"
              target="_blank"
              rel="noreferrer"
            >
              <p>Ver proyecto</p>
            </a>
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="project__img">
          <img src={Hangman} alt="project-img" />
        </div>
        <div className="project__info__container">
          <div className="project__name">
            <p>Hangman</p>
          </div>
          <div className="project__description">
            <p>
              Juego del ahorcado, realizado como practica con HTML, CSS y
              Javascript.-
            </p>
          </div>
          <div className="project__links">
            <a
              href="https://github.com/gonferreyra/Alura-Challenge2-Ahorcado"
              target="_blank"
              rel="noreferrer"
            >
              <p>Ver proyecto</p>
            </a>
          </div>
        </div>
      </div>
      <div className="project__container right">
        <div className="project__img">
          <img src={EcommerceJS} alt="project-img" />
        </div>
        <div className="project__info__container">
          <div className="project__name">
            <p>Ecommerce CRUD</p>
          </div>
          <div className="project__description">
            <p>
              Proyecto realizado integramente con Javascript Vainilla, teniendo
              funcionalidad completa CRUD con JS.-
            </p>
          </div>
          <div className="project__links">
            <a
              href="https://github.com/gonferreyra/AluraGeek-ecommerce-CRUD"
              target="_blank"
              rel="noreferrer"
            >
              <p>Ver proyecto</p>
            </a>
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="project__img">
          <img src={Decrypter} alt="project-img" />
        </div>
        <div className="project__info__container">
          <div className="project__name">
            <p>Text Encrypter/Decryptor</p>
          </div>
          <div className="project__description">
            <p>
              Proyecto encriptador y desencriptador de texto. Logica con JS.-
            </p>
          </div>
          <div className="project__links">
            <a
              href="https://github.com/gonferreyra/Alura-Challenge1-Encriptador"
              target="_blank"
              rel="noreferrer"
            >
              <p>Ver proyecto</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
