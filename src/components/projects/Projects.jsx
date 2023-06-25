import React, { forwardRef } from 'react'
import './projects.css'
import solarDawnImg from '../../assets/project-images/solar-dawn-img.png'
import rayCasting2DImg from '../../assets/project-images/ray-casting-2d-img.png'
import pizzaCatImg from '../../assets/project-images/pizza-cat-img.png'
import personalWebsiteImg from '../../assets/project-images/personal-website-img.png'
import infinityGameEngineLogoImg from '../../assets/project-images/inifnity-game-engine-logo-img.png'
import spaceshooterGameImg from '../../assets/project-images/spaceshooter-game-img.png'
import junkiemusicLogoImg from '../../assets/project-images/junkiemusic-logo-img.png'

const data = [
  {
    id: 1,
    image: solarDawnImg,
    title: 'Solar Dawn',
    description: 'Educational Physics Video Game. Build as part of my Diploma Thesis at University of Patras, Department of Electrical and Computer Engineering.',
    github: 'https://github.com/thestbar/solar-dawn-game',
    hasDemo: true,
    demoButtonLabel: "Try it Here",
    demo: 'https://thestbar.itch.io/solar-dawn'
  },
  {
    id: 2,
    image: rayCasting2DImg,
    title: 'Ray Casting 2D',
    description: 'Wolfenstein clone written in LibGDX (Java library that utilizes OpenGL). For the ray casting the DDA (Digital Differential Analyzer) Algorithm is used.',
    github: 'https://github.com/thestbar/ray-casting-2d',
    hasDemo: false,
    demoButtonLabel: null,
    demo: null
  },
  {
    id: 3,
    image: pizzaCatImg,
    title: 'Pizza Cat',
    description: 'Entry for LudumDare 53 Game Jam (built in a weekend) within the theme "Delivery". It was created in Java using the LibGDX framework. Cats utilize AI Pathfinding to move in the world.',
    github: 'https://github.com/thestbar/pizza-cat',
    hasDemo: true,
    demo: 'https://thestbar.itch.io/pizza-cat',
    demoButtonLabel: 'Try it Here'
  },
  {
    id: 4,
    image: personalWebsiteImg,
    title: 'Personal Website',
    description: 'This website was built by me using Javascript and React Native. Feel free to use it experimenting on your own website. (Currently under development)',
    github: 'https://github.com/thestbar/personal-website',
    hasDemo: false,
    demo: null,
    demoButtonLabel: null
  },
  {
    id: 5,
    image: infinityGameEngineLogoImg,
    title: 'Infinity Game Engine',
    description: 'Custom Java OpenGL 2D Game Engine. 2D & 3D Graphics Engines fundamendals are being explored and utilized while developing this beast. (Currently under development)',
    github: 'https://github.com/thestbar/infinity-game-engine',
    hasDemo: false,
    demo: null,
    demoButtonLabel: null
  },
  {
    id: 6,
    image: spaceshooterGameImg,
    title: 'Space Shooter Clone',
    description: 'A clone of the Classic Space Shooter 2D Game created in Java using the LibGDX framework. It was my first attempt to create a full game with LibGDX.',
    github: 'https://github.com/thestbar/libgdx-spaceshooter',
    hasDemo: false,
    demo: null,
    demoButtonLabel: null
  },
  {
    id: 7,
    image: junkiemusicLogoImg,
    title: 'JunkieMusic',
    description: 'Discord bot created during the pandemic so me and my friends have a DJ in the virtual room to play some music for us. Also, we were sure that this bot will not \"stalk\" us.',
    github: 'https://github.com/thestbar/libgdx-spaceshooter',
    hasDemo: false,
    demo: null,
    demoButtonLabel: null
  }
]

const Projects = forwardRef((props, ref) => {

  const demoButton = (hasDemo, demo, demoButtonLabel) => {
    if (hasDemo) {
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
          data.map(({id, image, title, description, github, hasDemo, demoButtonLabel, demo}) => {
            return (
              <article key={id} className='projects__item'>
                <div className="projects__item-image">
                  <img src={image} alt="Image" />
                </div>
                <h3>{title}</h3>
                <small>{description}</small>
                <div className="projects__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  {demoButton(hasDemo, demo, demoButtonLabel)}
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