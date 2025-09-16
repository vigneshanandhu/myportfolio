import React from 'react'
import '../styles/Contact.css'
const Contact = () => {
   const config = {
      email:'vigneshanandhu2003@gmail.com',
      phone:'+91 9342216892'
   }
  return (
    <section className='contactpage py-5 text-white text-center' id ="contact" data-aos="fade-up">
                <h1 className=' contact-title' data-aos="fade-down">Contact</h1>
                <p className=' mt-3 fontsize' data-aos="fade-right">If you want to discuss more in detail. please contact me.</p>
                <p data-aos="fade-left"><span className='fw-bold'>Email:</span>{config.email}</p>
                <p data-aos="fade-right"><span className='fw-bold'>phone:</span>{config.phone}</p>
    </section>
  )
}

export default Contact