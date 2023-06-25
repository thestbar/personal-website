import React, { useState } from 'react'
import "./about.css"
import ME from '../../assets/about-me-img.jpg'
import { FaAward, FaBookOpen } from 'react-icons/fa'
import { IoFolderSharp } from 'react-icons/io5'
import CV from '../../assets/stavros_barousis_cv.pdf'

const downloadCV = () => {
  fetch(CV, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
    .then(res => res.blob())
    .then(res => {
      const aElement = document.createElement('a');
      aElement.setAttribute('download', 'Stavros Barousis Resume');
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute('target', '_blank');
      aElement.click();
      URL.revokeObjectURL(href);
    });
}

const careerStartDate = new Date('2021-03-24');

const getYearDiffFromToday = (startingDate) => {
  const date = new Date();
  return Math.abs(date.getFullYear() - startingDate.getFullYear());
};

const aboutMeText = `Hi, my name is Stavros and I'm a software engineer. Most of the time I like to play around with 
3D graphics or try to build a native mobile application. Except for programming I am a "hobbyist" musician 
who loves creating music from scratch. I love reading books and you will always find me trying to learn something new.
Below you can check some of my personal projects (which I hope will get more in the future). Also, I am planning to expand
this website to have a blog section where I will upload some extra stuff about the things that I like to do. This ranges from
data structures and algorithms (a topic that I spend a lot of my personal time), to OpenGL and Android development 
(or even maybe some web stuff). `;

const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id='about' className='navbar__section'>
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
              <small>{getYearDiffFromToday(careerStartDate)} Years of Working Experience</small>
            </article>

            <article className='about__card'>
              <FaBookOpen className='about__icon'/>
              <h5>Education</h5>
              <small>MEng Electrical and Computer Engineering</small>
            </article>

            <article className='about__card about__card-clickable' onClick={() => {downloadCV()}}>
              <IoFolderSharp className='about__icon'/>
              <h5>Resume</h5>
              <small>Click to Download CV</small>
            </article>

          </div>

          <p>
            {showMore ? aboutMeText : `${aboutMeText.substring(0, 250)}... `}
            <a className='about__show-more-less' onClick={() => {setShowMore(!showMore)}}>{showMore ? "Less" : "More"}</a>
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About