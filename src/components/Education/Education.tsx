import React from "react";
import logoNucba from "../../assets/nucba-logo.png";

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
              <p>nucba.com</p>
            </div>
          </div>
          <div className="education__content">
            <div className="education__content__title">
              <h2>Full Stack Bootcamp</h2>
            </div>
            <div className="education__content__img">
              <img src={logoNucba} alt="logo" />
            </div>
            <div className="education__content__info">
              {/* <p>hasjdhajdhsoahsd ashidajkhsdk akjhsd ajkd</p> */}
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
            <div className="education__content__title">
              <h2>Full Stack Bootcamp</h2>
            </div>
            <div className="education__content__img">
              <img src={logoNucba} alt="logo" />
            </div>
            <div className="education__content__info">
              {/* <p>hasjdhajdhsoahsd ashidajkhsdk akjhsd ajkd</p> */}
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
            <div className="education__content__title">
              <h2>Full Stack Bootcamp</h2>
            </div>
            <div className="education__content__img">
              <img src={logoNucba} alt="logo" />
            </div>
            <div className="education__content__info">
              {/* <p>MERN Stack</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
