import axios from "axios";
import { PopMovie, } from "../models/PopMovie";
import { TopRated } from "../models/TopRated";
import { Upcoming } from "../models/Upcoming";



export const getPopMovies = () => {
    return axios.get<PopMovie>('https://api.themoviedb.org/3/movie/popular?api_key=a23bd0cdc50c1b762fb77bb39aa540c6&language=en-US&page=1')
}

export const getUpcoming = () => {
    return axios.get<Upcoming>('https://api.themoviedb.org/3/movie/upcoming?api_key=a23bd0cdc50c1b762fb77bb39aa540c6&language=en-US&page=1')
}

export const getTopRated = () => {
    return axios.get<TopRated>('https://api.themoviedb.org/3/movie/top_rated?api_key=a23bd0cdc50c1b762fb77bb39aa540c6&language=en-US&page=1')
}