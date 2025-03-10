import React from 'react'
import raytrace from '/src/assets/raytrace.json'
import "./MainContent.css"
import Lottie from 'react-lottie'


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: raytrace,
  rendererSettings:{
    preserveAspectRatio: 'xMidYMid slice'
  }
};

//<Lottie options = {defaultOptions}/>

function MainContent() {
  
  return (
    <div className="main-container">
      <div className="main-content">
          <div className="intro-container">
              <div className = "main-intro">
              <h1>Nelson Adarmes</h1>
              <h3>Desarrollador web FrontEnd.</h3>
              <p>Soy estudiante de la carrera de tecnicatura en programacion de la Universidad Tecnologica Nacional (UTN). <br/><br/>
                  Mi portafolio está compuesto por proyectos en los que he buscado 
                  enfrentarme<br/> a problemas reales, en un intento por ganar experiencia y conocimiento.<br/><br/>
                  ¡Te invito a verlos! 
              </p>
              <button>Ver proyectos</button> <button>Contactarme</button>
              <div className= "animation-container">
              
              </div>
               </div>
        
          </div>
      </div>
      </div>
  )
}

export default MainContent