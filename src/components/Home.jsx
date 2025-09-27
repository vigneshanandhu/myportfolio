import React from 'react'
import image1 from '../images/Hero.jpeg'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import '../styles/Home.css'
const Home = () => {
  const config = [
    {
      link1:'https://github.com/vigneshanandhu?tab=repositories',
      link2:'https://www.linkedin.com/in/vigneshv11'
    }
  ]
  return (
    <section className='home-section px-5' id='firstflex' data-aos="fade-up">
      <div className="home-flex-container d-flex align-items-center flex-wrap">
        <div className="home-text" data-aos="fade-right">
          <h1 className='hii'>Hi,</h1> 
          <h1>I'm <span className='text-black'>V</span> Vignesh</h1> 
          <p className='para'>I'm a Web Devloper</p>
          <div className='d-flex gap-2 icons' data-aos="zoom-in">
            <a href={config[0].link1} className='hovericon' target='_blank' rel='noopener noreferrer'><AiOutlineGithub size={25}/></a>
            <a href={config[0].link2} className='hovericon' target='_blank' rel='noopener noreferrer'><AiOutlineLinkedin size={25}/></a>
          </div>
        </div>
        <img className="home-image" src={image1} data-aos="fade-left" alt="Hero" />
      </div>
    </section>
  )
}

export default Home