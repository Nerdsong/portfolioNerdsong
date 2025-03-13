import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import "./ProjectDetailsContainer.css"

//
function ProjectDetailsContainer({title,description,imagesSlides,aditionalContent=null}) {

  const [descriptionText, setDescriptionText] = useState("...") 

  useEffect(()=> {
      prepareDescriptionToRender().then((text) => {
          const paragraph = text.split(".  ")
          const descriptionProcessed = paragraph.map((block)=> {return <p>{block}</p>})  
          setDescriptionText(descriptionProcessed)
        }),[]
    }
  )

  const prepareDescriptionToRender = async () =>{
    const response = await fetch(description)
    const text = await response.text()
    console.log(text);
    return text
  }

  const renderAditionalContent = () => {
    if (!aditionalContent) {return null} // I've learned this expresion helps to evaluate the value of the variable in a boolean logic of javascript where some values like  null, undefined, 0, "" are false and others like empty arrays, functions, strings, numbers (non zero), etc... are true
    
    else{  
      return (
        aditionalContent.map((item, index)=>{
          switch(item.type){
            case "link":
              return(
                <div className='aditional-content-element' key={"div"+index}>
                  <a key={index} href={item.url} className='www-icon'></a>
                  <p key={"p"+index}>{item.name}</p>
                </div>
              )
            case "file":
              return(
                <div className='aditional-content-element' key={"div"+index}>
                  <a key={index} href={item.url} className= "file-icon" download={item.downloadName}></a>
                  <p key={"p"+index}>{item.name}</p>
                </div>
                
              )  
            }
          }
        )  
      )
    }
  } 

  

  return (
    <div className = "containter-project-content project-details">
        <h1>{title}</h1>
        <Carousel images= {imagesSlides} />
        <div className='description-text'>{descriptionText}</div>
        <div className='aditional-content'>
          {renderAditionalContent()}
        </div>
    </div>
 )
}

export default ProjectDetailsContainer