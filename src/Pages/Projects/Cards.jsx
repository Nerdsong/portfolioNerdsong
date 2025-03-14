import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next';


function Cards() {
  const {t} = useTranslation();
  return (
    <div className= 'cards-proyects-container'>
        <Card 
          name={t("projects.trackingTool.subtitle")} 
          image="/projectsFiles/projectImages/Tracking-tool-image.png"
          description={t("projects.trackingTool.text")} 
          rute="/Projects-details/Tracking-tool"
          />
        <Card 
          name={t("projects.chromeExtension.subtitle")}
          image="src/Pages/Home/Projects/Tracking-tool-img.png"
          description={t("projects.chromeExtension.text")}
          rute="/Projects-details/Extension-google-chrome"
        />
        <Card 
          name={t("projects.metronome.subtitle")}
          image="/projectsFiles/projectImages/Metronomo-image.png"
          description={t("projects.metronome.text")}
          rute="/Projects-details/Metronomo"
        />
    </div>
  )
}

export default Cards