import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './Language-files/en.json';
import esTranslations from './Language-files/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
  },
  lng: 'es', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already protects against XSS
  },
});

export default i18n;