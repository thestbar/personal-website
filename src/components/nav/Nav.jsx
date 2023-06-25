import React, { useEffect } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const navbarSections = document.querySelectorAll('.navbar__section');
  
  const [activeNav, setActiveNum] = useState('#');

  useEffect(() => {
    window.onscroll = () => {
      navbarSections.forEach(element => {
        {/* Add 1 to top to fix bug were top value was 9.67... and offsetTop was 10.
            This problem was leading to incosistencies. */}
        let top = window.scrollY + 1;
        let offset = element.offsetTop;
        let height = element.offsetHeight;
        let id = element.getAttribute('id');

        if(top >= offset && top < offset + height) {
          if(id === null)
            setActiveNum('#');
          else
            setActiveNum(`#${id}`);
        }
      });
    };
  });

  return (
    <nav>
      {/* Each extra section that you add need to inherit from CSS class 'nav__item' in order to work properly */}
      <a href="#" onClick={() => setActiveNum('#')} className={`nav__item ${activeNav === '#' ? 'active' : ''}`}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNum('#about')} className={`nav__item ${activeNav === '#about' ? 'active' : ''}`}><AiOutlineUser /></a>
      <a href="#projects" onClick={() => setActiveNum('#projects')} className={`nav__item ${activeNav === '#projects' ? 'active' : ''}`}><AiOutlineProject /></a>
      <a href="#contact" onClick={() => setActiveNum('#contact')} className={`nav__item ${activeNav === '#contact' ? 'active' : ''}`}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav