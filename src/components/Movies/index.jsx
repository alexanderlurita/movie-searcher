import MovieItem from './MovieItem'
import useMovies from '../hooks/useMovies'
import ReactLoading from 'react-loading'

function ListOfMovies({ movies }) {
  return (
    <ul className='movies-list'>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

function NoMoviesResult() {
  return <p>No se encontraron películas para esta búsqueda</p>
}

export default function Movies() {
  const { movies, loading } = useMovies()

  const hasMovies = movies?.length > 0

  return (
    <section className='movies-section'>
      {loading ? (
        <ReactLoading type='bubbles' color='lightblue' />
      ) : hasMovies ? (
        <ListOfMovies movies={movies} />
      ) : (
        <NoMoviesResult />
      )}
    </section>
  )
}
