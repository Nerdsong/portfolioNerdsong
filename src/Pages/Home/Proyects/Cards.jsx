import React from 'react'

function Cards() {
  return (
    <div className= 'cards-proyects-container'>
        <a className="card" href="trackingTool.html">
                    <img src="src/Pages/Home/Proyects/Tracking-tool-img.png"/>
                    <h4>Tracking tool</h4>
                    <p>Herramienta para mi trabajo actual que permite arrojar dos hojas de excel y mostrar informacion en pantalla en un orden especifico</p>
                </a>
                <div className="card">
                    <img src="src/Pages/Home/Proyects/Tracking-tool-img.png"/>
                    <h4>Extension Google Chrome</h4>
                    <p>Herramienta para mi trabajo actual que obtiene informacion cuando determinados elementos de la página estan en pantalla y devuelve informacion dentro de la misma pag</p>
                </div>
                <div className="card">
                    <img src="src/Pages/Home/Proyects/Tracking-tool-img.png"/>
                    <h4>Metrónomo</h4>
                    <p>Aplicacion que contiene un metronomo y un generador de números aleatorios para fines prácticos, musicales</p>
                </div>
                <div className="card">
                    <img src="src/Pages/Home/Proyects/Tracking-tool-img.png"/>
                    <h4>Tracking tool</h4>
                    <p>Herramienta que permite arrojar dos hojas de excel y mostrar informacion en pantalla en un orden especifico</p>
                </div>
    </div>
  )
}

export default Cards