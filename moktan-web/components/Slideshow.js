import { Box } from "@mui/material";
import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../styles/Slide.module.css";

export default function Slideshow() {
  //Array of Images
  const images = [
    "images/Image1.jpg",
    "images/Image2.jpg",

    "images/Image5.jpg",
  ];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: false,
    scale: 1.2,

    duration: 5000,
    transitionDuration: 500,
    infinite: true,

    prevArrow: (
      <div style={{ width: "18px", marginRight: "-18px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="gray"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "18px", marginLeft: "-18px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="gray"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };
  return (
    <Box sx={{ width: "100vw", justifyContent: "center", marginTop: "0.6rem" }}>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className={styles.contBox}>
            <img className={styles.box} src={each} />
          </div>
        ))}
      </Zoom>
    </Box>
  );
}
