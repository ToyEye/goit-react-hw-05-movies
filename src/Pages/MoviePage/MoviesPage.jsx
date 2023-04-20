import { useState, useEffect, useLayoutEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSearchFilm } from '../../Services-API';
import { Form, FormInput, Button } from '../../Components/Components';
import FilmList from '../../Components/FilmList/FilmList';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    if (searchParam.has('query')) {
      setSearchSubmit(searchParam.get('query'));
    }
    return () => {
      setSearchFilms([]);
    };
  }, [searchParam]);

  useLayoutEffect(() => {
    if (searchSubmit === '') {
      return;
    }
    const searchFilm = async () => {
      await fetchSearchFilm(searchSubmit).then(data =>
        setSearchFilms(data.results)
      );
    };
    searchFilm();
  }, [searchSubmit]);

  const handleSearch = evt => {
    setSearch(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchSubmit(search);

    setSearchParam({ query: search });
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
