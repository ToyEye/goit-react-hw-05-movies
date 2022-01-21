import { useState, useEffect } from 'react';
import { fetchMain } from '../Services-API';

import {
  FilmList,
  FilmItem,
  FilmText,
  FilmImages,
  MainTitle,
  LinkStyled,
} from '../Components/Components';

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
      <FilmList>
        {films.map(
          ({ id, title, name, backdrop_path, vote_count, vote_average }) => (
            <FilmItem key={id}>
              <LinkStyled to={`/movies/${id}`}>
                <FilmText>{title ? title : name}</FilmText>
                <FilmImages
                  src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                  alt=""
                />
                <FilmText>Vote: {vote_count}</FilmText>
                <FilmText>Average rating: {vote_average}</FilmText>
              </LinkStyled>
            </FilmItem>
          )
        )}
      </FilmList>
    </article>
  );
}
