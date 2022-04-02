import React from 'react'
import { Link } from 'react-router-dom'
import './MoviesCard.css'

function MoviesCard({movie}) {
  return (
    <div>
    <div className="card h-100" >
      <img className="card-img-top card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.name} />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <p className="card-text">
        {movie.vote_average}
        </p>
        <Link to={`/movies/${movie.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
    </div>
  )
}

export default MoviesCard