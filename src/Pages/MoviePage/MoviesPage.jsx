import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchSearchFilm } from '../../Services-API';
import { Form, FormInput, Button } from '../../Components/Components';
import FilmList from '../../Components/FilmList/FilmList';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParam, setSearchParam] = useState('');

  useEffect(() => {
    const searchFilm = async () => {
      try {
        const data = await fetchSearchFilm(searchParam);
        setSearchFilms(data.results);
      } catch (error) {
        console.log(error);
        setSearchFilms([]);
      }
    };

    if (searchParam) {
      searchFilm();
    }

    return () => {
      setSearchFilms([]);
    };
  }, [searchParam]);

  const handleSearch = evt => {
    setSearch(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (search.trim() !== '') {
      setSearchParam(search);
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
