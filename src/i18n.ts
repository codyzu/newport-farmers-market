import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// eslint-disable-next-line import/no-named-as-default-member
void i18n
  .use(LanguageDetector) // Detects browser's current language
  .use(Backend)
  .use(initReactI18next) // Initializes i18next with react-i18next
  .init({
    debug: true,
    // We only support 'en' and 'es', avoid attempting to load 'en-US' on the backend.
    // This resolved errors due to being an SPA and cached missing assets.
    load: 'languageOnly',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // This ensures raw HTML in translations (if needed)
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // Saves preferences
    },
  });

export {default} from 'i18next';
