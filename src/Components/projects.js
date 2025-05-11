import React from "react";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="projects" data-aos="fade-up">
      <h1>Projects</h1>
      <div className="projects-container" data-aos="zoom-in">
        <div className="project-card" data-aos="flip-left">
          <h2>Project A</h2>
          <p>Coming soon...</p>
        </div>
        <div className="project-card" data-aos="flip-left">
          <h2>Project B</h2>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
