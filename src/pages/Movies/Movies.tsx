import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import axios from '../../Axios/Axios';
import { IMoviesFilter, IGenres, IParams, IGenre, IFilm } from '../../types/types';
import MovieCard from '../../components/MovieCard';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { Nav, NavDropdown, Container, Spinner, Form, FormControl, Button } from 'react-bootstrap';

const MoviesFilter = () => {
    const [movies, setMovies] = useState<IFilm[]>([]);
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [filterParams, setFilterParams] = useState<IParams>({ genres: null, keyword: '' });

    const navigate = useNavigate();

    const fetchMoviesFilter = () => {
        setIsLoading(true);
        axios
            .get('', {
                params: {
                    genres: filterParams.genres,
                    keyword: filterParams.keyword
                }
            })
            .then((response: AxiosResponse<IMoviesFilter>) => {
                setMovies(response.data.items);
            })
            .catch((error) => {
                setError(error.response?.data.message ?? '');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    const fetchGenre = () => {
        setIsLoading(true);
        axios
            .get('/filters')
            .then((response: AxiosResponse<IGenres>) => {
                setGenres(response.data.genres);
            })
            .catch((error) => {
                setError(error.response?.data.message ?? '');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchGenre();
    }, []);

    useEffect(() => {
        fetchMoviesFilter();
    }, [filterParams]);

    return (
        <>
            <Header />
            {movies.length ? (
                <>
                    <div style={{ display: 'flex', margin: '20px 0 0 0' }}>
                        <Nav className="me-auto" style={{ margin: '0 0 0 250px' }}>
                            <NavDropdown title="Genres" id="collasible-nav-dropdown">
                                {genres.map((genre, i) => (
                                    <div key={i}>
                                        <NavDropdown.Item
                                            onClick={() =>
                                                setFilterParams((prevState) => ({
                                                    ...prevState,
                                                    genres: genre.id
                                                }))
                                            }
                                            style={{
                                                backgroundColor:
                                                    filterParams.genres === genre.id
                                                        ? '#0d6efd'
                                                        : ''
                                            }}>
                                            {genre.genre}
                                        </NavDropdown.Item>
                                    </div>
                                ))}
                            </NavDropdown>
                        </Nav>
                        <Nav className="me-auto">
                            <Form className="d-flex">
                                <FormControl
                                    value={filterParams.keyword}
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(event) => {
                                        setFilterParams((prevState) => ({
                                            ...prevState,
                                            keyword: event.target.value
                                        }));
                                    }}
                                />
                                <Button variant="outline-success" type="button">
                                    Search
                                </Button>
                            </Form>
                        </Nav>
                    </div>
                    <div className="containers">
                        <div className="cards">
                            {movies.map((movie) => (
                                <div
                                    key={movie.kinopoiskId}
                                    onClick={() => navigate(`/movie/${movie.kinopoiskId}`)}>
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
export default MoviesFilter;
