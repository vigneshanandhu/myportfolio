import React from 'react'
import image1 from '../images/Hero.jpg'
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import '../styles/Home.css'
const Home = () => {
  const config = [
    {
      link1:'https://github.com/vigneshanandhu',
      link2:'https://www.linkedin.com/in/vigneshv11'
    }
  ]
  return (
    <section className=' px-5 ' id = 'firstflex'>
       <div>
          <div className=' text-white  py-5'>
                <h1>Hi,</h1> 
                <h1>I'm <span className='text-black'>V</span> Vignesh</h1> 
                <p className='para'>I'm a Frontend Web Devloper</p>
         </div>
         <div className='d-flex gap-2  icons'>
            <a href={config[0].link1} className='hovericon' target='_blank'  rel='noopener noreferrer'><AiOutlineGithub size={25}/></a>
            <a href={config[0].link2} className='hovericon'  target='_blank'  rel='noopener noreferrer'><AiOutlineLinkedin size={25}/></a>
         </div>
       </div>
        <img  src={image1}/>
      
    </section>
  )
}

export default Home
