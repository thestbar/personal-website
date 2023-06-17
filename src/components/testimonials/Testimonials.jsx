import React from 'react'
import './testimonials.css'
import { useRef, useEffect } from 'react';

import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const data = [
  {
    avatar: AVATAR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, dignissimos voluptates suscipit nihil maxime earum. Vel veniam, saepe, mollitia voluptas ad consequatur, dolore accusamus id molestiae facere nihil harum placeat?'
  },
  {
    avatar: AVATAR2,
    name: 'Fabio Ricceti',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, dignissimos voluptates suscipit nihil maxime earum. Vel veniam, saepe, mollitia voluptas ad consequatur, dolore accusamus id molestiae facere nihil harum placeat?'
  },
  {
    avatar: AVATAR3,
    name: 'Nick Cook',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, dignissimos voluptates suscipit nihil maxime earum. Vel veniam, saepe, mollitia voluptas ad consequatur, dolore accusamus id molestiae facere nihil harum placeat?'
  },
  {
    avatar: AVATAR4,
    name: 'Matz Schweiz',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, dignissimos voluptates suscipit nihil maxime earum. Vel veniam, saepe, mollitia voluptas ad consequatur, dolore accusamus id molestiae facere nihil harum placeat?'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <swiper-container className="swiper__container"
          pagination="true"
          space-between="40">
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <swiper-slide key={index}>
                  <article className="testimonial">
                    <div className="client__avatar">
                      <img src={avatar} alt="Avatar" />
                    </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className="client__review">{review}</small>
                  </article>
                </swiper-slide>
              )
            })
          }
        </swiper-container>
      </div>
    </section>
  )
}

export default Testimonials