import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import './services.css'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Bring to the Table</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Eye for design</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Front end Development experience</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Single Page Applications</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Component Driven UI</p>
            </li>
          </ul>
        </article>
        {/* END OF UX/UI */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Strong understanding of REST api</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Full Stack Development capabilities</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Front end and Back end proficiency</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Database management and query capabilities</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Multiple completed projects</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Front end focused projects</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Back end focused projects</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Full Stack Development Projects</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Testing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Proficiency with multiple testing libraries</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Unit Testing</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>End-to-End Testing</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Error Handling</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT */}
      </div>
    </section>
  )
}

export default Services