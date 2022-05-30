import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import axios from '../../Axios/Axios';
import { ErrorMessage, ITopMovies, IFilm } from '../../types/types';
import MovieCard from '../../components/MovieCard';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { Spinner, Container } from 'react-bootstrap';
import './TopMovies.css';

const TopMovies = () => {
    const [movies, setMovies] = useState<IFilm[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const fetchMovies = () => {
        setIsLoading(true);
        axios
            .get('/top', {
                params: {
                    type: 'TOP_250_BEST_FILMS',
                    page: 1
                }
            })
            .then((response: AxiosResponse<ITopMovies>) => {
                setMovies(response.data.films);
            })
            .catch((error: AxiosError<ErrorMessage>) => {
                setError(error.response?.data.message ?? '');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <Header />
            {movies.length ? (
                <>
                    <div className="containers">
                        <div className="cards">
                            {movies.map((movie) => (
                                <div
                                    key={movie.filmId}
                                    onClick={() => navigate('/movie/' + movie.filmId)}>
                                    <MovieCard movie={movie} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <Container className="casket" style={{ height: window.innerHeight - 54 }}>
                    {isLoading && <Spinner animation="border" />}
                    {error && <div>{error}</div>}
                </Container>
            )}
            {movies.length === 0}
            <Footer />
        </>
    );
};
export default TopMovies;
