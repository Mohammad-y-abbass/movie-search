import "./movieInfo.css";
import { useState, useEffect } from "react";


const MovieInfo = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getSingleMovie = async () => {

      
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=85018cf9&i=${movieId}`
      );
      const movieData = await res.json();
      setMovie(movieData);
    };
    getSingleMovie();
  }, [movieId]);

  if (!movieId) {
    return <div className="right"></div>;
  }

  return (
    <div className="middle">
      <div className="singleMovie">
        <img src={movie.Poster} alt={movie.Title} className="singleMovieImg" />
        <div className="singleMovieInfo">
          <h3>{movie.Title}</h3>
          <div>
            <p className="info">
              {movie.Released} . {movie.Runtime}
            </p>
            <p className="info">{movie.Genre}</p>
            <p className="info">
              IMDB Rating: {movie.imdbRating}
              {movie.R}
            </p>
          </div>
        </div>
      </div>
      <div className="otherInfo">
        <p className="info">{movie.Plot}</p>
        <p className="info">
          <span>Actors: </span>
          {movie.Actors}
        </p>
        <p className="info">
          <span>Director:</span> {movie.Director}
        </p>
        <p className="info">
          <span>Writers:</span> {movie.Writer}
        </p>
        <p className="info">
          <span>Language:</span> {movie.Language}
        </p>
        <p className="info">
          <span>Awards:</span> {movie.Awards}
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
