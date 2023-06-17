import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {FaFacebookF} from 'react-icons/fa'
import {RiTwitterFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Stavros Barousis</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com" target='_blank'><FaFacebookF /></a>
        <a href="https://www.twitter.com" target='_blank'><RiTwitterFill /></a>
        <a href="https://www.linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://www.github.com" target='_blank'><FaGithub /></a>
        <a href="https://www.leetcode.com" target='_blank'><SiLeetcode /></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; 2023 Stavros Barousis. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer