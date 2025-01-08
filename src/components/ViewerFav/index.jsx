import React from "react";
import "./index.css";
import Card from "../Reusable/Card";

const ViewerFav = ({ ViewersFav }) => {
  console.log(ViewersFav, "JDCDHHH");

  return (
    <div className="card-container">
      {ViewersFav?.courses.map((item, index) => {
        return <Card course={item} key={index} />;
      })}
    </div>
  );
};

export default ViewerFav;
