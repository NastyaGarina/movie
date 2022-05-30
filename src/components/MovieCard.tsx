import { FC } from 'react';
import { IMovieCardProps } from '../types/types';

const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
    return (
        <div className="cover">
            <div className="cover-photo">
                <img className="photo" src={movie.posterUrlPreview} alt="dont img" />
            </div>
            <div className="info">
                <div className="title">{movie.nameEn ?? movie.nameRu ?? movie.nameOriginal}</div>
                <div>
                    <p style={{ margin: '7px 0 0 0' }}>Жанр:</p>
                    <div className="category">
                        {movie.genres.map((genre, i) => (
                            <div key={i} style={{ margin: '0 5px 0 0' }}>
                                <div>{genre.genre}</div>
                            </div>
                        ))}
                    </div>
                    <p style={{ margin: '7px 0 0 0' }}>Страна:</p>
                    <div className="category">
                        {movie.countries.map((country, i) => (
                            <div key={i} style={{ margin: '0 5px 0 0' }}>
                                <div>{country.country}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MovieCard;
