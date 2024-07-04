// import "./Home.css";
import myPhoto from "../../public/assets/images/Untitled design.png";
import Resume from "../../public/assets/pdf/MyResume.pdf";
import TypeWriter from "./TypeWriter";

import {
  MdMailOutline,
  MdOutlineLocationOn
} from "react-icons/md";
function Home() {
  return (
    <div className="main">
      <div className="home">
        <div className="container">
          <img className="heroImg" src={myPhoto} alt="img" />

          <div className="info-box">
            <div className="name-box">
              <h1 className="name">Sahil Somwanshi</h1>

              <div className="typeWriter">
                <p>
                  <TypeWriter />{" "}
                  {/* Web developer */}
                </p>
              </div>
            </div>

            <button className="resume-btn">
              <a href={Resume} download="sahil_resume.pdf">
              Resume
              </a>
            </button>

            <div className="info-box-more">
              <ul className="details">
                <li className="detail-item">
                  <div className="icon-box">
                    <MdMailOutline />
                  </div>
                  <div className="detail-info">
                    <p className="detail-title">Email</p>
                    <a
                      href="mailto:sahilsomwanshi08@gmail.com"
                      className="detail-text"
                    >
                      sahilsomwanshi08@gmail.com
                    </a>
                  </div>
                </li>
                <li className="detail-item">
                  <div className="icon-box">
                    <MdOutlineLocationOn />
                  </div>
                  <div className="detail-info">
                    <p className="detail-title">Location</p>
                    <p className="detail-text"> Shahada, Maharashtra</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
