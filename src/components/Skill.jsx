import React from 'react'
import '../styles/Skill.css'
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiDjango, SiMysql } from 'react-icons/si'

const skills = [
  { name: 'HTML', level: 95, icon: <FaHtml5 color="#e44d26" size={32}/> },
  { name: 'CSS', level: 90, icon: <FaCss3Alt color="#1572b6" size={32}/> },
  { name: 'JavaScript', level: 85, icon: <FaJs color="#f7df1e" size={32}/> },
  { name: 'Bootstrap', level: 85, icon: <FaBootstrap color="#563d7c" size={32}/> },
  { name: 'Tailwind', level: 80, icon: <SiTailwindcss color="#38bdf8" size={32}/> },
  { name: 'ReactJS', level: 80, icon: <FaReact color="#61dafb" size={32}/> },
  { name: 'Python', level: 75, icon: <FaPython color="#3776ab" size={32}/> },
  { name: 'Django', level: 70, icon: <SiDjango color="#092e20" size={32}/> },
  { name: 'MySQL', level: 70, icon: <SiMysql color="#00758f" size={32}/> },
]

const Skill = () => {
  return (
    <section className='skill-section py-5' id='skill' data-aos="fade-up">
      <h1 className='text-center mb-4 text-warning fw-bold'>My Skills</h1>
      <div className='skill-grid mx-auto'>
        {skills.map((skill, idx) => (
          <div className='skill-card' key={idx} data-aos="zoom-in-up">
            <div className='skill-header'>
              <span className='skill-icon'>{skill.icon}</span>
              <span className='skill-title'>{skill.name}</span>
              <span className='skill-percent'>{skill.level}%</span>
            </div>
            <div className='modern-progress'>
              <div
                className='modern-progress-bar'
                style={{width: `${skill.level}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
