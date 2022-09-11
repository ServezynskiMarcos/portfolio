import React from "react";
import bootstrap from "./svg/bootstrap.svg";
import css from "./svg/css.svg";
import html from "./svg/html.svg";
import javascript from "./svg/javascript.svg";
import nodejs from "./svg/nodejs.svg";
import react from "./svg/react.svg";
import redux from "./svg/redux.svg";
import sass from "./svg/sass.svg";
import sequelize from "./svg/sequelize.svg";
import s from "./Technologies.module.css";
const Technologies = () => {
  return (
    <div className={s.container} id="technologies">
      <div className={s.grid}>
        <div className={s.label}>
          <img src={react} alt="react" />
          <p>React</p>
        </div>
        <div className={s.label}>
          <img src={redux} alt="redux" />

          <p>Redux</p>
        </div>
        <div className={s.label}>
          <img src={javascript} alt="javascript}" />

          <p>JavaScript</p>
        </div>
        <div className={s.label}>
          <img src={nodejs} alt="nodejs" />

          <p>Nodejs</p>
        </div>
        <div className={s.label}>
          <img src={html} alt="html" />

          <p>Html</p>
        </div>
        <div className={s.label}>
          <img src={css} alt="css" />

          <p>Css</p>
        </div>
        <div className={s.label}>
          <img src={sass} alt="sass" />

          <p>Sass</p>
        </div>
        <div className={s.label}>
          <img src={bootstrap} alt="bootstrap" />

          <p>Bootstrap</p>
        </div>
        <div className={s.label}>
          <img src={sequelize} alt="sequelize" />

          <p>Sequelize</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
