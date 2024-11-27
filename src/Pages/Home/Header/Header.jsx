import React from 'react'

function Header() {
  return (
    <div className="header">
        <div>
            <img src = "src\Pages\Home\Header\logo.png" className ="logo-img" />
        </div>
        <div className ="nav-container">
            <nav>
                    <a href ="index.html" className ="nav-link">Inicio</a>
                    <a href ="" className ="nav-link">Sobre mi</a>
                    <a href ="" className ="nav-link">Proyectos</a>
                    <a href ="" className ="nav-link">Contacto</a>
            </nav>
        </div> 
    </div>
  )
}

export default Header