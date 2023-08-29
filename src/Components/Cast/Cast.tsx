import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchAboutMovie } from '../../Services-API/Api';
import { FilmListStyled, FilmText } from '../Components';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      await fetchAboutMovie(moviesId, 'credits').then(data =>
        setActors(data.cast)
      );
    };
    fetch();
  }, [moviesId]);

  return (
    <>
      <FilmListStyled>
        {actors.length === 0 && (
          <FilmText>Sorry, there are no actors </FilmText>
        )}
        {actors.length > 0 &&
          actors.map(({ character, name, profile_path, id }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : `https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-`
                }
                alt={name && name}
              />

              <FilmText>{character}</FilmText>
              <FilmText>{name}</FilmText>
            </li>
          ))}
      </FilmListStyled>
    </>
  );
}
