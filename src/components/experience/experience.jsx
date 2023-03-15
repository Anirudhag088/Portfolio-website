import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
     <h5>What Skills I Have</h5>
     <h2>My Experience</h2>

     <div className="container experience_container">
       <div className="experience_frontend">
         <h3>Technical Skills</h3>
         <div className="experience_content">
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Adobe <br /> Photoshop</h4>
         
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Adobe <br /> Premiere Pro</h4>
        
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Adobe <br /> Illustrator</h4>
          
          </div>
         </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Adobe <br /> After Effects</h4>
          
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Figma</h4>
         
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Sketch</h4>
         
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>JavaScript</h4>
         
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>ReactJs</h4>
         
          </div>
          </article>
         </div>

       </div>
       <div className="experience_backend">
         <h3>People Skills</h3>
         <div className="experience_content">
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Project management</h4>
          
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Problem-solving</h4>
          
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Creativity</h4>
          
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Leadership</h4>
          
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Flexibility</h4>
          
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Persistence</h4>
          
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Strong communication</h4>
          
          </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='experience_detail_icon'/>
          <div>
          <h4>Active Listening</h4>
         
          </div>
          </article>

         </div>
       </div>
     </div>

    </section>
  )
}

export default experience