import { Routes, Route } from 'react-router';

import MoviesListPage from './components/pages/MoviesList';
import LoginPage from './components/pages/Login';
import MovieDetailsPage from './components/pages/MovieDetails';
import MainLayout from './components/layouts/MainLayout.jsx';

function AppRouter() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MoviesListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRouter;
