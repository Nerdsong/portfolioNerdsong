import React from 'react'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'
import "./Home.css"
import { registerRef } from '../../scrollToSection'

function Home() {
  const mainContentRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div className = "Home">
      <Header/>
      <div ref={mainContentRef}>
        <MainContent/>
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div ref={aboutMeRef}>
        <AboutMe/>
      </div>
      <div ref={contactMeRef}> 
        <ContactMe/>
      </div>
    </div>
  )
}

export default Home