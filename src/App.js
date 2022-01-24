import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Components/Navigation';
import { LoaderSimbol } from './Components/Loader';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviePage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./Pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Components/Cast/Cast'));
const Reviews = lazy(() => import('./Components/Reviews'));

export default function App() {
  return (
    <>
      <Suspense fallback={<LoaderSimbol />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
