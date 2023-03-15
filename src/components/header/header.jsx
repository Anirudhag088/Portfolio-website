import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assest/111.png'
import headersocials from './headersocials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Divyansh Shourie</h1>
        <h5 className="text-light"> Designer</h5>
        <CTA />
        <headersocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll_down'>Contact Me</a>
      </div>
    </header>
  )
}

export default header