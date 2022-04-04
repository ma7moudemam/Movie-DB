import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../network/moviesAPIS";
import './MovieDetails.css';


function MovieDetails() {
    const [movieDetails, setMovieDetails] = React.useState({});
    const params = useParams();
    const APIKEY = "?api_key=4ec70b10c20ba7dc5e99b9286ea14306";

    useEffect(() => {

        getMovieDetails(params.id+APIKEY)
            .then((res) => {
                console.log(res.data);
                setMovieDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[params.id]);
    return (
        <>
            <h3 className="text-center mb-5">MovieDetails</h3>

            <div className="card mb-3">
                <div className="row g-0">
                    <img
                        className="details-img"
                        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                        alt={movieDetails.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{movieDetails.title}</h5>
                        <h4 className="card-text">{movieDetails.vote_average}$</h4>
                        <p className="card-text">{movieDetails.overview}</p>
                        <p className="card-text">
                            <small className="text-muted">{movieDetails.tagline}</small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetails;
