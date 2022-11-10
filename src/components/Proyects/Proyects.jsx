import React, { useState } from "react";
import s from "./Proyects.module.css";
import { SliderDate } from "./slider";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
const Proyects = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handleNext = (e) => {
    e.preventDefault();
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  return (
    <div className={s.container} id="projects">
      <div className={s.cardContainer}>
        <BsArrowLeftCircleFill className={s.leftArrow} onClick={handlePrev} />
        <BsArrowRightCircleFill className={s.rightArrow} onClick={handleNext} />
        {SliderDate?.map((e, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  <div className={s.overlaycontainer}>
                    <div className={s.overlay}>
                      <h1 className={s.info}>{e.tittle}</h1>
                      <p className={s.info}>
                        {e.description ? e.description : null}
                      </p>
                    </div>
                    <img className={s.cardImage} src={e.image} alt="a" />
                  </div>
                  <div className={s.go}>
                    <a href={e.repo} Target="BLANK">
                      <AiFillGithub size="30px" />
                    </a>
                    <a href={e.deploy} Target="BLANK">
                      <AiOutlineLink size="30px" />
                    </a>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Proyects;
