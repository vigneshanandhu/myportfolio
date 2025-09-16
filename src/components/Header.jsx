import React, { useState } from 'react'
import '../styles/Header.css'
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="d-flex firstflex px-3 py-2">
      <a className="text-black fw-bold title" href="#">Vignesh V</a>

      {/* Hamburger icon */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="icon1"
      >
        <FaBars />
      </button>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <ul className="d-flex secondflex">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      {toggleMenu && (
        <nav className="mobile-nav">
          <ul
            onClick={() => setToggleMenu(false)}
            className="d-flex thirdflex text-center"
          >
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
