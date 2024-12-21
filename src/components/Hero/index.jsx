import React from "react";

const Hero = ({ carousel }) => {
  console.log(carousel);

  return (
    <div>
      <img src={carousel.img} alt="crousel-img" />
    </div>
  );
};

export default Hero;
