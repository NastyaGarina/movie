import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import axios from '../../Axios/Axios';
import { ErrorMessage, IFilm } from '../../types/types';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import { Container, Spinner } from 'react-bootstrap';
import './Movie.css';

const Movie = () => {
    const [film, setFilm] = useState<IFilm | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useParams();

    const fetchFilm = () => {
        setIsLoading(true);
        axios
            .get(`/${history.filmId}`)
            .then((response: AxiosResponse<IFilm>) => {
                setFilm(response.data);
            })
            .catch((error: AxiosError<ErrorMessage>) => {
                setError(error.response?.data.message ?? '');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const colorRatingFilm = useMemo(() => {
        if (film) {
            if (film.ratingKinopoisk > 8) {
                return 'green';
            } else if (film.ratingKinopoisk > 4) {
                return 'gold';
            } else {
                return 'red';
            }
        }
    }, [film?.ratingKinopoisk]);

    useEffect(() => {
        fetchFilm();
    }, []);

    return (
        <>
            <Header />
            {film ? (
                <>
                    <div className="case">
                        <div>
                            <img
                                style={{ borderRadius: '10px' }}
                                src={film.posterUrlPreview}
                                alt="dont img"
                            />
                        </div>
                        <div>
                            {film.logoUrl ? (
                                <img className="logoImg" src={film.logoUrl} alt="dont img" />
                            ) : (
                                ''
                            )}
                            <div className="textAboutFilm">О фильме</div>
                            <div className="blok">
                                <div>
                                    <div className="text">
                                        <p className="infoFilm">Год производства</p>
                                        <p>{film.year ?? '...'}</p>
                                    </div>
                                    <div className="text">
                                        <p className="infoFilm">Страна</p>
                                        {film.countries.map((country, i) => (
                                            <div key={i} style={{ margin: '0 7px 0 0' }}>
                                                <div>
                                                    <p>{country.country ?? '...'}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text">
                                        <p className="infoFilm">Жанр</p>
                                        {film.genres.map((genre, i) => (
                                            <div key={i} style={{ margin: '0 7px 0 0' }}>
                                                <p>{genre.genre ?? '...'}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text">
                                        <p className="infoFilm">Слоган</p>
                                        <p>{film.slogan ?? '...'}</p>
                                    </div>
                                    <div className="text">
                                        <p className="infoFilm">Время</p>
                                        <p>{film.filmLength ? film.filmLength + ' мин' : '...'}</p>
                                    </div>
                                    <div className="text">
                                        <p className="infoFilm">Рейтинг</p>
                                        <p style={{ color: colorRatingFilm }}>
                                            {film.ratingKinopoisk ?? '...'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="textDescription">{film.description ?? '...'}</div>
                        </div>
                    </div>
                </>
            ) : (
                <Container className="casket" style={{ height: window.innerHeight - 54 }}>
                    {isLoading && <Spinner animation="border" />}
                    {error && <div>{error}</div>}
                </Container>
            )}
            <Footer />
        </>
    );
};
export default Movie;
