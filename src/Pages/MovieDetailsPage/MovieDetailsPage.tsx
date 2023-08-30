import { useState, useEffect } from 'react';

import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../Services-API';
import {
  Section,
  OneFilmImg,
  FilmName,
  OneFilmInfoContainer,
  Paragraph,
  AboutTitle,
  GenresTitle,
  GenresList,
  GenresItem,
  Links,
} from './MovieDetailsPage.styled';

type Film = {
  title: string;
  vote_average: number;
  overview: string;
  genres: [];
  poster_path: string;
};

const MovieDetailsPage = () => {
  const [oneFilmObject, setOneFilmObject] = useState<Film>({
    title: '',
    vote_average: 0,
    overview: '',
    genres: [],
    poster_path: '',
  });

  let { moviesId } = useParams();

  const location = useLocation();
  const cameFrom = location?.state?.from ?? '/';

  useEffect(() => {
    const oneMovie = async () => {
      await fetchMovieDetails(moviesId).then(data => {
        setOneFilmObject(data);
      });
    };
    oneMovie();
  }, [moviesId]);

  const { title, vote_average, overview, genres, poster_path } = oneFilmObject;
  return (
    <>
      <Links to={cameFrom}>Return to movies</Links>
      <Section>
        <OneFilmImg
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-`
          }
          alt=""
        />
        <OneFilmInfoContainer>
          <FilmName>{title}</FilmName>
          <Paragraph>User score: {vote_average * 10}%</Paragraph>
          <AboutTitle>Overview </AboutTitle>
          <Paragraph>{overview}</Paragraph>
          <GenresTitle>Genres</GenresTitle>
          <GenresList>
            {genres.length > 0 &&
              genres.map(({ name }) => {
                return <GenresItem key={name}>{name}</GenresItem>;
              })}
          </GenresList>
        </OneFilmInfoContainer>
      </Section>
      <Section>
        <Links to={`/movies/${moviesId}/cast`} state={{ from: cameFrom }}>
          Cast
        </Links>
        <Links to={`/movies/${moviesId}/reviews `} state={{ from: cameFrom }}>
          Reviews
        </Links>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </>
  );
};

export default MovieDetailsPage;
