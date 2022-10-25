import { PopMovie } from "./PopMovie"

export default interface MoviePoster {
    base_url: string,
    poster_sizes: string[],
    poster_path:  string
}