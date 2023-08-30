import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Components/Navigation';
import { LoaderSimbol } from './Components/Loader';

import { routes } from './routes';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviePage/MoviesPage'));
const MovieDetailsPage = lazy(
  () => import('./Pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Components/Cast/Cast'));
const Reviews = lazy(() => import('./Components/Reviews'));

export default function App() {
  return (
    <>
      <Suspense fallback={<LoaderSimbol />}>
        <Routes>
          <Route path={routes.home} element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path={routes.movies} element={<MoviesPage />} />
            <Route path={routes.moviesDetails} element={<MovieDetailsPage />}>
              <Route path={routes.cast} element={<Cast />} />
              <Route path={routes.reviews} element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
