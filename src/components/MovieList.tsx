import React, { useEffect, useState } from 'react'
import { Result } from '../models/PopMovie'
import { getPoster } from '../services/PopularMovies'
import { getPopMovies } from '../services/PopularMovies'

export default function MovieList() {
  const [movies, setMovies] = useState<Result[]>([])

  useEffect(() => {
    getPopMovies().then((res) => {
        setMovies(res.data);
        console.log(res.data);
    })
  }, []);

  return (
    <div>
    {movies.map((movie) => (
        <ul>{movie.tite}</ul>
    ))}
    </div>
  )
}
