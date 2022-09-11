import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={s.container}>
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#technologies">Skills</a>
      <a href="#aboutMe">About Me</a>
      <a href="#contact">Contact Me</a>
    </div>
  );
};

export default Nav;
