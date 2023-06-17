import React from 'react'
import CV from '../../assets/stavros_barousis_cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA