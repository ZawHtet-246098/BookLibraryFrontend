import React from "react";
import "./slider.css";
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";

export default function BtnSlider({ direction, moveSlide }) {
  //   console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? <ArrowRight /> : <ArrowLeft />}
    </button>
  );
}
