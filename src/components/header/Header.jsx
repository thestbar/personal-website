import React from 'react'
import './header.css'
import CTA from './CTA'
import HEADER_IMG from '../../assets/header-image.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Stavros Barousis</h1>
        <h5 className="text-light">Software Engineer</h5>

        <CTA />
        <HeaderSocials />

        <div className="header-img-parent">
            <img src={HEADER_IMG} alt="Header" className='header-img' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header