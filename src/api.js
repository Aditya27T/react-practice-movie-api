import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

export const getMovie = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=${apiKey}`);
    return movie.data.results;
}

export const movieSearch = async (q) => {
    const serchMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${apiKey}`);
    console.log({serchMovie});
    return serchMovie.data.results;
}
