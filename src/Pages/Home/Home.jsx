import React from 'react'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'

function Home() {
  return (
    <div className = "Home">
    <Header/>
    <MainContent/>
    <Projects/>
    <AboutMe/>
    <ContactMe/>
    </div>
  )
}

export default Home