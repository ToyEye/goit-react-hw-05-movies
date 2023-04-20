import { useLocation } from 'react-router-dom';

import {
  FilmListStyled,
  FilmItem,
  FilmText,
  FilmImages,
  LinkStyled,
} from '../../Components/Components/';

const FilmList = ({ films }) => {
  const location = useLocation();

  return (
    <FilmListStyled>
      {films.map(
        ({ id, title, name, backdrop_path, vote_count, vote_average }) => (
          <FilmItem key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              <FilmText>{title ? title : name}</FilmText>

              <FilmImages
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w300${backdrop_path}`
                    : `https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-`
                }
                alt=""
              />

              <FilmText>Vote: {vote_count}</FilmText>
              <FilmText>Average rating: {vote_average}</FilmText>
            </LinkStyled>
          </FilmItem>
        )
      )}
    </FilmListStyled>
  );
};

export default FilmList;
