import { useState, createContext } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Lottie from 'react-lottie'
import ProjectsDetails from './Pages/Projects-details/ProjectsDetails'
import { viewContext, viewProjectDetails } from './Context';

function App() {


  const [view, setView] = useState("home");
  const [viewProject, setViewProject] = useState ("TrackingTool");

  if (view == "home"){
    return (
      <viewContext.Provider value={{view,setView}}>
      <viewProjectDetails.Provider value= {{setViewProject}}>
        <Home/>
      </viewProjectDetails.Provider>
      </viewContext.Provider>
    )
  }
  else if (view == "Projects-details"){
    return(
      <viewProjectDetails.Provider value={{viewProject}}>
        <ProjectsDetails/>
      </viewProjectDetails.Provider>  
    )
  }
}

export default App
