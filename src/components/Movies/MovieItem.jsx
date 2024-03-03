export default function MovieItem({ movie }) {
  return (
    <li className='movie-item'>
      <div className='movie-poster'>
        <img
          src={movie.image}
          alt={`Poster movie ${movie.title}`}
          className='movie-image'
        />
        <p>{movie.year}</p>
      </div>
      <h4>{movie.title}</h4>
    </li>
  )
}
