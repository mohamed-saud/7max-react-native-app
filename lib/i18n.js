import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

// ✅ Force Arabic as the initial language
i18n.use(initReactI18next).init({
  resources,
  lng: 'ar', // <-- Arabic is the initial language
  fallbackLng: 'ar', // fallback to Arabic
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false, // React already handles escaping
  },
});

export default i18n;
