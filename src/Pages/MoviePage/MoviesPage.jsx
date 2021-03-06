import { useState, useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchFilm } from '../../Services-API';
import {
  FilmList,
  FilmItem,
  FilmText,
  FilmImages,
  Form,
  FormInput,
  Button,
  LinkStyled,
} from '../../Components/Components';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const location = useLocation();

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
      {searchFilms && (
        <FilmList>
          {searchFilms.map(
            ({ id, title, name, backdrop_path, vote_count, vote_average }) => (
              <FilmItem key={id}>
                <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                  <FilmText>{title ? title : name}</FilmText>

                  <FilmImages
                    src={
                      backdrop_path
                        ? `https://image.tmdb.org/t/p/w300${backdrop_path}`
                        : `https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-`
                    }
                    alt=""
                  />

                  <FilmText>Vote: {vote_count}</FilmText>
                  <FilmText>Average rating: {vote_average}</FilmText>
                </LinkStyled>
              </FilmItem>
            )
          )}
        </FilmList>
      )}
    </>
  );
}
