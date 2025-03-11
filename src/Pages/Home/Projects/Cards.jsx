import React from 'react'
import Card from './Card'



function Cards() {

  return (
    <div className= 'cards-proyects-container'>
        <Card 
          name="Tracking Tool" 
          image="src/Pages/Home/Projects/Tracking-tool-img.png"
          description="Herramienta para mi trabajo actual que permite arrojar dos hojas de excel y mostrar informacion en pantalla en un orden especifico"
          rute="/Projects-details/Tracking-tool"
          />
        <Card 
          name="Extension Google Chrome" 
          image="src/Pages/Home/Projects/Tracking-tool-img.png"
          description="Herramienta para mi trabajo actual que obtiene informacion cuando determinados elementos de la página estan en pantalla y devuelve informacion dentro de la misma pagina"
          rute="/Projects-details/Extension-google-chrome"
        />
        <Card 
          name="Metronomo" 
          image="src/Pages/Home/Projects/Tracking-tool-img.png"
          description="Aplicacion que contiene un metronomo y un generador de números aleatorios para fines prácticos, musicales"
          rute="/Projects-details/Metronomo"
        />
    </div>
  )
}

export default Cards