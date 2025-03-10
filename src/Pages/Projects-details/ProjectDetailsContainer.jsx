import React from 'react'
import Carousel from './Carousel'
import "./ProjectDetailsContainer.css"

function ProjectDetailsContainer({title,description,imagesSlides}) {
  return (
    <div className = "containter-project-content project-details">
        <h1>{title}</h1>
        <Carousel images= {imagesSlides} />
        <p>{description}</p>
    </div>
 )
}

export default ProjectDetailsContainer