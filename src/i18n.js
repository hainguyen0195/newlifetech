import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import translationVI from './locales/vi/translation';
import translationEN from './locales/en/translation';

const lang = navigator.languages ? navigator.languages[0] : navigator.language;

const resources = {
  en: {
      translation: translationEN
  },
  vi: {
      translation: translationVI
  }
};


i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: lang.substr(0, 2),
        debug: true,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });
  export default i18n;