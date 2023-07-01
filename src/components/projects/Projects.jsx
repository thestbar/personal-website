import React, { forwardRef } from 'react'
import './projects.css'

const Projects = forwardRef((props, ref) => {

  const demoButton = (hasDemo, demo, demoButtonLabel) => {
    if (hasDemo === "1") {
      return <a href={demo} className='btn btn-primary' target='_blank'>{demoButtonLabel}</a>
    }
    return null;
  }

  return (
    <section id='projects' className='navbar__section' ref={ref}>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        
        {
          props.projects.data?.map((project) => {
            return (
              <article key={project.id} className='projects__item'>
                <div className="projects__item-image">
                  <img src={project.imageLink} alt="Image" />
                </div>
                <h3>{project.title}</h3>
                <small>{project.description}</small>
                <div className="projects__item-cta">
                  <a href={project.githubLink} className='btn' target='_blank'>Github</a>
                  {demoButton(project.hasDemo, project.demoLink, project.demoButtonLabel)}
                </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
});

export default Projects