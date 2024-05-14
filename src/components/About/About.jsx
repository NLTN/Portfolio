import "./About.css";
import React from "react";
import { Container } from "react-bootstrap";
function template() {
  return (
    <div id="about" className="container-sm about">
      <h1 id="about" data-aos="fade-up">About</h1>

      <p className="text-left fs-5" data-aos="fade-up">
        Hi Everyone, I am Nathan Nguyen from California, US.
        I am currently an undergraduate student at California State University, Fullerton, pursuing a Bachelor's Degree in Computer Science. My academic journey is fueled by a deep interest in backend development and system design.
      </p>
      {/* <p  className="text-left fs-5" data-aos="fade-up">
      I am passionate about understanding the intricacies of creating efficient and scalable software systems that can handle complex tasks seamlessly. Through my coursework and personal projects, I am constantly honing my skills in programming languages, algorithms, and data structures, preparing myself to contribute meaningfully to the tech industry upon graduation.
      </p> */}
    </div>
  );
};

export default template;
