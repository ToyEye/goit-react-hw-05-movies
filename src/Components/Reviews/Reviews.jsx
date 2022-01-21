import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { fetchAboutMovie } from '../../Services-API/Api';
import { FilmList, FilmText } from '../Components/';

const Attention = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      await fetchAboutMovie(moviesId, 'reviews').then(data =>
        setReviews(data.results)
      );
    };
    fetch();
  }, [moviesId]);
  return (
    <>
      {reviews ? (
        <FilmList>
          {reviews.map(revie => (
            <li key={revie.id}>
              <FilmText>Author</FilmText>
              {revie.author}
              <FilmText>{revie.content}</FilmText>
            </li>
          ))}
        </FilmList>
      ) : (
        <Attention>No Reviews</Attention>
      )}
    </>
  );
};
