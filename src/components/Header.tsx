import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>ExStream</h1>
      <a href="#home">Home</a>
      <a href="#favorites">Favorites</a>
      <div className="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search..." name="search"></input>
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  )
}