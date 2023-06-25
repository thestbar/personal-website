import React, { useEffect } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const Nav = (props) => {
  const [activeNav, setActiveNum] = useState('#');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries;
      if(entry[0].isIntersecting)
        setActiveNum('#');
    });
    observer.observe(props.homeRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries;
      if(entry[0].isIntersecting)
        setActiveNum('#about');
    });
    observer.observe(props.aboutRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries;
      if(entry[0].isIntersecting)
        setActiveNum('#projects');
    });
    observer.observe(props.projectsRef.current);
  }, []);  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries;
      if(entry[0].isIntersecting)
        setActiveNum('#contact');
    });
    observer.observe(props.contactRef.current);
  }, []);

  return (
    <nav>
      {/* Each extra section that you add need to create a new useEffect */}
      <a href="#" onClick={() => setActiveNum('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNum('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#projects" onClick={() => setActiveNum('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineProject /></a>
      <a href="#contact" onClick={() => setActiveNum('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav