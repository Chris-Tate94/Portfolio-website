import React from 'react'
import './portfolio.css'
import homePage from "../../assets/home-page.png";
import exerciseDetails from '../../assets/exercise-details.png';
import tweeter from '../../assets/tweeter.png';

const data = [
  {
    id: 1,
    image: homePage,
    title: 'Scheduler',
    github: 'https://github.com/Chris-Tate94/Scheduler',
    demo: 'https://github.com/Chris-Tate94/Scheduler'
  },
  {
    id: 2,
    image: homePage,
    title: 'Jungle',
    github: 'https://github.com/Chris-Tate94/Scheduler',
    demo: 'https://github.com/Chris-Tate94/Scheduler'
  },
  {
    id: 3,
    image: tweeter,
    title: 'tweeter',
    github: 'https://github.com/Chris-Tate94/Scheduler',
    demo: 'https://github.com/Chris-Tate94/Scheduler'
  },
  {
    id: 4,
    image: exerciseDetails,
    title: 'Work it Out',
    github: 'https://github.com/Chris-Tate94/Finals-Work-It-Out',
    demo: 'https://github.com/Chris-Tate94/Finals-Work-It-Out'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} target='_blank' className='btn'>Github</a>
                <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio