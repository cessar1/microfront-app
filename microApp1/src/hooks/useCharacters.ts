import { useEffect, useState } from "react"
import { getCharacters } from "../utils/api"
import { type Character } from "../utils/api"


export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadCharacters = async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await getCharacters()
      setCharacters(data)
      setLoading(false)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unknown error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  return { characters, loading, error }
}


