
import { FC } from "react";
import { t } from 'i18next'
import { CharacterCardContainer, CharacterCardGender, CharacterCardImage, CharacterCardName, CharacterCardSpecies } from "../styles/CharacteCardStyles"
export interface CharacterProps {
  name: string;
  image: string;
  species: string;
  gender: string;
}

const CharacterCard: FC<CharacterProps> = ({ name, image, species, gender }) => {
  return (
    <CharacterCardContainer>
      <CharacterCardName>{name}</CharacterCardName>
      <CharacterCardImage src={image} alt={name} />
      <CharacterCardSpecies>{`${t('species')} :`}{species}</CharacterCardSpecies>
      <CharacterCardGender>{`${t('gender')} :`}{gender}</CharacterCardGender>
    </CharacterCardContainer >
  )
}

export default CharacterCard
