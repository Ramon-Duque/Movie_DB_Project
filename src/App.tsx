import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import  MovieList  from './components/MovieList'
import SearchList from './components/SearchList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchList></SearchList>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
