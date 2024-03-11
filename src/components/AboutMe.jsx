import React from 'react'
import './AboutMe.css'
import { HiOutlineDownload } from "react-icons/hi";
import { MdOpenInNew } from "react-icons/md"
import { FaArrowRightLong } from "react-icons/fa6"
import Resume from "../../public/assets/pdf/Khushi-Patel-resume.pdf"

function AboutMe() {
  return (
    <div id='about' className='about'>
      <h1>About Me</h1>
      <p className="about--info">
        <li>🎓 I'm a final year student pursuing Bachelors of Technology in Electronics and Telecommunication Engineering</li>
        <li>🚀 Passionate about building interactive web applications.</li>
        <li>📚 Continuous learner with a keen interest in staying updated with the latest tech trends.</li>
        <li>🌈 Enjoy creating intuitive and visually appealing user experiences.</li>
        <li>🎮 Outside coding, I love exploring new places, reading books.</li>
      </p>

      <div className="about--button">
        <button className='about--button--resume'>
          Resume
          <FaArrowRightLong size={25} style={{ marginLeft: '10px' }} />
          <a href="https://drive.google.com/file/d/1-ARqNzfqtcuJ092o0stmlYMeBLng2MI7/view?usp=sharing" target="_blank">
            <button className='about--button--open'>
              <MdOpenInNew size={30} />
            </button>
          </a>
          <a href={Resume} download="Khushi-Patel-resume.pdf">
            <button className='about--button--download'>
              <HiOutlineDownload size={30} />
            </button>
          </a>
        </button>
      </div>

    </div>
  )
}

export default AboutMe