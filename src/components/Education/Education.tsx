import React from "react";
import logoNucba from "../../assets/nucba-logo.png";
import LogoISPC from "../../assets/Isologotipo_ISPC_blanco-transparente-300x200.png";
import AluraLogo from "../../assets/alura-logo.1647533644.svg";

const Education = () => {
  return (
    <div id="education" className="education">
      <h2>Educacion</h2>
      <div className="education__boxes">
        <div className="education__container">
          <div className="education__box">
            <div className="education__header__btn">
              <span className="dot1"></span>
              <span className="dot2"></span>
              <span className="dot3"></span>
            </div>
            <div className="education__header__direction">
              <p>ispc.edu.ar</p>
            </div>
          </div>
          <div className="education__content">
            <div className="education__content__title">
              <h2>Tecnicatura en Desarrollo Web</h2>
            </div>
            <div className="education__content__img">
              <img src={LogoISPC} alt="logo" />
            </div>
            <div className="education__content__info">
              <p>En curso</p>
            </div>
          </div>
        </div>
        <div className="education__container">
          <div className="education__box">
            <div className="education__header__btn">
              <span className="dot1"></span>
              <span className="dot2"></span>
              <span className="dot3"></span>
            </div>
            <div className="education__header__direction">
              <p>nucba.com</p>
            </div>
          </div>
          <div className="education__content">
            <div className="education__content__title short">
              <h2>Full Stack Bootcamp</h2>
            </div>
            <div className="education__content__img">
              <img src={logoNucba} alt="logo" />
            </div>
            <div className="education__content__info">
              <p>2021 - 2022</p>
            </div>
          </div>
        </div>
        <div className="education__container">
          <div className="education__box">
            <div className="education__header__btn">
              <span className="dot1"></span>
              <span className="dot2"></span>
              <span className="dot3"></span>
            </div>
            <div className="education__header__direction">
              <p>aluracursos.com</p>
            </div>
          </div>
          <div className="education__content">
            <div className="education__content__title short">
              <h2>FrontEnd Bootcamp</h2>
            </div>
            <div className="education__content__img">
              <img src={AluraLogo} alt="logo" />
            </div>
            <div className="education__content__info">
              <p>2022 - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
