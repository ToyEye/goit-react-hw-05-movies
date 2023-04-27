import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchFilm } from '../../Services-API';
import { Form, FormInput, Button } from '../../Components/Components';
import FilmList from '../../Components/FilmList/FilmList';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  useEffect(() => {
    if (searchParams.has('query')) {
      const searchFilm = async () => {
        try {
          const data = await fetchSearchFilm(searchParams.get('query'));
          setSearchFilms(data.results);
        } catch (error) {
          console.log(error);
          setSearchFilms([]);
        }
      };

      if (searchParams) {
        searchFilm();
      }
    }

    return () => {
      setSearchFilms([]);
    };
  }, [searchParams]);

  const handleSearch = evt => {
    setSearch(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (search.trim() !== '') {
      setSearchParams({ query: search });
    }

    setSearch('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormInput onChange={handleSearch} value={search} />
        <Button type="submit">Search</Button>
      </Form>
      <Outlet />
      <FilmList films={searchFilms} />
    </>
  );
}
