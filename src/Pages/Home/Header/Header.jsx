import React from 'react'
import './Header.css'
import { scrollToSection } from '../../../scrollToSection' 
import { Link } from 'react-router-dom'

function Header(props) {

  return (
    <div className="header">
        <div>
            <img src = "/images/logo.png" className ="logo-img" />
        </div>
        <div className ="nav-container">
            <nav>
                    <Link to="/"  className ="nav-link">Inicio</Link>
                    <Link to="/About-me" className ="nav-link">Sobre mi</Link>
                    <Link to="/Projects" className ="nav-link">Proyectos</Link>
                    <Link to="Contact-me" className ="nav-link">Contacto</Link>
            </nav>
        </div> 
    </div>
  )
}

export default Header