import React from "react";
import "./Card.css";
import resumeImage from "../assets/resume.jpg";
import { TbEyeShare } from "react-icons/tb";

const Card = () => {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Qvb-O4-0CpvzRn570rlJrwNi-4oUTFLU/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <div className="front-content">
            <img src={resumeImage} alt="Resume Thumbnail" className="img" />
          </div>
        </div>
        <div className="back">
          <div className="back-content" onClick={handleClick}>
            <p className="flex items-center">
              <TbEyeShare className="mr-2 text-xl" />
              View
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
