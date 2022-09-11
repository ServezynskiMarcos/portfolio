import React from "react";
import s from "./AboutMe.module.css"
import img from "./yo.png"
const AboutMe = () => {
  return (
    <div id="aboutMe" className={s.container}>
      <p>
        Estudiante nato, me encanta aprender, soy una persona flexible, con
        excelentes habilidades analíticas de gestión de proyectos y de trabajo
        en equipo. <br></br>
        Me identifico como un líder de equipo, pero también me
        adapto a trabajar bajo el mando de otras personas.  <br></br>
        Buena predisposición
        a la hora de aprender algo nuevo, siempre tratando de incorporar conocimientos y buenas practicas. <br></br>
      </p>
      <div className={s.mask}>
      <img src={img} alt="yo" /></div>
    </div>
  );
};

export default AboutMe;
