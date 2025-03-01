export interface Character {
  id: string;
  name: string;
  image: string;
  gender: string;
  species: string;
}

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters')
    const data: Character[] = await response.json();

    const DEFAULT_IMAGE = 'https://img.freepik.com/vector-premium/personajes-harry-potter-ilustracion_423075-15.jpg'

    return data.map(({ id, name, image, gender, species }) => ({
      id,
      name,
      image: image || DEFAULT_IMAGE,
      gender,
      species
    }));
  } catch (error) {
    console.error(error)
    return [];
  }
};
