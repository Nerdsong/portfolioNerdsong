import React from 'react'
import Cards from './Cards'
import "./Projects.css"
import { useScrollToSection } from '../../../scrollToSection';

function Projects() {

  const { sections } = useScrollToSection();


  return (
    <div className ="proyects-container">
        <div className="title-section2">
            <h1>Proyectos</h1>
        </div>
        
        <Cards/>
        
    </div> 
  )
}

export default Projects