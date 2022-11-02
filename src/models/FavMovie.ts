import { Result } from "./PopMovie";

export let favMovie: Result[] = [];

export function addFavorite(newFavorite: Result) {
    favMovie.push(newFavorite);
}

export function deleteFavorite(index: number) {
    favMovie.slice(index, 1);
}