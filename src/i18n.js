import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // JSON dil fayllarını yükləmək üçün
  .use(LanguageDetector) // İstifadəçinin brauzer dilini aşkar etmək üçün
  .use(initReactI18next) // React-i18next inteqrasiyası üçün
  .init({
    supportedLngs: ["en", "az"],
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // JSON faylların yolu
    },
  });

export default i18n;
