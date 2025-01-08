import React from "react";
import "./index.css";
const Brands = ({ testimonials }) => {
  return (
    <div className="brand-outer">
      <h4>{testimonials?.heading}</h4>
      <div className="brand-inner">
        {testimonials?.brands.map((link, index) => (
          <img key={index} src={link} alt="ik" />
        ))}
      </div>
    </div>
  );
};

export default Brands;
