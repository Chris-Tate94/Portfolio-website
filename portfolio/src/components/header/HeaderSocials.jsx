import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/christopher-tate-77a7241a4/' target='__blank'><BsLinkedin /></a>
        <a href='https://github.com/Chris-Tate94' target='__blank'><BsGithub /></a>
        <a href='https://github.https://dribbble.com/ctate69?onboarding=true/Chris-Tate94' target='__blank'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials