import React from 'react';
import './App.css';
import  MovieList  from './components/MovieList'
import SearchList from './components/SearchList';

function App() {
  return (
    <div className="App">
      <SearchList></SearchList>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
