import React from "react";
import { Link } from "react-scroll";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__desktop">
          <ul>
            <li>
              <button>
                <Link to="education" smooth={true} duration={800}>
                  Educacion
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="projects" smooth={true} duration={1000}>
                  Proyectos
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="contact" smooth={true} duration={2000}>
                  Contacto
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <div className="nav__icons">
          <a href="https://www.linkedin.com/in/ferreyragonzalo/">
            <AiFillLinkedin
              style={{
                color: "White",
              }}
              size={30}
            />
          </a>
          <a href="https://github.com/gonferreyra">
            <AiFillGithub
              style={{
                color: "White",
              }}
              size={30}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
