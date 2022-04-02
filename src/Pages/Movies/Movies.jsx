import React, { useEffect } from 'react'
import MoviesCard from '../../Components/Movies/MoviesCard'
import { axiosInstance } from '../../network/axiosConfig';

function Movies() {

  const[Movies, setMovies] = React.useState([

  ]);


  useEffect(() => {
    axiosInstance
      .get('/movie/popular?api_key=4ec70b10c20ba7dc5e99b9286ea14306').then((res) => {
        setMovies(res.data.results)
      }).catch((err) => {
        console.log(err)
      })
  },[]);


  return (
    <>
      <h2 className="text-center">Movies</h2>
      <div className="container mt-5">
      <div className="row">
        {Movies.map((movie) => {
          return (
            <div className="col-4 mb-5 " key={movie.id}>
              <MoviesCard movie={movie}/>
            </div>
          )
        })}
      </div>
      </div>
    </>
  )
}

export default Movies