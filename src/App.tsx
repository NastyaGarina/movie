import { Route, Routes } from 'react-router-dom';
import TopMovies from './pages/TopMovies/TopMovies';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Movies from './pages/Movies/Movies';
import SplashScreen from './pages/SplashScreen/SplashScreen';

function App() {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/topMovies" element={<TopMovies />} />
            <Route path="movie/:filmId" element={<Movie />} />
            <Route path="movies" element={<Movies />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
