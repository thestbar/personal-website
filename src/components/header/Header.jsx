import React from 'react'
import { forwardRef } from 'react'
import './header.css'
import CTA from './CTA'
import HEADER_IMG from '../../assets/me-img.png'
import HeaderSocials from './HeaderSocials'

const Header = forwardRef((props, ref) => {
  return (
    <header className='navbar__section' ref={ref}>
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
});

export default Header