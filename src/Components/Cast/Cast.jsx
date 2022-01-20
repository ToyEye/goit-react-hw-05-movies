import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../Services-API/Api';
export const Cast = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await fetchMovieCredits(312).then(data => setActors(data.cast));
    };
    fetch();
  });

  return (
    <>
      <ul>
        {actors &&
          actors.map(({ character, name, profile_path, id }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                alt=""
              />
              <p>{character}</p>
              <p>{name}</p>
            </li>
          ))}
      </ul>
    </>
  );
};
