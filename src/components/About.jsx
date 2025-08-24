import React from 'react'
import AboutImg from '../images/AboutImg.png'
import '../styles/About.css'
const About = () => {
  return (
    <section className='aboutpage'id='about'>
        <div>
            <img className='about-image mt-5' src={AboutImg}/>
        </div>
        <div className='about-title-side mb-5 text-white'>
            <h1 className=' about-title'>About Me</h1>
            <p className=' mt-3 fontsize'>Hi, I’m Vignesh, a passionate and self-driven Front-End Web Developer eager to <br/>kickstart my career in the tech world.</p>
            <p> I have hands-on experience building responsive and interactive websites using<br/> HTML, CSS, JavaScript, Bootstrap, and React.js.</p>
            <p>As a fresher, I’m enthusiastic about learning new technologies, collaborating<br/> with teams, and growing every day as a developer.</p>
        </div>
      
    </section>
  )
}

export default About
