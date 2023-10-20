import Header from "./components/header/Header";
import MovieSearchResults from "./components/movieSearchResults/MovieSearchResults";
import { useState, useEffect } from "react";
import MovieInfo from "./components/movieInfo/MovieInfo";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedMovie, setselectedMovie] = useState(null);

  const getMovie = (id) => {
    setselectedMovie(id);
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=85018cf9&s=${searchTitle}`,
        { signal: controller.signal }
      );

      if (!res.ok) {
        throw new Error("something went wrong, please try again!!!");
      }
      const data = await res.json();
      setMovies(data.Search);
    };
    fetchMovies();
    return function () {
      controller.abort();
    };
  }, [searchTitle]);

  const handleSearch = (title) => {
    setSearchTitle(title);
  };

  return (
    <>
      <Header handleSearch={handleSearch} movies={movies} />
      <div className="contanier">
        <MovieSearchResults movies={movies} handleClick={getMovie} />
        <MovieInfo movieId={selectedMovie} />
      </div>
    </>
  );
};

export default App;
