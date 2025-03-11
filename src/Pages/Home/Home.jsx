import React from 'react'
import MainContent from './MainContent/MainContent'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'
import "./Home.css"
import { useRef } from 'react'

function Home() {
  const mainContentRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div className = "Home">
      <div ref={mainContentRef}>
        <MainContent/>
      </div>
    </div>
  )
}

export default Home