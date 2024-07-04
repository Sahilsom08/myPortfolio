import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Resume from "../../public/assets/pdf/MyResume.pdf";
function AboutMe() {
  return (
    <div className="main">
      <div className="about">
        <h1 className="title">About Me</h1>
        <div className="about-container">
          <div className="about-section-one">
            <p className="info-txt">
              Hey! I'm an Engineering graduate in Electronics and
              Telecommunication (2024). Equipped with a comprehensive
              understanding of tech, coding, design, and development.
            </p>
            <p className="info-txt">
              I leverage my expertise in front-end development technologies like
              HTML, CSS, JavaScript and React. I am actively expanding my
              back-end development knowledge by learning Node.js and Express.js.
              Throughout my journey, I have completed various web development
              projects, demonstrating my ability to create responsive and
              engaging web applications.
            </p>
            <p className="info-txt">
              I am always eager to learn and explore new technologies, and I
              strive to stay up-to-date with the latest industry trends. Let's
              connect and discuss how we can collaborate on exciting projects!
            </p>
          </div>
          <div className="about-section-two">
            <h2 className="section-two-title title-two">What I'm Doing</h2>
            <div className="section-two-main">
              <div className="section-two-info">
                <h3 className="title-three">Web Development</h3>
                <p className="info-txt">
                  I can create websites and web appliactions. I have experience
                  in ReactJs, NodeJs and ExpressJs. Explore my projects to see
                  my work in action!
                </p>
              </div>
              <div className="section-two-info">
                <h3 className="title-three">Data Structures And Alogrithm</h3>
                <p className="info-txt">
                  I have a solid foundation in JAVA and currently working on
                  improving my problem solving skills by practicing DSA
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
{
  /* <div className="about--button">
            <button className="about--button--resume">
              Resume
              <FaArrowRightLong size={25} style={{ marginLeft: "10px" }} />
              <a
                href="https://drive.google.com/file/d/1pFvmK2P6lHmWG1d-BsQj7_1EJtREvzZZ/view?usp=sharing"
                target="_blank"
              >
                <button className="about--button--open">
                  <MdOpenInNew size={30} />
                </button>
              </a>
              <a href={Resume} download="sahil_resume.pdf">
                <button className="about--button--download">
                  <HiOutlineDownload size={30} />
                </button>
              </a>
            </button>
          </div> */
}
