import React from 'react'
import './Header.css'
import { scrollToSection } from '../../../scrollToSection' 

function Header(props) {

  return (
    <div className="header">
        <div>
            <img src = "src\Pages\Home\Header\logo.png" className ="logo-img" />
        </div>
        <div className ="nav-container">
            <nav>
                    <a href="#main" onClick={(e) => {
              e.preventDefault();
              scrollToSection('main')}} className ="nav-link">Inicio</a>
                    <a href="#section2" className ="nav-link">Sobre mi</a>
                    <a className ="nav-link">Proyectos</a>
                    <a className ="nav-link">Contacto</a>
            </nav>
        </div> 
    </div>
  )
}

export default Header