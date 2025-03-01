
import { FC } from "react";
import { t } from 'i18next'
import { CharacterCardContainer, CharacterCardImage, CharacterCardName, CharacterCardSpecies, CharacterCardStatus, StatusText } from "../styles/CharacteCardStyles"
export interface CharacterProps {
  name: string;
  image: string;
  species: string;
  status: string;
}

const CharacterCard: FC<CharacterProps> = ({ name, image, species, status }) => {
  console.log('Traducción de species:', t('species'));

  return (
    <CharacterCardContainer>
      <CharacterCardName>{name}</CharacterCardName>
      <CharacterCardImage src={image} alt={name} />
      <CharacterCardSpecies>{`${t('species')} :`}{species}</CharacterCardSpecies>
      <CharacterCardStatus>
        {`${t('status')} :`} <StatusText status={status}>{status}</StatusText>
      </CharacterCardStatus>
    </CharacterCardContainer >
  )
}

export default CharacterCard
