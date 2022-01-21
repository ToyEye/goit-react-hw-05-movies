import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchSearchFilm } from '../Services-API/';
import {
  FilmList,
  FilmItem,
  FilmText,
  FilmImages,
  Form,
  FormInput,
  Button,
  LinkStyled,
} from '../Components/Components';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [searchSubmit, setSearchSubmit] = useState('');
  const [searchFilms, setSearchFilms] = useState([]);

  useEffect(() => {
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
          <ul>
            {searchFilms.map(
              ({
                id,
                title,
                name,
                backdrop_path,
                vote_count,
                vote_average,
              }) => (
                <FilmItem key={id}>
                  <LinkStyled to={`/movies/${id}`}>
                    <FilmText>{title ? title : name}</FilmText>
                    {backdrop_path ? (
                      <FilmImages
                        src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
                        alt=""
                      />
                    ) : (
                      <FilmImages
                        src={`https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-`}
                        alt=""
                        width="300px"
                      />
                    )}

                    <FilmText>Vote: {vote_count}</FilmText>
                    <FilmText>Average rating: {vote_average}</FilmText>
                  </LinkStyled>
                </FilmItem>
              )
            )}
          </ul>
        </FilmList>
      )}
    </>
  );
}
