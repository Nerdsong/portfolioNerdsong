import React from 'react'
import raytrace from '/src/assets/raytrace.json'
import "./Home.css"
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: raytrace,
  rendererSettings:{
    preserveAspectRatio: 'xMidYMid slice'
  }
};

//<Lottie options = {defaultOptions}/>

function MainContent() {
  
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="main-container">
      <div className="main-content">
          <div className="intro-container">
              <div className = "main-intro">
              <h1>Nelson Adarmes</h1>
              <h3>{t('home.subtitle')}</h3>
              <p>{t('home.text')}</p>
              <button onClick={() => navigate('/Projects')}>{t('home.button1')}</button>
               <button onClick={() => navigate('/Contact-me')}>{t('home.button2')}</button>
          </div>
        
          </div>
      </div>
      </div>
  )
}

export default MainContent