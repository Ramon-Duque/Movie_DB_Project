import React, { useEffect, useState } from 'react'
import { Result } from '../models/PopMovie'
import { getPopMovies } from '../services/PopularMovies'
import { getSearchMovies } from '../services/SearchService'
import "./MovieCard.css";


export default function SearchList() {
  const [inputValue, setInputValue] = useState ("");
  const [results, setSearchResults] = useState<Result[]>([])
  const onChange = (event: any)=>{
    event.preventDefault()
    setInputValue(event.target.value)
  } 
  const onSubmit = (event: any)=>{
     event.preventDefault()
        const fetch = async () => {
      try {
        const res = await getSearchMovies(inputValue);
        setSearchResults(res.data.results)
        console.log(res)
        // setData({ ...data, results: res.data });
      } catch (err) {
        console.error(err);
      }
    };
    fetch()
   }
  
    
    
   return (
    <div>
      <form className= 'searchForm'>
      <input className='searchInput' onChange={(event) => onChange(event)}/>
      <button className= 'searchButton' onClick={(event) => onSubmit(event)}>Search</button>
      </form>
      {results.map((result) => {
      return(
        <div className='Movielist'>
          {result.title}
          <li className="MovieCard">
            <img
              src={`https://image.tmdb.org/t/p/w1280${result.poster_path}`}
              alt={result.title}
            />
          </li>
        </div>
      )}
     
      )}
      </div>
   )}
