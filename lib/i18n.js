import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 👇 Safe fallback: handles undefined locale
const deviceLocale = (Localization?.locale || 'en').split('-')[0];

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      account: 'Accounts',
      online: 'Online',
    },
  },
  ar: {
    translation: {
      welcome: 'مرحباً',
      account: 'الحسابات',
      online: 'متصل',
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: deviceLocale === 'ar' ? 'ar' : 'en', // ✅ No startsWith
  fallbackLng: 'ae',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
