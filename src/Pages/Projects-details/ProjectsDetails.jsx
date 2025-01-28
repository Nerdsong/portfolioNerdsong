import React, { useContext, useState } from 'react'
import Header from '../Home/Header/Header'
ProjectDetailsContainer
import { viewProjectDetails } from '../../Context'
import {slides} from "./images/projectImages.json"
import "./Project-details.css"
import ProjectDetailsContainer from './ProjectDetailsContainer'

function ProjectsDetails() {

  const {viewProject} = useContext (viewProjectDetails);

  if (viewProject === "TrackingTool"){
    return (
      <div className = "main-container-project-details ">
        <Header/>        
        <ProjectDetailsContainer 
            title= "Tracking Tool"
            description= "Desarrolé una aplicación web específicamente para simplificar y optimizar el manejo de datos en mi trabajo actual. El sistema de la empresa para la que trabajo permite descargar un reporte en formato excel, Esta herramienta permite cargar ese reporte sólo arrastrándolas y organiza la información de forma eficiente y clara en pantalla "
            imagesSlides={slides}
        />
      </div> 
    )
  }
  else if(viewProject === "ExtensionGoogleChrome"){
    return (
      <div className = "main-container-project-details">
        <Header/>        
        <ProjectDetailsContainer 
            title= "Google extension"
            description= "Desarrollé una extension para el navegador de google que toma datos del DOM, realiza una busqueda interna e inyecta codigo en el. Permite poner una 'mascara' con informacion util encima del sistema web de mi trabajo actual"
            imagesSlides={slides}
        />
      </div>
    )
  }
  else if(viewProject === "Metronomo"){
    return( 
     <div className = "main-container-project-details">
        <Header/>        
        <ProjectDetailsContainer 
            title= "Metronomo"
            description= "Aplicacion que contiene un metronomo y un generador de números aleatorios para fines prácticos, musicales"
            imagesSlides={slides}
        />
      </div>
    )
  }
}

export default ProjectsDetails 