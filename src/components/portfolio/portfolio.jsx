import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/pp logo.png'
import IMG2 from '../../assest/pp poster.png'
import IMG3 from '../../assest/Frame 43.png'
import IMG4 from '../../assest/pp app.png'
import IMG5 from '../../assest/Frame 6778.png'
import IMG6 from '../../assest/Frame 6779.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
       <article className='portfolio_item'>
        <div className="portfolio_item-img">
        <img src={IMG1} alt="" />
        </div>
        <h3>Logo design</h3>
        <div className='portfolio_item_cta'>
         
        <a href="https://www.behance.net/gallery/153468233/Logo-Design-Segura" target = "blank" className='btn btn-primary'>View Project</a>
        
        </div>
       </article>

       <article className='portfolio_item'>
        <div className="portfolio_item-img">
        <img src={IMG6} alt="" />
        </div>
        <h3>Case Study- Revamped Nike app</h3>
        <div className='portfolio_item_cta'>   
       
        <a href="https://www.behance.net/gallery/163028345/Case-Study-Revamped-Nike-app" target = "blank" className='btn btn-primary'>View Project</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div className="portfolio_item-img">
        <img src={IMG3} alt="" />
        </div>
        <h3>Brand identity</h3>
        <div className='portfolio_item_cta'>
       
        <a href="https://www.behance.net/gallery/166034863/Logo-Design-for-RJ-Naved" target = "blank" className='btn btn-primary'>View Project</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div className="portfolio_item-img">
        <img src={IMG4} alt="" />
        </div>
        <h3>Concept Booking App</h3>
        <div className='portfolio_item_cta'>
        <a href="https://www.behance.net/gallery/152911367/Ticket-Booking-App-Concept" target = "blank" className='btn btn-primary btn-portfolio'>View Project</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div className="portfolio_item-img">
        <img src={IMG5} alt="" />
        </div>
        <h3>Website Design</h3>
        <div className='portfolio_item_cta'>
        <a href="https://www.behance.net/gallery/164725639/Website-Design" target = "blank" className='btn btn-primary'>View Project</a>
        </div>
       </article>

       <article className='portfolio_item'>
        <div className="portfolio_item-img">
        <img src={IMG2} alt="" />
        </div>                                
        <h3> Poster design</h3>
        <div className='portfolio_item_cta'>
        
        <a href="https://www.behance.net/gallery/159274945/Poster-Design"  target = "blank" className='btn btn-primary'>View Project</a>
        </div>
       </article>

       
      </div>
    </section>
  )
}

export default portfolio