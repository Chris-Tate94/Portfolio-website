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
    review: 'Client Review / Skill Description / Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem hic rerum nobis odit, ab, cupiditate exercitationem iste error quibusdam aspernatur, labore nemo debitis praesentium esse suscipit odio. Tenetur, ea beatae.'
  },
  {
    avatar: organizer,
    name: 'Organized',
    review: 'Client Review / Skill Description / Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem hic rerum nobis odit, ab, cupiditate exercitationem iste error quibusdam aspernatur, labore nemo debitis praesentium esse suscipit odio. Tenetur, ea beatae.'
  },
  {
    avatar: prioritize,
    name: 'Prioritization',
    review: 'Client Review / Skill Description / Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem hic rerum nobis odit, ab, cupiditate exercitationem iste error quibusdam aspernatur, labore nemo debitis praesentium esse suscipit odio. Tenetur, ea beatae.'
  },
  {
    avatar: management,
    name: 'Account Management',
    review: 'Client Review / Skill Description / Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem hic rerum nobis odit, ab, cupiditate exercitationem iste error quibusdam aspernatur, labore nemo debitis praesentium esse suscipit odio. Tenetur, ea beatae.'
  },
]


const Workplace = () => {
  return (
    <section id='testimonials'>
      <h5>Workplace Skills</h5>
      <h2>Assets</h2>

      <Swiper className="container testimonials__container" 
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
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