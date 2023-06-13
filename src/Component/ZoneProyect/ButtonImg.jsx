import React, { useState } from "react";
import style from "./ButtonImg.module.css";

export const ButtonImg = ({ image }) => {
  const [imageIndex, setImageIndex] = useState(Math.floor(Math.random() * 4));

  function handlePrevClick() {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  }

  function handleNextClick() {
    setImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  }
  return (
    <>
      <img src={image[imageIndex]} alt="no fond" className={style.imgProyect} />
      <div className={style.nextPrevC} >
        <div onClick={handleNextClick} className={style.nextButton} >&lt;</div>
        <div onClick={handlePrevClick} className={style.prevButton}>&gt;</div>
      </div>
    </>
  );
};
