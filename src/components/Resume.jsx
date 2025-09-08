import React from 'react'
import ResumeImg from '../images/resume.png'
import '../styles/Resume.css'
const Resume = () => {
  const config = {
     link:'https://drive.google.com/file/d/1da7kU4k9N5QrKaf2Md153LJGn38ltVoS/view?usp=sharing'
  }
  return (
    <section className='resumepage py-5' id ='resume'>
        <div>
            <img className='resume-image mt-5' src={ResumeImg}/>
        </div>
        <div className='resume-title-side mb-5 text-white'>
            <h1 className=' resume-title'>Resume</h1>
            <p className=' mt-5 fontsize'>You can view my resume <a  className='btn btn-md text-white ' href={config.link}>Download</a></p>
        </div>
      
    </section>
  )
}

export default Resume
