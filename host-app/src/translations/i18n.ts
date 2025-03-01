import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslationsHost from '../locales/en.json';
import esTranslationsHost from '../locales/es.json';



const resources = {
  en: {
    translation: {
      ...enTranslationsHost,
      titleApp1: "Rick and Morty Characters",
      titleApp2: "Harry Potter Characters",
      species: "Species",
      status: "Status",
      gender: "Gender",
    }
  },
  es: {
    translation: {
      ...esTranslationsHost,
      titleApp1: "Personajes de Rick y Morty",
      titleApp2: "Personajes de Harry Potter",
      species: "Especie",
      status: "Estado",
      gender: "Genero",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma por defecto
  interpolation: { escapeValue: false },
  debug: true
});

export default i18n;
