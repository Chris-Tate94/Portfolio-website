import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/AVTR1.jpg'
import AVTR2 from '../../assets/AVTR2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Client Name / Skills',
    review: 'Client Review / Skill Description / Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem hic rerum nobis odit, ab, cupiditate exercitationem iste error quibusdam aspernatur, labore nemo debitis praesentium esse suscipit odio. Tenetur, ea beatae.'
  },
  {
    avatar: AVTR2,
    name: 'Client Name / Skills 2',
    review: 'Client Review / Skill Description / Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem hic rerum nobis odit, ab, cupiditate exercitationem iste error quibusdam aspernatur, labore nemo debitis praesentium esse suscipit odio. Tenetur, ea beatae.'
  },
  {
    avatar: AVTR1,
    name: 'Client Name / Skills 3',
    review: 'Client Review / Skill Description / Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem hic rerum nobis odit, ab, cupiditate exercitationem iste error quibusdam aspernatur, labore nemo debitis praesentium esse suscipit odio. Tenetur, ea beatae.'
  },
  {
    avatar: AVTR2,
    name: 'Client Name / Skills 4',
    review: 'Client Review / Skill Description / Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem hic rerum nobis odit, ab, cupiditate exercitationem iste error quibusdam aspernatur, labore nemo debitis praesentium esse suscipit odio. Tenetur, ea beatae.'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

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

export default Testimonials