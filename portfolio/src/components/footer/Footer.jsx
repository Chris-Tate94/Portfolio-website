import React from 'react'
import './footer.css'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Chris</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#assets">Assets</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/chris.tate.925" target='__blank'> <BsFacebook/> </a>
        <a href="https://www.linkedin.com/in/christopher-tate-77a7241a4/" target='__blank'> <BsLinkedin/> </a>
        <a href='https://github.com/Chris-Tate94' target='__blank'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chris Tate. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer