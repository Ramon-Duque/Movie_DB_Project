import React, { useEffect, useState } from 'react'
import { Result } from '../models/PopMovie'
import { PopMovie } from '../models/PopMovie'
import { getPoster } from '../services/PopularMovies'
import { getPopMovies } from '../services/PopularMovies'

export default function MovieList() {
  const [movies, setMovies] = useState<Result[]>([])

  useEffect(() => {
    getPopMovies().then((res) => {
        const { data } = res
        setMovies(data.results);
        console.log(res.data);
    })
  }, []);

  return (
    <div>
        <h3>Popular Movies</h3>
    {movies.map((movie) => (
        <ul>{movie.title}</ul>
    ))}
    </div>
  )
}
