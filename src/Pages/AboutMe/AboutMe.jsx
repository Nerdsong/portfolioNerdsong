import React from 'react'
import "./AboutMe.css"

function AboutMe() {
  return (
    <div className ="aboutme-container">
        <div className="title-section3">
            <h1>Sobre mi</h1>
        </div>
        <div className='aboutme-content'>
          <img className="profile-photo" src="/images/AboutMePortfolio.jpg" alt="foto-nelson" />
          <div className='aboutme-details'>
            <div className='details-container'>
              <h3>Tecnologias: </h3>
              <div className='technologies-container'>
                <div className= "language-element">
                  <img className = "icon-language" src="/images/icons/HTML-icon.png" alt="HTML-icon"/>
                  <p>HTML</p>
                </div>
                <div className= "language-element">
                  <img className = "icon-language" src="/images/icons/CSS-icon.png" alt="CSS-icon"/>
                  <p>CSS</p>
                </div>
                <div className= "language-element">
                  <img className = "icon-language" src="/images/icons/JS-icon.png" alt="JS-icon" />
                  <p>JavaScript</p>
                </div>
                <div className= "language-element">
                  <img className = "icon-language" src="/images/icons/React-icon.png" alt="React-icon"/>
                  <p>React</p>
                </div>
                <div className= "language-element">
                  <img className = "icon-language" src="/images/icons/C++-icon.png" alt="C++-icon"/>
                  <p>C++</p>
                </div>
              </div>
            </div>
            <div className='details-container'>
              <h3>Formacion: </h3>
              <p>
              &nbsp;Tecnicatura universitaria en programación - Universidad Técnologica Nacional [UTN] <b>(En progreso) </b>
              </p>
            </div>
            <div className='details-container'>
              <h3>Idiomas: </h3>
              <ul>
                <li>Inglés avanzado (B2)</li>
                <li>Español nativo</li>
              </ul>
            </div>
            <div className='details-container' id="cv-container">
                <h3>CV: </h3>
                <a href="/CV Nelson Adarmes.pdf" className="icon" download="CV Nelson Adarmes.pdf" ></a>
            </div>
            <div className='details-container'>
              <p>
                Además de mis estudios universitarios llevo casi 3 años estudiando programación por mi cuenta. Mi stack actual me posiciona como desarollador Front-End pero tengo interés en ser FullStack, por lo tanto, estoy aprendiendo SQL y Node.js, tambien conozco lo más básico de Python. 
                Soy una persona bastante creativa y resolutiva, cuento con más de 4 años de experiencia en customer service y 3 años como coordinador de logistica para un equipo técnico, esto ha permitido que mis habilidades blandas esten bastante desarrolladas pudiendo comunicarme de manera efectiva por cualquier medio y con altas capacidades de trabajo colaborativo.
              </p>
            </div>
          </div>
          
        </div>
    </div> 
  )
}

export default AboutMe