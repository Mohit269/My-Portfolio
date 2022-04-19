import React from "react";
import "../Styles/intro-style.css";
export default function Introduction() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hello, I'm</h2>
          <h1 className="intro-name">Mohit Sharma</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">
                <p>Software Engineer</p>
              </div>
              <div className="intro-title-item">
                <p>MERN Developer</p>
              </div>
              <div className="intro-title-item">
                <p>Programmer</p>
              </div>
            </div>
          </div>
          <div className="intro-desc">
            Hardworking and Passionate Person with strong organizational skills
            eager to secure Software Engineer position in technical environment.
            Ready to help team to achieve company goals.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <h1>Right</h1>
      </div>
    </div>
  );
}
