import React from "react";
import { MdStarRate } from "react-icons/md";
import "./Card.css";

const Card = ({ course }) => {
  let rating = Math.floor(course?.rating);

  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<MdStarRate key={i} />);
  }

  return (
    <div className="Card-parent">
      <div className="img-outer">
        <img src={course?.image} alt={course?.name} className="crd-img" />
      </div>
      <div className="card-ineer">
        <h3 className="card-name">{course?.name}</h3>
        <div style={{ display: "flex" }}>
          {course?.tutor?.map((teacher, index) => (
            <p className="tutor" key={index}>
              {index === course?.tutor?.length - 1 ? teacher : teacher + ", "}
            </p>
          ))}
        </div>
        <div className="check">
          <p className="price">
            {course?.rating}
            {stars.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            <span>({course?.buyers})</span>
          </p>
          <p className="des">₹{course?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
