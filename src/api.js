import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${apiKey}`
  );
  console.log(q);
  return search.data;
};
