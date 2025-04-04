import React from 'react'
import Cards from './Cards'
import "./Projects.css"
import { useTranslation } from 'react-i18next';
import LightScene from '../LightScene';

function Projects() {
  const {t} = useTranslation();

  return (
    <>
    <div className="main-container3">
    <div className ="proyects-container">
        <div className="title-section2">
            <h1>{t('projects.title')}</h1>
        </div>
        
        <Cards/>
        
    </div>
    </div>
    </> 
  )
}

export default Projects