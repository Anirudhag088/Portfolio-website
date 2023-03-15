import React from 'react'
import './about.css'
import Me from '../../assest/divyansh ai.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
           <div className="about_me_img">
            <img src={Me} alt="me" />
           </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>35+ Clients</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>60+ Completed</small>
            </article>
          </div>

          <p>On this site, you will find a selection of my best work, divided into clear categories for easy browsing. From branding and logo design to video editing and web design, you can see the full range of my skills and experience.</p>
          
        </div>
      </div>
      </section>
  )
}

export default about