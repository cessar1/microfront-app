import { render, screen, fireEvent } from "@testing-library/react"
import { I18nextProvider } from "react-i18next"
import i18n from "../translations/i18n";
import LanguageSwitcher from "./LanguageSwitcher"

describe("LanguageSwitcher Component", () => {
  it("debe cambiar el idioma a español cuando se presiona el botón 'Español'", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    const esButton = screen.getByText("Español");
    fireEvent.click(esButton);

    expect(i18n.language).toBe("es");
  });

  it("debe cambiar el idioma a inglés cuando se presiona el botón 'English'", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );

    const enButton = screen.getByText("English");
    fireEvent.click(enButton);

    expect(i18n.language).toBe("en");
  });
});
