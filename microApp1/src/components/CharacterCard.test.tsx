import { render, screen } from '@testing-library/react';
import CharacterCard, { CharacterProps } from './CharacterCard';
import { I18nextProvider } from "react-i18next";
import i18n from "../translations/i18n";
import { JSX } from 'react';

const mockCharacter: CharacterProps = {
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  species: 'Human',
  status: 'Alive',
};


describe('CharacterCard', () => {
  const renderWithI118n = (component: JSX.Element) => render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);

  it('should renders character name correctly', () => {
    renderWithI118n(<CharacterCard {...mockCharacter} />)
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
  });

  it('should renders character image correctly', () => {
    renderWithI118n(<CharacterCard {...mockCharacter} />)
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', mockCharacter.image)
    expect(image).toHaveAttribute('alt', mockCharacter.name)
  })

  it('should renders character species correctly', () => {
    renderWithI118n(<CharacterCard {...mockCharacter} />)
    expect(screen.getByText(/species/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
  })

});
