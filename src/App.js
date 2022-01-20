import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Navigation';
import HomePage from './Components/HomePage';
import MoviesPage from './Components/MoviesPage';
import { MovieDetailsPage } from './Components/MovieDetailsPage';
import { Cast } from './Components/Cast/Cast';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies/" element={<MoviesPage />}>
            <Route path=":moviesId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
