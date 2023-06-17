import React from 'react'
import "./about.css"
import ME from '../../assets/about-me-img.jpg'
import { FaAward, FaBookOpen } from 'react-icons/fa'
import { IoFolderSharp } from 'react-icons/io5'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years of Working Experience</small>
            </article>

            <article className='about__card'>
              <FaBookOpen className='about__icon'/>
              <h5>Education</h5>
              <small>MEng Electrical and Computer Engineering</small>
            </article>

            <article className='about__card'>
              <IoFolderSharp className='about__icon'/>
              <h5>Projects</h5>
              <small>See below</small>
            </article>

          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequatur soluta vel mollitia,
            facere amet, optio accusamus nulla deserunt nisi, dolorem libero! Odit ducimus fugit voluptas
            est repudiandae molestias inventore.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About