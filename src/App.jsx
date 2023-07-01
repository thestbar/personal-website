import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const [projects, setProjects] = useState([]);

  const fetchProjectList = () => {
    fetch("https://api.stavrosbarousis.com/get_project_list.php")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProjects(data);
      })
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  // console.log();

  return (
    <>
        <Header ref={homeRef} />
        <Nav homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>
        <About ref={aboutRef}/>
        <Projects ref={projectsRef} projects={projects}/>
        <Contact ref={contactRef}/>
        <Footer />
    </>
  )
}

export default App