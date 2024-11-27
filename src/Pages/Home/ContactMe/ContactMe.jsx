import React from 'react'
import EmailTrace  from '/src/assets/emailRayTrace.json'

import Lottie from 'react-lottie'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: EmailTrace,
  rendererSettings:{
    preserveAspectRatio: 'xMidYMid slice'
  }
};


function ContactMe() {
  return (
    <div className ="contactme-container">
      <div className="title-section3">
        <h2>Contactame</h2>
      </div>
      <div className='aboutme-content'>
        <div className= 'form'>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required /><br /><br />

          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required /><br /><br />

          <label htmlFor="mensaje">Mensaje:</label><br />
          <textarea id="mensaje" name="mensaje" rows="5" required></textarea><br /><br />

          <button type="submit">Enviar</button>
        </div>
        <div>
            <div className= "animation-container2">
              <Lottie options = {defaultOptions}/>
            </div>
            <div className = "icons-container"> 
              <a href="https://www.linkedin.com/in/nerdsong/" clasName = "icon" id="linkedin-icon">
              </a>
              <a href="https://github.com/Nerdsong" clasName = "icon"  id="github-icon">
              </a>
              <a href="https://wa.me/+541123869921" clasName = "icon"  id="whatsapp-icon">
              </a>
            </div>
        </div>
      </div>
    </div> 
  )
}

export default ContactMe