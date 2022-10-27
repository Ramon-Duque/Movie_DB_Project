import React, { useEffect, useState } from 'react'
import { Result } from '../models/PopMovie'
import { getPopMovies } from '../services/PopularMovies'
import { getSearchMovies } from '../services/SearchService'


export default function SearchList() {
  const [inputValue, setInputValue] = useState ("");
  const [results, setSearchResults] = useState()
  const onChange = (event: any)=>{
    event.preventDefault()
    setInputValue(event.target.value)
  } 
  const onSubmit = (event: any)=>{
     event.preventDefault()
        const fetch = async () => {
      try {
        const res = await getSearchMovies(inputValue);
        setSearchResults(res)
        console.log(res)
        // setData({ ...data, results: res.data });
      } catch (err) {
        console.error(err);
      }
    };
    fetch()
   }
  }
  
    const searchDisplay = searchResults
    {results.map((results)) => ()
    
return (
    <div>
      <form className= 'searchForm'>
      <input className='searchInput' onChange={(event) => onChange(event)}/>
      <button className= 'searchButton' onClick={(event) => onSubmit(event)}>Search</button>
      </form>
    </div>
  )
  }
const useFetch = () => {
  const [data, setData] = useState ({
    searchItem: "",
    results: []
  });


  return;
}