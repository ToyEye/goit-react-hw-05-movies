import { useState, useEffect } from 'react';
import { fetchMain } from '../../Services-API';

import FilmList from '../../Components/FilmList/FilmList';

import { MainTitle } from '../../Components/Components';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const paintList = async () => {
      await fetchMain().then(data => setFilms(data.results));
    };
    paintList();
  }, []);

  return (
    <article>
      <MainTitle>Trending today</MainTitle>

      <FilmList films={films} />
    </article>
  );
};

export default HomePage;
