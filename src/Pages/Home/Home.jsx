import React from 'react'
import raytrace from '/src/assets/raytrace.json'
import "./Home.css"
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LightScene from '../LightScene';

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
    <>
      <div className="main-container">
        <div className="main-content">
            <div className="intro-container">
                <div className = "main-intro">
                <h1>Nelson Adarmes</h1>
                <h3>{t('home.subtitle')}</h3>
                <div className='text-wrapper'>
                  <p>{t('home.text1')}</p>
                  <p>{t('home.text2')}</p>
                  <p>{t('home.text3')}</p>
                </div>
                <button onClick= {() => navigate('/Projects')} >{t('home.button1')} </button>
                <button onClick={() => navigate('/Contact-me')}>{t('home.button2')}</button>
            </div>
          
            </div>
        </div>
      </div>
      </>
  )
}

export default MainContent