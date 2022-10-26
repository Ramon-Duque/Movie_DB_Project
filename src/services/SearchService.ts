import axios from "axios"
import MovieList from "../components/MovieList"
import { SearchMovie } from "../models/SearchMovie"

export const getSearchMovies = (movieValue: string) => {
    return axios.get<SearchMovie>(`https://api.themoviedb.org/3/search/movie?api_key=470d39fd42502182236cc8da9c06fd04&query=${movieValue}`)
}

