import React from 'react'
import "./Project-details.css"
import ProjectDetailsContainer from './ProjectDetailsContainer'
import { useParams } from 'react-router-dom'
import data from '../../Language-files/es.json'
import { useTranslation } from 'react-i18next'


function ProjectsDetails() {

  const {t} = useTranslation();

  const {projectName} = useParams();
  
  const projectToRender = data.projects.content.find((dataItem) => dataItem.id === projectName);

  const projectIndex = data.projects.content.findIndex((dataItem) => dataItem.id === projectName)
    
    if(projectToRender !== undefined){
      return(
        <div className = "main-container-project-details ">     
          <ProjectDetailsContainer 
            title= {t(`projects.content.${projectIndex}.projectName`)}
            description= {t(`projects.content.${projectIndex}.longDescription`)}
            imagesSlides={projectToRender.images}
            aditionalContent={projectToRender.aditionalContent}
          />
        </div>
      )
    }
    else{
      return(
        <h1>Not found</h1>
      )
    } 
    
}


export default ProjectsDetails 