import { useState, useEffect } from 'react';
import { fetchMain } from '../../Services-API';

import FilmList from '../../Components/FilmList/FilmList';

import { FilmListStyled, MainTitle } from '../../Components/Components/';

export default function HomePage() {
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
      <FilmListStyled>
        <FilmList films={films} />
      </FilmListStyled>
    </article>
  );
}
