import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Components/Container';
import { Navigation } from './Components/Navigation';
import HomePage from './Components/HomePage';
import MoviesPage from './Components/MoviesPage';
import { MovieDetailsPage } from './Components/MovieDetailsPage';

export default function App() {
  return (
    <>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />}>
            <Route path=":moviesId" element={<MovieDetailsPage />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}
