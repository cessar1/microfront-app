

import { useCharacters } from "../hooks/useCharacters";
import { CharacterListContainer } from "../styles/CharacterListStyles"
import CharacterCard from "./CharacterCard"

export function CharacterList() {

  const { characters, loading, error } = useCharacters()


  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <CharacterListContainer>
      {characters.map((character) => (
        <CharacterCard key={character.id} name={character.name} image={character.image} species={character.species} status={character.status} />
      ))
      }

    </CharacterListContainer >



  )
}