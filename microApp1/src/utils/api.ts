export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;

}

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    return data.results.map(({ id, name, status, species, image }: Character) => ({
      id,
      name,
      status,
      species,
      image
    }))
  } catch (error) {
    console.error(error)
    return []
  }
}
