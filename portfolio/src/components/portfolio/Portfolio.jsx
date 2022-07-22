import React from 'react'
import './portfolio.css'

//Project image's
import homePage from "../../assets/scheduler.png";
import portfolio from "../../assets/portfolio_homepage.png";
import exerciseDetails from '../../assets/exercise-details.jpeg';
import tweeter from '../../assets/tweeter.png';
import tinyApp from '../../assets/tinyApp.png';

//Project Demo's
import workoutDemo from '../../assets/new-workout.gif'
import schedulerDemo from '../../assets/SchedulerDemo.gif'
import tinyAppDemo from '../../assets/tinyAppDemo.gif'


const data = [
  {
    id: 1,
    image: portfolio,
    title: 'Portfolio Site',
    description: 'Hosted on Hostinger, this fully responsive and dynamic portfolio site showcases projects that I created or collaborated on. I decided to build this site with React as I enjoyed the streamlined process of building and styling components individually.',
    techStack: 'React, SwiperJS, EmailJS, CSS.',
    github: 'https://github.com/Chris-Tate94/portfolio-website/tree/master/portfolio',
    demo: 'https://github.com/Chris-Tate94/portfolio-website/tree/master/portfolio'
  },
  {
  id: 2,
  image: exerciseDetails,
  title: 'Work It Out',
  description: 'A personal workout app created in collaboration with Brendan Woo and Lea Pehar. This fully responsive React application allows unregistered users to follow along with pre-populated workouts for all major muscle groups. When users sign up, they are allowed to create, record, and save custom workouts, tracking their sets, repetitions, and weight used. ',
  techStack: 'ReactJS, React-Router-DOM, Axios, PorstgreSQL.',
  github: 'https://github.com/Chris-Tate94/Finals-Work-It-Out',
  demo: workoutDemo
  },
  {
    id: 3,
    image: homePage,
    title: 'Scheduler',
    description: "This Lighthouse Labs project was an introduction to React. This project works to get bootcamp students comfortable with using React to develop interactive UI's. Creating various components and passing props, state and functions throughout to create a seamless user environment. We also utilized Storybook for isolated component building and Cypress for end-to-end testing.",
    techStack: 'Axios, ReactJS, React-DOM.',
    github: 'https://github.com/Chris-Tate94/Scheduler',
    demo: schedulerDemo
  },
  {
    id: 4,
    image: tinyApp,
    title: 'TinyApp',
    description: "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la tinyurl.com). TinyApp is the first project for bootcamp students to get comfortable with creating web API's and setting up servers that interact accordingly with the client(s).",
    techStack: 'EJS, Express, HTML5, Node.js.',
    github: 'https://github.com/Chris-Tate94/tinyApp',
    demo: tinyAppDemo
  },
  {
    id: 5,
    image: tweeter,
    title: 'Tweeter',
    description: "Tweeter is a single-page AJAX-based Twitter clone that uses Ajax to insert newly created 'tweets' to the top of a users feed without refreshing the page. The application is responsive and will dynamically change based on the users view port (tablets, phones, desktops). This project was created to be a single-page application focusing on front-end development and styling.",
    techStack: 'AJAX, CSS3, HTML5, jQuery.',
    github: 'https://github.com/Chris-Tate94/tweeter',
    demo: 'https://github.com/Chris-Tate94/tweeter'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description,techStack, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <h4>{techStack}</h4>
              <div className='portfolio__item-cta'>
                <a href={github} target='_blank' rel='noreferrer' className='btn'>View Project</a>
                <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
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