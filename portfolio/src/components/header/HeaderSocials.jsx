import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/christopher-tate-77a7241a4/' target='__blank'><BsLinkedin /></a>
        <a href='https://github.com/Chris-Tate94' target='__blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials