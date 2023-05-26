import * as RNLocalize from 'react-native-localize';
import en from './en.json';
import hi from './hi.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: en },
  hi: { translation: hi }
};

i18n.use(initReactI18next).init({
  resources,
  lng: RNLocalize.getLocales()?.[0].languageCode,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;