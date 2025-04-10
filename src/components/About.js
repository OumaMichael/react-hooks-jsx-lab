import React from "react";
import { image } from "../data/data.js"; // import image variable

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am passionate about coding and learning new tech!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
