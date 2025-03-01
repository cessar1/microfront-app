import { useTranslation } from "react-i18next";
import { StyledSwitcher } from "./Styles/LanguageSwitcherStyles";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "en" | "es") => {
    i18n.changeLanguage(lang);
  };

  return (
    <StyledSwitcher>
      <button onClick={() => changeLanguage("es")}>
        Español
      </button>
      <button onClick={() => changeLanguage("en")}>
        English
      </button>
    </StyledSwitcher>
  );
};

export default LanguageSwitcher;
