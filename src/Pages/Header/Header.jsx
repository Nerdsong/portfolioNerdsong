import React from 'react';
import './Header.css';
import { scrollToSection } from '../../scrollToSection';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header(props) {
  const { t, i18n } = useTranslation();


  const currentLanguage = i18n.language;

 
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="header">
      <div>
        <img src="/images/logo.png" className="logo-img" alt="Logo" />
      </div>
      <div className="nav-container">
        <nav>
          <Link to="/" className="nav-link">
            {t('header.nav.home')}
          </Link>
          <Link to="/About-me" className="nav-link">
            {t('header.nav.about')}
          </Link>
          <Link to="/Projects" className="nav-link">
            {t('header.nav.projects')}
          </Link>
          <Link to="/Contact-me" className="nav-link">
            {t('header.nav.contact')}
          </Link>
          <div className="language-switcher">
            <button onClick={toggleLanguage} className="language-button">
              {currentLanguage === 'en' ? (
                <>
                  <img src="/images/us-flag.png" alt="English Flag" className="flag-icon" />
                  <span>EN</span>
                </>
              ) : (
                <>
                  <img src="/images/es-flag.png" alt="Spanish Flag" className="flag-icon" />
                  <span>ESP</span>
                </>
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;