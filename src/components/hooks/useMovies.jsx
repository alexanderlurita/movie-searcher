import { useContext } from 'react'
import { MoviesContext } from '../../contexts/movies'
import { searchMovies } from '../../services/movies'

export default function useMovies() {
  const {
    query,
    setQuery,
    movies,
    setMovies,
    loading,
    setLoading,
    error,
    setError,
  } = useContext(MoviesContext)

  const updateQuery = ({ newQuery }) => setQuery(newQuery)

  const getMovies = async ({ search }) => {
    setLoading(true)
    setError(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { query, movies, loading, error, updateQuery, getMovies }
}
