import { Result } from "./PopMovie";

export let favMovie: Result[] = [];

export function addFavorite(favorite: Result) {
    favMovie.push(favorite);
}