import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MovieComponent from "./components/MovieComponent";
import { getMovieList } from "./api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const updatePopularMovies = (movies) => {
    setPopularMovies(movies);
  };

  return (
    <>
      <div className="Navbar">
        <Navbar updatePopularMovies={updatePopularMovies} />
      </div>
      <div className="App my-7">
        <div>
          <MovieComponent popularMovies={popularMovies} />
        </div>
      </div>
    </>
  );
};

export default App;
