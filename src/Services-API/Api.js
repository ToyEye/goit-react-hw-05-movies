import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = 'c031fb300fb5fade2c7c769ccf51c6f2';

export const fetchMain = async () => {
  const URL = '3/trending/all/day?api_key=';
  const response = await axios.get(`${URL}${KEY}`);

  return response.data;
};

export const fetchSearchFilm = async search => {
  const URL = '3/search/movie?language=en-US&include_adult=false&api_key=';
  const response = await axios.get(`${URL}${KEY}&query=${search}`);
  return response.data;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `3/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const fetchAboutMovie = async (id, about) => {
  const response = await axios.get(
    `3/movie/${id}/${about}?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data;
};
