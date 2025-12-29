import React from 'react'
import Card from './Card'
import { useTranslation } from 'react-i18next';



function Cards() {
  const {t} = useTranslation();
  return (
    <div className= 'cards-proyects-container'>
        <Card 
          name={t("projects.content.3.projectName")} 
          image="/projectsFiles/projectImages/Tracking-board-image3.png"
          description={t("projects.content.3.shortDescription")}
          rute="/Projects-details/Tracking-Board"
        />
        <Card
          name={t("projects.content.2.projectName")}
          image="/projectsFiles/projectImages/Paint-board-image2.png"
          description={t("projects.content.2.shortDescription")}
          rute="/Projects-details/Paint-board"
        />

        <Card
          name={t("projects.content.1.projectName")}
          image="/projectsFiles/projectImages/Weather-app-image.png"
          description={t("projects.content.1.shortDescription")}
          rute="/Projects-details/Weather-app"
        />

        <Card
          name={t("projects.content.0.projectName")}
          image="/projectsFiles/projectImages/Portfolio-image.png"
          description={t("projects.content.0.shortDescription")}
          rute="/Projects-details/Portafolio"
        />
    </div>
  )
}

export default Cards