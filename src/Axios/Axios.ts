import axios from 'axios';

export default axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    headers: {
        accept: 'application/json',
        'X-API-KEY': '622c1d6b-4114-45e3-a64d-9ff4220ecd20'
    }
});
