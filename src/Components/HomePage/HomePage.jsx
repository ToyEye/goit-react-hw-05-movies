import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchMain } from '../../Services-API/';
import { FilmList, FilmItem, FilmText, FilmImages } from '../Components/';

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
      <FilmList>
        {films.map(
          ({ id, title, name, backdrop_path, vote_count, vote_average }) => (
            <FilmItem key={id}>
              <Link to={`/movies/${id}`}>
                <FilmText>{title ? title : name}</FilmText>
                <FilmImages
                  src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                  alt=""
                />
                <FilmText>Vote: {vote_count}</FilmText>
                <FilmText>Average rating: {vote_average}</FilmText>
              </Link>
            </FilmItem>
          )
        )}
      </FilmList>
    </article>
  );
}
