import React from 'react';
import './AboutMe.css';
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="aboutme-container">
      <div className="title-section3">
        <h1>{t('about.title')}</h1>
      </div>
      <div className="aboutme-content">
        <img className="profile-photo" src="/images/AboutMePortfolio.jpg" alt="foto-nelson" />
        <div className="aboutme-details">
          <div className="details-container">
            <h3>{t('about.technologies')}</h3>
            <div className="technologies-container">
              <div className="language-element">
                <img className="icon-language" src="/images/icons/HTML-icon.png" alt="HTML-icon" />
                <p>HTML</p>
              </div>
              <div className="language-element">
                <img className="icon-language" src="/images/icons/CSS-icon.png" alt="CSS-icon" />
                <p>CSS</p>
              </div>
              <div className="language-element">
                <img className="icon-language" src="/images/icons/JS-icon.png" alt="JS-icon" />
                <p>JavaScript</p>
              </div>
              <div className="language-element">
                <img className="icon-language" src="/images/icons/React-icon.png" alt="React-icon" />
                <p>React</p>
              </div>
              <div className="language-element">
                <img className="icon-language" src="/images/icons/C++-icon.png" alt="C++-icon" />
                <p>C++</p>
              </div>
            </div>
          </div>
          <div className="details-container">
            <h3>{t('about.education.subtitle')}</h3>
            <p>
              {t('about.education.text')}
            </p>
          </div>
          <div className="details-container">
            <h3>{t('about.languages.subtitle')}</h3>
            <ul>
              <li>{t('about.languages.english')}</li>
              <li>{t('about.languages.spanish')}</li>
            </ul>
          </div>
          <div className="details-container" id="cv-container">
            <h3>CV:</h3>
            <a href="/CV Nelson Adarmes.pdf" className="icon" download="CV Nelson Adarmes.pdf"></a>
          </div>
          <div className="details-container">
            <p>{t('about.text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;