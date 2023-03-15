import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service_list'>
            <li>
            <BiCheck className='service_list-icon' />
            <p> Logo design </p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Branding and brand identity</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Brochures and poster design</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Packaging design</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Social media graphics</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX*/}
        <article className='service'>
          <div className="service_head">
            <h3>Video Editing</h3>
          </div>

          <ul className='service_list'>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Youtube videos and shorts</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>College fest Videos</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Instagram reels</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Video Campaign Concept & Stategy</p>
            </li>
            
            
          </ul>
        </article>
         {/* END OF WEB-DEV */}
        <article className='service'>
          <div className="service_head">
            <h3>Product Design</h3>
          </div>

          <ul className='service_list'>
            <li>
            <BiCheck className='service_list-icon' />
            <p>UI/UX design</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>UI design for mobile apps</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>UI design for web pages</p>
            </li>
            <li>
            <BiCheck className='service_list-icon' />
            <p>Wireframe Design</p>
            </li>
          </ul>
        </article>
        {/* END */}
      </div>
    </section>
  )
}

export default services