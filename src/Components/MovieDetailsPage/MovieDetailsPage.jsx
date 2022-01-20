import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../Services-API';

const Section = styled.section`
  display: flex;
`;

const OneFilmImg = styled.img`
  width: 400px;
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

  const { title, vote_average, overview, genres, backdrop_path } =
    oneFilmObject;
  return (
    <Section>
      <OneFilmImg
        src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
        alt=""
      />
      <div>
        <h3>{title}</h3>
        <p>{vote_average * 10}%</p>
        <h4>overview </h4>
        <p>{overview}</p>
        <h5>genres</h5>
        {genres && genres.map(({ name }) => <li key={name}>{name}</li>)}
      </div>
    </Section>
  );
};
