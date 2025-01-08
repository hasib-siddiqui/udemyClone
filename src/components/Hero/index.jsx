import React, { useState } from "react";
import "./index.css";

const Hero = ({ carousel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleLeft() {
    if (currentIndex === 0) {
      setCurrentIndex(carousel.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  function handleRight() {
    if (currentIndex === carousel.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        className="Hero"
        style={{
          display: "flex",
          transition: "transform 0.4s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carousel?.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="carousel image"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        ))}
      </div>
      <div className="btn">
        <button className="left" onClick={handleLeft}>
          L
        </button>
        <button className="right" onClick={handleRight}>
          R
        </button>
      </div>
    </div>
  );
};

export default Hero;
