import { useEffect } from 'react';
import './App.css'
import { CharacterList } from './components/CharacterList'
import { useTranslation } from 'react-i18next';
import { AppContainer, AppTitle } from './styles/App';

interface Props {
  language: string;
}

function App({ language }: Props) {
  const { t, i18n } = useTranslation();

  console.log('linguaa:', language);

  useEffect(() => {
    i18n.changeLanguage(language); // Cambiar el idioma en i18next
  }, [language, i18n]);

  return (
    <AppContainer>
      <AppTitle>{t("titleApp1")}</AppTitle>
      <CharacterList />
    </AppContainer>
  )
}

export default App


