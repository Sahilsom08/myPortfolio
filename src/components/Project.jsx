import React from "react";
import "./Project.css";
import { projects } from "./data";
// import { TbWorld } from "react-icons/tb";
import { TbBrandGithubFilled } from "react-icons/tb";

function Project() {
  return (
    <>
      <h1 className="heading">Projects</h1>
      <div id="projects" className="project">
        <div></div>
        <div className="project--card--container">
          {projects.map((project) => (
            <div key={project.image} className="cards">
              <div className="project--image--container">
                <img
                  alt="gallery"
                  src={project.image}
                  className="project--img"
                />
              </div>
              <div className="project--info">
                  <h3 className="title">{project.title}</h3>
                  <p>{project.description}</p>
                <div className="project--info--button">
                  <button onClick={() => window.open(project.github, "_blank")}>
                    <TbBrandGithubFilled
                      size={25}
                      className="project--button--margin"
                    />
                    Source Code
                  </button>
                  {/* <button onClick={() => window.open(project.demo, "_blank")}>
                    <TbWorld size={25} className="project--button--margin" />
                    Live Demo
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Project;
