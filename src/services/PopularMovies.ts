import axios from "axios";
import MoviePoster from "../models/MoviePoster";
import { PopMovie, Result } from "../models/PopMovie";

export const getPoster = () => {
    return axios.get<MoviePoster[]>('https://api.themoviedb.org/3/movie/popular?api_key=a23bd0cdc50c1b762fb77bb39aa540c6&language=en-US&page=1')
}

export const getPopMovies = () => {
    return axios.get<PopMovie>('https://api.themoviedb.org/3/movie/popular?api_key=a23bd0cdc50c1b762fb77bb39aa540c6&language=en-US&page=1')
}