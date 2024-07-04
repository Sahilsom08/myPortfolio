import React from "react";
import { projects } from "./data";
// import { TbWorld } from "react-icons/tb";
import { ImGithub } from "react-icons/im";
import { SiGithub } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

function Project() {
  return (
    <div className="main">
      <div className="projects">
        <h1 className="title">Projects</h1>
        <div className="project-card-container">
          {projects.map((project) => (
            <div key={project.image} className="cards">
              <div className="overlay">
                <button
                  className="git-btn"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <VscGithub className="git-icon" />
                </button>
              </div>
              <div className="project--image--container">
                <img
                  alt="gallery"
                  src={project.image}
                  className="project-img"
                />
              </div>
              <div className="project-info">
                <h3 className="project-title title-three">{project.title}</h3>
                <p className="project-discription">{project.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
