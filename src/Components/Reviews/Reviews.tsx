import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { fetchAboutMovie } from '../../Services-API/Api';
import { FilmListStyled, FilmText } from '../Components';

const Attention = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export default function Reviews() {
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
      <FilmListStyled>
        {reviews.length === 0 && (
          <Attention>We dont have any reviews for this movie</Attention>
        )}
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <FilmText>Author</FilmText>
              {author}
              <FilmText>{content}</FilmText>
            </li>
          ))}
      </FilmListStyled>
      )
    </>
  );
}
