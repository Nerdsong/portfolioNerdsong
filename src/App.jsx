import { useState, useEffect }  from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Lottie from 'react-lottie'
import ProjectsDetails from './Pages/Projects-details/ProjectsDetails'
import { Route, Routes,useLocation } from 'react-router-dom'
import Header from './Pages/Home/Header/Header'
import Projects from './Pages/Home/Projects/Projects'
import AboutMe from './Pages/Home/AboutMe/AboutMe'
import ContactMe from './Pages/Home/ContactMe/ContactMe'


function App() {
  const location = useLocation(); // Obtiene la ubicación actual (ruta)
  const [showVideo, setShowVideo] = useState(false); // Estado para controlar la visibilidad del video

  useEffect(() => {
    // Cuando la ruta cambia, muestra el video
    setShowVideo(true);

    // Después de 1 segundo, oculta el video nuevamente
    const timeout = setTimeout(() => {
      setShowVideo(false);
    }, 300);

    // Limpia el timeout si el componente se desmonta o la ruta cambia nuevamente
    return () => clearTimeout(timeout);
  }, [location]); // Se ejecuta cada vez que la ruta cambia

    return (
      <div> 
        <Header/>
        <Routes>
          <Route path= "/" element= {<Home/>}/>
          <Route path= "/Projects" element= {<Projects/>}/>
          <Route path= "/Projects-details/:projectName" element ={<ProjectsDetails/>}/>
          <Route path="/About-me" element = {<AboutMe/>}/>
          <Route path="/Contact-me" element = {<ContactMe/>}/>
        </Routes>
        <video
    autoPlay
    loop
    muted
    playsInline
    className={showVideo ? "video-visible" : "video-hidden"}
    style={{
      position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 999,
          objectFit: "cover",

    }}
  >
    <source src="/images/static.mp4" type="video/mp4" />
  </video>
      </div>  
    )
 
}

export default App
