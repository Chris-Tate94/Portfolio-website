import React from 'react'
import CTA from './CTA'
import "./header.css"
import picture from '../../assets/profile.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div  className='container header__container'>
        {/* <h5>Hello, my name is</h5> */}
        <h1>Chris Tate</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='picture'>
          <img className='profile' src={picture} alt="picture" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header