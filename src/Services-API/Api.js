import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  language: 'en-US',
  include_adult: true,
  api_key: 'c031fb300fb5fade2c7c769ccf51c6f2',
};

export const fetchMain = async () => {
  const URL = `trending/all/day`;
  const { data } = await axios.get(URL);

  return data;
};

export const fetchSearchFilm = async search => {
  const URL = 'search/movie?';
  const { data } = await axios.get(`${URL}&query=${search}`);
  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const fetchAboutMovie = async (id, about) => {
  const { data } = await axios.get(`movie/${id}/${about}?&page=1`);
  return data;
};
