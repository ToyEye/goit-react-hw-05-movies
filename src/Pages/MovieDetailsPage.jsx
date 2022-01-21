import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../Services-API/';

const Section = styled.section`
  display: flex;
  margin-top: 15px;
`;

const OneFilmImg = styled.img`
  width: 400px;
`;
const FilmName = styled.h2`
  font-size: 26px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const OneFilmInfoContainer = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;
const Paragraph = styled.div`
  margin-bottom: 15px;
`;

const AboutTitle = styled.h3`
  margin-bottom: 20px;
`;

const GenresTitle = styled.h4`
  margin-bottom: 20px;
`;

const GenresList = styled.ul`
  display: flex;
`;

const GenresItem = styled.li`
  font-weight: 600;
  margin-right: 7px;
`;
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

export const MovieDetailsPage = () => {
  const [oneFilmObject, setOneFilmObject] = useState({});
  let { moviesId } = useParams();

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
        <Links to={`/movies/${moviesId}/cast`}>Cast</Links>
        <Links to={`/movies/${moviesId}/reviews `}>Reviews</Links>
      </Section>
      <Section>
        <Outlet />
      </Section>
    </>
  );
};
