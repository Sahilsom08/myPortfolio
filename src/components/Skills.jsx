import React from "react";
import { FaJava } from "react-icons/fa6";
import {
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

function Skills() {
  return (
    <div className="main">
      <div className="skills">
        <h1 className="title">Skills and Technologies</h1>
        <div className="skill--card">
          <div className="skill--item">
            <SiHtml5  className="skill-icons" color="orangeRed" />
            <p>HTML</p>
          </div>
          <div className="skill--item">
            <SiCss3  className="skill-icons" color="skyBlue"  />
            <p>CSS</p>
          </div>
          <div className="skill--item">
            <SiJavascript  className="skill-icons" color="yellow"   />
            <p>JAVASCRIPT</p>
          </div>
          <div className="skill--item">

            <SiTypescript  className="skill-icons" color="skyBlue"  />
            <p>TYPESCRIPT</p>
          </div>
          <div className="skill--item">
            <SiReact  className="skill-icons" color="lightBlue" />
            <p>REACT</p>
          </div>

          <div className="skill--item">
            <SiNodedotjs  className="skill-icons" color="green" />
            <p>NODE JS</p>
          </div>
          <div className="skill--item">
            <SiExpress  className="skill-icons" />
            <p>EXPRESS JS</p>
          </div>
          <div className="skill--item">
            <SiMongodb  className="skill-icons" color="lightGreen" />
            <p>MONGODB</p>
          </div>
          <div className="skill--item">
            <FaJava  className="skill-icons" color="blue" />
            <p>JAVA</p>
          </div>
          <div className="skill--item">
            <SiCplusplus  className="skill-icons" color="lightBlue"/>
            <p>C++</p>
          </div>
          <div className="skill--item">
            <SiGit  className="skill-icons" color="red" />
            <p>GIT</p>
          </div>
          <div className="skill--item">
            <SiGithub  className="skill-icons" />
            <p>GITHUB</p>
          </div>
          <div className="skill--item">
            <SiTailwindcss  className="skill-icons" color="skyBlue" />
            <p>TAILWIND CSS</p>
          </div>

          <div className="skill--item">
            <SiRedux  className="skill-icons" color="voilet"/>
            <p>REDUX</p>
          </div>

          <div className="skill--item">
            <SiPostman  className="skill-icons" color="orange" />
            <p>POSTMAN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
