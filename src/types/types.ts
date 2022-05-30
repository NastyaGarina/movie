export interface ICountries {
    country: string;
}
export interface IGenresFilm {
    genre: string;
}
export interface IFilm {
    kinopoiskId: number;
    filmId: number;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrlPreview: string;
    logoUrl: string;
    ratingKinopoisk: number;
    year: number;
    slogan: string;
    description: string;
    countries: ICountries[];
    genres: IGenresFilm[];
    filmLength: number;
}
export interface ITopMovies {
    films: IFilm[];
}
export interface ErrorMessage {
    message: string;
    status: number;
    error: string;
}
export interface IMoviesFilter {
    items: IFilm[];
}
export interface IGenre {
    id: number;
    genre: string;
}
export interface IGenres {
    genres: IGenre[];
}
export interface IParams {
    genres: number | null;
    keyword: string;
}
export interface IMovieCardProps {
    movie: IFilm;
}
export interface IUser {
    email: string;
    password: string;
}
