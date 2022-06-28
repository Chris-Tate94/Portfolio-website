import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from '../../assets/IMG_0173.JPG'

const Header = () => {
  return (
    <header>
      <div  className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Chris Tate</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <div className='ME'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header