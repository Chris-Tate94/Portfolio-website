import React from 'react'
import ME from "../../assets/gym.JPG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Coding Experience</small>
            </article>
          
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small># of clients worldwide</small>
            </article>
          
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Over 30 completed projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt similique quia corrupti aliquam facere debitis. Dignissimos odit harum nam beatae, at unde. Placeat, veritatis incidunt? Natus provident itaque deleniti aliquid.</p>

          <a href='#contact' className='btn btn-primary'></a>
        </div>
      </div>
    </section>
  )
}

export default About