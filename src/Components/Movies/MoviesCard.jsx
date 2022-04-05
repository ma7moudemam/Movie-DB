import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {setFavourit ,removeFavourit} from "../../store/actions/favorite"
import { MdFavorite } from 'react-icons/md';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import './MoviesCard.css'


function MoviesCard({movie }) {

  const favMovies = useSelector((state) => state.favourite.favItems);
  const dispatch = useDispatch();

  let likedMovie = favMovies.includes(movie);


  const addToFavourit = () => {
    dispatch(setFavourit(movie));
    
  };

  const removeFromFavourit = () => {
    dispatch(removeFavourit(movie));
  };

  return (
    <div>
    <div className="card h-100 main-card">
      <img className="card-img-top card-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.name} />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <p className="card-text">
        {movie.vote_average}
        </p>
        <div className="details">
        <Link to={`/movies/${movie.id}`} className="btn btn-primary">
          Details
        </Link>
       {
          likedMovie ?
          (<MdFavorite
            style={{
              color: 'red',
              fontSize:'1.5rem',
              cursor: 'pointer',
            }}
            aria-label="remove from favourit list"
            onClick={removeFromFavourit}
          />):
          (<MdOutlineFavoriteBorder
            style={{
              color: 'red',
              fontSize:'1.5rem',
              cursor: 'pointer',
            }}
            aria-label="add to favourit list" onClick={addToFavourit}      
          />)
       }
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default MoviesCard