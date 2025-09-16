import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='main-container container-fluid px-0 mx-0'>
        <Header/>
        <Home/>
        <About/>
        <Skill/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
