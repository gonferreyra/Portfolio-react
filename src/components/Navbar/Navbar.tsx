import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__desktop">
          <ul>
            <li>Projects</li>
            <li>dasdads</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="nav__icons">
          <AiFillLinkedin size={30} />
          <AiFillGithub size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
