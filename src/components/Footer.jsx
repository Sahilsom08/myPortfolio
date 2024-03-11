import React from 'react'
import './Footer.css'
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer--links'>
        <a href="https://github.com/Sahilsom08" target="_blank"><SiGithub size={40} /></a>
        <a href="https://www.linkedin.com/in/sahilsomwanshi" target="_blank"><SiLinkedin size={40} /></a>
      </div>
      <p>Coded by Sahil Somwanshi</p>
    </div>
  )
}

export default Footer