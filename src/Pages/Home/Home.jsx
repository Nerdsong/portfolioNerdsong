import React from 'react'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import Proyects from './Proyects/Proyects'
import AboutMe from './AboutMe/AboutMe'
import ContactMe from './ContactMe/ContactMe'

function Home() {
  return (
    <div className = "Home">
    <Header/>
    <MainContent/>
    <Proyects/>
    <AboutMe/>
    <ContactMe/>
    </div>
  )
}

export default Home