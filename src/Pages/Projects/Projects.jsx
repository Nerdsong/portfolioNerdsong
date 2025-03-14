import React from 'react'
import Cards from './Cards'
import "./Projects.css"
import { useTranslation } from 'react-i18next';

function Projects() {
  const {t} = useTranslation();

  return (
    <div className ="proyects-container">
        <div className="title-section2">
            <h1>{t('projects.title')}</h1>
        </div>
        
        <Cards/>
        
    </div> 
  )
}

export default Projects