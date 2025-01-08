import React, { useState } from "react";
import "./index.css";
import Card from "../Reusable/Card";
const Courses = ({ courseList }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [topicIndex, setTopicIndex] = useState(0);

  let handleClick = (index) => {
    setCurrIndex(index);
  };
  let handleTopicClick = (index) => {
    console.log(index);

    setTopicIndex(index);
  };
  return (
    <>
      <div className="course-parent">
        <h2 className="course-heading">{courseList?.heading}</h2>
        <p className="course-pera">{courseList?.desc}</p>
        <div className="course-name">
          {courseList?.tabsData.map((obj, tabIndex) => (
            <span
              className="courseListName"
              key={tabIndex}
              onClick={() => handleClick(tabIndex)}
              style={{
                borderBottom: `${
                  currIndex === tabIndex ? "2px solid #555" : ""
                }`,
                color: `${currIndex === tabIndex ? " #000" : ""}`,
              }}
            >
              {obj.name}
            </span>
          ))}
        </div>
      </div>
      <div className="topics-outer">
        {courseList?.tabsData[currIndex]?.topics?.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `${topicIndex === index ? "#2d2f31" : ""}`,
              color: `${topicIndex === index ? "#fff" : ""}`,
            }}
            className="topics-inner"
            onClick={() => handleTopicClick(index)}
          >
            {item.name}
            <div
              style={{
                backgroundColor: `${topicIndex === index ? "#2d2f31" : ""}`,
                color: `${topicIndex === index ? "#fff" : ""}`,
              }}
              className="topics-description"
            >
              {item.totalLearners}
              <span className="topics-statics">+learners</span>
            </div>
          </div>
        ))}
      </div>
      <div className="card-container">
        {courseList?.tabsData[currIndex]?.topics?.[topicIndex]?.courses?.map(
          (course, index) => {
            return <Card course={course} key={index} />;
          }
        )}
      </div>

      <div className="course-btn">
        <button className="course-in">
          {courseList?.tabsData[currIndex].name}
        </button>
      </div>
    </>
  );
};

export default Courses;
