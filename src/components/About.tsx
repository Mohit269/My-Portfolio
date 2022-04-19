import React from "react";
import "../Styles/about-style.css";
export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left-pic"></div>
        <h1 className="about-left-heading">About Me</h1>
      </div>
      <div className="about-right">
        <div className="about-right-box">
          <div className="about-right-box1"></div>
          <div className="about-right-box2"></div>
        </div>
      </div>
    </div>
  );
}
