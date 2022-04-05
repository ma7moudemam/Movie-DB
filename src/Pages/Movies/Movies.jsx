import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MoviesCard from '../../Components/Movies/MoviesCard'
import { axiosInstance } from '../../network/axiosConfig';
import { getMovies } from '../../network/moviesAPIS';
import { nextPage, previousPage } from '../../store/actions/pagination';

function Movies() {

  const[Movies, setMovies] = React.useState([
  ]);

  const pageNumber = useSelector((state) => state.pagination.page_num);
  const dispatch = useDispatch();


  const next = () => {
    dispatch(nextPage());
  };
  const prev = () => {
    dispatch(previousPage());
  };


  useEffect(() => {
    // axiosInstance
    //   .get('/movie/popular?api_key=4ec70b10c20ba7dc5e99b9286ea14306')
    getMovies(pageNumber)
      .then((res) => {
        setMovies(res.data.results)
      }).catch((err) => {
        console.log(err)
      })
  },[pageNumber]);


  return (
    <>
      <h2 className="text-center">Movies</h2>
      <div className="container mt-5">
      <div className="row">
        {Movies.map((movie) => {
          return (
             <div className="col-3 mb-5 " key={movie.id}>
              <MoviesCard movie={movie}/>
            </div>
          )
        })}
      </div>
      <div
        className="pagination"
        style={{ padding: "2rem", display: "flex", justifyContent: "center" }}
      >
         <Link 
          className="btn btn-primary m-3 p-2"
          variant="contained"
          disabled={pageNumber <= 1 ? true : false}
          sx={{ mx: 2 }}
          onClick={prev}
        >
          prev
        </Link>
        <Link
        className="btn btn-primary m-3 p-2"
         variant="contained" onClick={next}>
          next
        </Link> 
      </div>
      </div>
    </>
  )
}

export default Movies