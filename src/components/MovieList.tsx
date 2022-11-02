import { addFavorite, favMovie } from '../models/FavMovie';
import React, { useEffect, useState } from "react";
import { Result } from "../models/PopMovie";
import { PopMovie } from "../models/PopMovie";
import { getPopMovies, getTopRated, getUpcoming } from "../services/PopularMovies";
import "./MovieCard.css";
import { UpcomingResults } from "../models/Upcoming";
import { TopRatedResults } from "../models/TopRated";
import Modal from "./MovieModal";

import Movie from './Movie';

export default function MovieList() {
  const [movies, setMovies] = useState<Result[]>([]);
  const [favorites, setFavorites] = useState<Result[]>(favMovie);
  const [upcoming, setUpcoming] = useState<UpcomingResults[]>([]);
  const [topmovies, setTopMovies] = useState<TopRatedResults[]>([]);
  

  function handleAdd(favorites: Result) {
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.slice(0);
      newFavorites.push(favorites);
      return newFavorites;
    });
    addFavorite(favorites);
  }

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
    <h3>Favorite Movies</h3>
      <div className='MovieList'>
        {movies.map((movie) => (
        <li className='MovieCard'>
        <div className="image-container">
          <img
            src= {`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt= {movie.title}
          />
          <div className="overlay">
          <span className="remove">Remove from Favorites</span>
          </div>
        </div>
         {movie.title}
        </li>
        
    ))}
      </div>

      <h3>Popular Movies</h3>
      <div className="MovieList">
        {movies.map((movie) => (
          <li className="MovieCard">
          <div className="image-container">
            <div className="overlay">
              <span onClick={handleAdd} className="add">Add to Favorites</span>
                <svg   
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    fill="purple" 
                    className="bi bi-emoji-heart-eyes-fill" 
                    viewBox="0 0 16 16">
            
                  <path 
                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"
                  />
                </svg>
            </div>
           
          </div>
            
          <Movie movie={movie}></Movie>
          </li>
        ))}
      </div>

      <h3>Upcoming Movies</h3>
      <div className="MovieList">
        {upcoming.map((movie) => (
           <li className="MovieCard">
          <Movie movie={movie}></Movie>
          {movie.release_date}
          </li>
        ))}
      </div>

      <h3>Top Rated</h3>
      <div className="MovieList">
        {topmovies.map((movie) => (
          <li className="MovieCard">
            <Movie movie={movie}></Movie>
            
            {movie.vote_average}
          </li>
        ))}
      </div>
    </div>
  )
}