import "./movieSearchresults.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
const MovieSearchResults = ({ movies, handleClick }) => {
  if (!movies) {
    return <div className="left"></div>;
  }

  return (
    <div className="left">
      {movies.map((movie) => (
        <>
          <div
            key={movie.imdbID}
            className="movie"
            onClick={() => {
              handleClick(movie.imdbID);
            }}
          >
            <img src={movie.Poster} className="movieImg" />
            <div className="movieInfo">
              <p className="movieTitle">{movie.Title}</p>
              <div className="year">
                <FontAwesomeIcon icon={faCalendar} />
                <p className="movieYear">{movie.Year}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MovieSearchResults;
