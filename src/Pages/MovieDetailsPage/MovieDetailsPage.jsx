import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  useParams,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
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
} from './MovieDetailsPage.styled';
import { Button } from '../../Components/Components';

const Links = styled(NavLink)`
  text-decoration: none;
  border: 1px solid black;
  padding: 10px 40px;
  color: black;
  font-weight: 500;
  border-radius: 5px;

  &.activ {
    color: aqua;
  }
  :nth-child(1) {
    margin-right: 15px;
  }
`;

export default function MovieDetailsPage() {
  const [oneFilmObject, setOneFilmObject] = useState({});

  let { moviesId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const oneMovie = async () => {
      await fetchMovieDetails(moviesId).then(data => {
        setOneFilmObject(data);
      });
    };
    oneMovie();
  }, [moviesId]);

  function onGoBack() {
    navigate(location?.state?.from ?? '/');
  }

  const { title, vote_average, overview, genres, poster_path } = oneFilmObject;
  return (
    <>
      <Button onClick={onGoBack} type="button">
        Return to movies
      </Button>
      <Section>
        <OneFilmImg
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt=""
        />
        <OneFilmInfoContainer>
          <FilmName>{title}</FilmName>
          <Paragraph>User score: {vote_average * 10}%</Paragraph>
          <AboutTitle>Overview </AboutTitle>
          <Paragraph>{overview}</Paragraph>
          <GenresTitle>Genres</GenresTitle>
          <GenresList>
            {genres &&
              genres.map(({ name }) => (
                <GenresItem key={name}>{name}</GenresItem>
              ))}
          </GenresList>
        </OneFilmInfoContainer>
      </Section>
      <Section>
        <Links to={`/movies/${moviesId}/cast`} state={{ from: location }}>
          Cast
        </Links>
        <Links to={`/movies/${moviesId}/reviews `} state={{ from: location }}>
          Reviews
        </Links>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </>
  );
}
