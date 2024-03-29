import { useLocation } from 'react-router-dom';

import {
  FilmListStyled,
  FilmItem,
  FilmText,
  FilmImages,
  LinkStyled,
} from '../Components';

type TMovies = {
  id: string;
  title: string;
  name: string;
  backdrop_path: string;
  vote_count: string;
  vote_average: string;
};

type Props = {
  films: TMovies[];
};

const FilmList = ({ films }: Props) => {
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
                alt={title ? title : name}
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
