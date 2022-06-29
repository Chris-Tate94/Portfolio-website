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
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisic.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT */}
      </div>
    </section>
  )
}

export default Services