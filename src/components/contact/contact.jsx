import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BiPhoneCall} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'


const contact = () => {
 
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <p>shouriedivyansh@gmail.com</p>
            <a href="mailto: shouriedivyansh@gmail.com" >Send a Mail</a>
          </article>
          <article className='contact_option'>
            <BiPhoneCall className='contact_option-icon' />
            <h4>Call</h4>
            <p>+919625955508</p>
            <a href="tel:+919625955508" >Call now</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <p>+919625955508</p>
            <a href="https://wa.me/<+919625955508>" >Get In Touch</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7"  placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact