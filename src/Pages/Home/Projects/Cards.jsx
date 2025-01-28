import React , {useContext} from 'react'
import Card from './Card'
import { viewContext,viewProjectDetails } from '../../../Context'


function Cards() {

  const  contexto = useContext(viewContext);

  const {view, setView} = contexto;
  const {setViewProject} = useContext(viewProjectDetails)

  return (
    <div className= 'cards-proyects-container'>
        <Card 
          name="Tracking Tool" 
          image="src\Pages\Home\Projects\Tracking-tool-img.png"
          description="Herramienta para mi trabajo actual que permite arrojar dos hojas de excel y mostrar informacion en pantalla en un orden especifico"
          method ={
            ()=>{
            setView("Projects-details") 
            setViewProject("TrackingTool")
            }
          }
        />
        <Card 
          name="Extension Google Chrome" 
          image="src\Pages\Home\Projects\Tracking-tool-img.png"
          description="Herramienta para mi trabajo actual que obtiene informacion cuando determinados elementos de la página estan en pantalla y devuelve informacion dentro de la misma pagina"
          method ={
            ()=>{
            setView("Projects-details") 
            setViewProject("ExtensionGoogleChrome")
            }
          }
        />
        <Card 
          name="Metronomo" 
          image="src\Pages\Home\Projects\Tracking-tool-img.png"
          description="Aplicacion que contiene un metronomo y un generador de números aleatorios para fines prácticos, musicales"
          method ={
            ()=>{
            setView("Projects-details") 
            setViewProject("Metronomo")
            }
          }
        />
    </div>
  )
}

export default Cards