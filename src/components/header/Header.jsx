import { useState } from "react";
import "./header.css";
const Header = ({ handleSearch, movies }) => {
  const [searchTitle, setSearchTitle] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTitle(value);
    handleSearch(value);
  };

  return (
    <header>
      <h1>MOVIES</h1>
      <input
        type="text"
        placeholder="Search a movie..."
        value={searchTitle}
        onChange={handleChange}
      />
      {movies ? (
        <p>{`found ${movies.length} results`}</p>
      ) : (
        <p>0 results found</p>
      )}
    </header>
  );
};

export default Header;
