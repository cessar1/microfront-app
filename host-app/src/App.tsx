
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import RickAndMortyApp from 'microApp1/App'
import HarryPotterApp from 'microApp2/App'
import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'
import { AppContainer } from './components/Styles/App';

function App() {
  const { t } = useTranslation();
  const [selectedSeries, setSelectedSeries] = useState<"RickAndMorty" | "HarryPotter" | null>(null);

  return (
    <AppContainer>
      <LanguageSwitcher />
      <h1>{t("title")}</h1>
      <button onClick={() => setSelectedSeries("RickAndMorty")}>{t("loadRyckAndMortyCharacters")}</button>
      <button onClick={() => setSelectedSeries("HarryPotter")}>{t("loadHarryPotterCharacters")}</button>
      {selectedSeries === "RickAndMorty" && <RickAndMortyApp />}
      {selectedSeries === "HarryPotter" && <HarryPotterApp />}

    </AppContainer>


  )
}

export default App
