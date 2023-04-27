import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchFilm } from '../../Services-API';
import Form from '../../Components/Form/Form';
import FilmList from '../../Components/FilmList/FilmList';

export default function MoviesPage() {
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');

    if (!query) {
      return;
    }

    const searchFilm = async () => {
      try {
        const data = await fetchSearchFilm(searchParams.get('query'));
        setSearchFilms(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    searchFilm();
  }, [searchParams]);

  const handleFormSubmit = handleSearch => {
    setSearchParams({ query: handleSearch });
  };

  return (
    <>
      <Form handleFormSubmit={handleFormSubmit} />
      <Outlet />
      <FilmList films={searchFilms} />
    </>
  );
}
