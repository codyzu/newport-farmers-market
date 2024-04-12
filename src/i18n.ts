import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './assets/locales/en.json';
import esTranslation from './assets/locales/es.json';

// eslint-disable-next-line import/no-named-as-default-member
void i18n
  .use(LanguageDetector) // Detects browser's current language
  // .use(Backend)
  .use(initReactI18next) // Initializes i18next with react-i18next
  .init({
    debug: true,
    // We don't have much to translate, we don't bother with the Backend plugin since it creates complexity around caching
    resources: {
      en: {translation: enTranslation},
      es: {translation: esTranslation},
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // This ensures raw HTML in translations (if needed)
    },
  });

export {default} from 'i18next';
