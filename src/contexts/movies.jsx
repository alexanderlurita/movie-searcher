import { createContext, useState } from 'react'

export const MoviesContext = createContext()

export default function MoviesProvider({ children }) {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <MoviesContext.Provider
      value={{
        query,
        setQuery,
        movies,
        setMovies,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}
