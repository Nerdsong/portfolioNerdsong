import { useState, useEffect, useRef }  from 'react'
import { Route, Routes,useLocation } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ProjectsDetails from './Pages/Projects-details/ProjectsDetails'
import Header from './Pages/Header/Header'
import Projects from './Pages/Projects/Projects'
import AboutMe from './Pages/AboutMe/AboutMe'
import ContactMe from './Pages/ContactMe/ContactMe'
import './i18n';


function App() {
  const location = useLocation(); 
  const [showVideo, setShowVideo] = useState(false); 
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current
    // Cuando la ruta cambia, muestra el video
    video.play()//sometimes the video is stooped due to browser configuration when it has too much time in the background 
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
    ref={videoRef}
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
    <source src="/videos/static.mp4" type="video/mp4" />
  </video>
      </div>  
    )
 
}

export default App
