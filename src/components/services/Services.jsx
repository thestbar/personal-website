import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      <article className='service'>
          <div className="service__head">
            <h3>Service 1</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          
          </ul>
        </article>
        {/* END OF FIRST SERVICE */}

        <article className='service'>
          <div className="service__head">
            <h3>Service 2</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          
          </ul>
        </article>
        {/* END OF SECOND SERVICE */}

        <article className='service'>
          <div className="service__head">
            <h3>Service 3</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          
          </ul>
        </article>
        {/* END OF THIRD SERVICE */}
      </div>
    </section>
  )
}

export default Services