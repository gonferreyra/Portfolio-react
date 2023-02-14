import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact__header">
        <p>Contactemos!</p>
      </div>
      <div className="contact__links">
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
      <div className="contact__mail">
        <p>mail@email.com</p>
      </div>
      <span> </span>
    </div>
  );
};

export default Contact;
