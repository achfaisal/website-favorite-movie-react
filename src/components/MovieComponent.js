import React, { useEffect } from "react";

const MovieComponent = ({ popularMovies }) => {
  useEffect(() => {}, [popularMovies]);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="bg-slate-600 p-4 text-white" key={i}>
          <div className="Movie-title font-bold text-xl my-2">
            {movie.title}
          </div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="Movie-date my-2">
            Release Date : {movie.release_date}
          </div>
          <div className="Movie-rating my-2">Rating : {movie.vote_average}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <PopularMovieList />
      </div>
    </>
  );
};

export default MovieComponent;
