import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next';
import data from "../../Language-files/es.json";


function Cards() {
  const {t} = useTranslation();
  return (
    <div className= 'cards-proyects-container'>
        <Card
          name={t("projects.content.0.projectName")}
          image="/projectsFiles/projectImages/Portfolio-image.png"
          description={t("projects.content.0.shortDescription")}
          rute="/Projects-details/Portafolio"
        />
        <Card 
          name={t("projects.content.1.projectName")} 
          image="/projectsFiles/projectImages/Tracking-tool-image.png"
          description={t("projects.content.1.shortDescription")}
          rute="/Projects-details/Tracking-tool"
          />
        <Card 
          name={t("projects.content.2.projectName")}
          image="src/Pages/Home/Projects/Tracking-tool-img.png"
          description={t("projects.content.2.shortDescription")}
          rute="/Projects-details/Extension-google-chrome"
        />
        <Card 
          name={t("projects.content.3.projectName")} 
          image="/projectsFiles/projectImages/Metronomo-image.png"
          description={t("projects.content.3.shortDescription")}
          rute="/Projects-details/Metronomo"
        />
    </div>
  )
}

export default Cards