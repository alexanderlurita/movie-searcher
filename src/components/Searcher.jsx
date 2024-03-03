import useMovies from './hooks/useMovies'

export default function Searcher() {
  const { query, updateQuery, getMovies } = useMovies()

  const handleChange = (e) => {
    const newQuery = e.target.value
    updateQuery({ newQuery })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search: query })
  }

  return (
    <section className='search-section'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type='text' value={query} onChange={handleChange} />
        <button type='submit'>Buscar</button>
      </form>
    </section>
  )
}
