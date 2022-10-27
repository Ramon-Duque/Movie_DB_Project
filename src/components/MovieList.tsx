import React, { useEffect, useState } from "react";
import { Result } from "../models/PopMovie";
import { PopMovie } from "../models/PopMovie";
import { getPopMovies, getTopRated, getUpcoming } from "../services/PopularMovies";
import "./MovieCard.css";
import { UpcomingResults } from "../models/Upcoming";
import { TopRatedResults } from "../models/TopRated";

export default function MovieList() {
  const [movies, setMovies] = useState<Result[]>([]);
  const [upcoming, setUpcoming] = useState<UpcomingResults[]>([]);
  const [topmovies, setTopMovies] = useState<TopRatedResults[]>([]);

  useEffect(() => {
    getPopMovies().then((res) => {
      const { data } = res;
      setMovies(data.results);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    getUpcoming().then((res) => {
      const { data } = res;
      setUpcoming(data.results);
    });
  }, []);

  useEffect(() => {
    getTopRated().then((res) => {
      const { data } = res;
      setTopMovies(data.results);
    });
  }, []);

  return (
    <div className="Home">
      <h3>Popular Movies</h3>
      <div className="MovieList">
        {movies.map((movie) => (
          <li className="MovieCard">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
            />
            {movie.title}
          </li>
        ))}
      </div>

      <h3>Upcoming Movies</h3>
      <div className="MovieList">
        {upcoming.map((movie) => (
          <li className="MovieCard">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
            />
            {movie.title}<br></br>
            {movie.release_date}
          </li>
        ))}
      </div>

      <h3>Top Rated</h3>
      <div className="MovieList">
        {topmovies.map((movie) => (
          <li className="MovieCard">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              alt={movie.title}
            />
            {movie.title}<br></br>
            {movie.vote_average}
          </li>
        ))}
      </div>
    </div>
  );
}
