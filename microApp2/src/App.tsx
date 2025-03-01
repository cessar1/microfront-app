// import './App.css'

import { t } from "i18next"
import { CharacterList } from "./components/CharacterList"
import { AppContainer, AppTitle } from "./styles/App"

function App() {

  return (
    <>
      <AppContainer>
      <AppTitle>{t("titleApp2")}</AppTitle>
      <CharacterList />
    </AppContainer>
    </>
  )
}

export default App
