import React from 'react'
import './workplace.css'
import management from '../../assets/management.png'
import team from '../../assets/team.png'
import organizer from '../../assets/organizer.png'
import prioritize from '../../assets/prioritize.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: team,
    name: 'Team Player',
    review: 'Being a team player was an essential part of my previous role as a Corporate Account Manager. The diverse and dynamic work environments I have experience with incentivized collaboration and cooperation. With the ever increasing workload, one could easily drown in pending items without the support of ones colleagues. Being able to cooperate and work well with others gave me the ability to take on more complex tasks increasing my overall efficiency. When team members became overwhelmed with work, they would come to me for assistance in getting time sensitive tasks completed accurately and efficiently.'
  },
  {
    avatar: organizer,
    name: 'Highly Organized',
    review: 'Managing a portfolio of 30 high profile corporate clients has its challenges, one of which being keeping track of all accounts at once and ensuring nothing slips through your grasp. Being highly organized is crucial in ensuring you are providing the best customer experience to each and every client while staying on top of all the incoming requests.'
  },
  {
    avatar: prioritize,
    name: 'Prioritization',
    review: 'Dealing with a large number of daily requests and juggling those with ongoing, more long term issues has helped me develop astute prioritization skills. Being able to identify the severity of the situation along with being able to delegate smaller tasks helped me to keep the high priority issues under control while not neglecting smaller more menial requests.'
  },
  {
    avatar: management,
    name: 'Account Management',
    review: 'Maintaining a professional working relationship with all my clients helped me keep their expectations in check while also helping me ensure their needs were being met. They felt confident that I could get the job done, and If I was unable to get back to them with an answer immediately, I would keep them updated with the progress I was making on their issue. My professional demeanor, can-do attitude and excellent communication skills were key in developing and maintaining a wonderful working relationship with all my clients.'
  },
]


const Workplace = () => {
  return (
    <section id='workplace'>
      <h5>Workplace Skills</h5>
      <h2>Assets</h2>

      <Swiper className="container workplace__skills__container" 
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="skill">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Workplace