import React from 'react'
import '..//styles/Projects.css'
import ProjectImg1 from '../images/project-image 1.jpg'
import ProjectImg2 from '../images/project-image 2.jpg'
import ProjectImg3 from '../images/project-image 3.jpg'
import ProjectImg4 from '../images/project-image 4.jpg'
const Projects = () => {
  const config = {
      projects : [
        {
          image:ProjectImg1,
          description:'A Eccomerce website. Built with Html, Css and JavaScript.',
          viewlink:'https://simpleshop-eight.vercel.app/',
          codelink:'https://github.com/vigneshanandhu/simpleshop'
        },
        {
          image:ProjectImg2,
          description:'A Food website. Built with React.js and Bootstrap.',
          viewlink:'https://farm2-home-three.vercel.app/',
          codelink:'https://github.com/vigneshanandhu/Farm2Home'
        },
        {
          image:ProjectImg3,
          description:'My Portfolio website. Built with React.js and Bootstrap.',
          viewlink:'https://myportfolio-orcin-gamma.vercel.app/',
          codelink:'https://github.com/vigneshanandhu/myportfolio'
        },
        {
          image:ProjectImg4,
          description:'My Django website. Built with Django and MySQL.',
          viewlink:'https://viki-s-shop-1.onrender.com/',
          codelink:'https://github.com/vigneshanandhu/viki-s-shop'
        }
      ]
  }
  return (
    <section className=' project-div flex-column text-white h-auto pb-5' id='project' data-aos="fade-up">
        <div className=''>
            <div className='project-heading' data-aos="fade-down">
                <h1 className='project-title text-warning'>Projects</h1>
                <p className='project-title-para'>These are some of my best projects. I have built these with React.js ,bootsrap , Html, Css, JavaScript. Check them out.</p>
            </div>
        </div>
        <div id = "project-card" className='mt-3 d-flex gap-5 flex-wrap  '>
          {config.projects.map((project, idx)=>(
                <div className='position-relative proj-img' key={idx} data-aos="zoom-in-up">
                    <img className='project-image' src={project.image} alt="" />
                        <div className='position-absolute project-dis '>
                           <p className='text-center py-3 px-3'>{project.description}</p>
                           <div className="d-flex justify-content-center gap-2">
                                <a className="btn" target='_blank' href={project.viewlink}>View Project</a>
                                <a className="btn" target='_blank' href={project.codelink}>View Code</a>
                           </div>
                        </div>
                 </div>
          ))}
        </div>
    </section>
  )
}

export default Projects