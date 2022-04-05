import React from 'react'
import { useSelector } from 'react-redux';
import MoviesCard from '../../Components/Movies/MoviesCard';

function Favorites() {
    const favMovies = useSelector((state) => state.favourite);
  return (
    <>
      <h2 className="text-center">Favorites</h2>
      <div className="container mt-5">
        <div className="row">
        {
          favMovies.favItems.map((movie) => (
            <div className="col-3 mb-5">
            <MoviesCard movie={movie} key={movie.id} />
            </div>
          ))
        }
        </div>
      </div>
    </>
  )
}

export default Favorites