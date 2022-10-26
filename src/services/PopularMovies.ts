import axios from "axios";
import { PopMovie, } from "../models/PopMovie";



export const getPopMovies = () => {
    return axios.get<PopMovie>('https://api.themoviedb.org/3/movie/popular?api_key=a23bd0cdc50c1b762fb77bb39aa540c6&language=en-US&page=1')
}