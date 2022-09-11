import React from "react";
import s from "./About.module.css";
import hacker from "./hacker.svg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const About = () => {
  return (
    <div className={s.container} id="home">
      <div className={s.div1}>
        <div className={s.icons}>
          <a href="https://github.com/ServezynskiMarcos" Target="BLANK">
            <AiFillGithub size="30px" />
          </a>
          <a href="https://www.instagram.com/m.servezynski/" Target="BLANK">
            <AiFillInstagram size="30px" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-servezynski-442b7721b/"
            Target="BLANK"
          >
            <AiFillLinkedin size="30px" />
          </a>
        </div>
        <div className={s.present}>
          <h2>Marcos Servezynski</h2>
          <p className={s.scrolling} style={{ fontWeight: "lighter" }}>Front-end Developer</p>
        </div>
      </div>
      <img src={hacker} alt="Logo" />
    </div>
  );
};

export default About;
