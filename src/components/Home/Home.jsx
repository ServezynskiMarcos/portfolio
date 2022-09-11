import React from "react";
import About from "../About/About.jsx";
import Contact from "../Contact/Contact.jsx";
import Nav from "../Nav/Nav.jsx";
import Proyects from "../Proyects/Proyects.jsx";
import Technologies from "../Technologies/Technologies.jsx";
import s from "./Home.module.css";
import { SliderDate } from "../Proyects/slider";
import AboutMe from "../AboutMe/AboutMe.jsx";

const Home = () => {
  return (
    <div className={s.container}>
      <Nav />
      <About />
      <Proyects slides={SliderDate}/>
      <Technologies />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Home;
