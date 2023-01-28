import React, { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import searchIcon from "./search.svg"

//const API_URL = "http://www.omdbapi.com?apikey=b6003d8a"; //uncomment api for using it
const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // hooks used for searching movies
  const[movies, setMovies] =  useState([]); 

  useEffect(() =>{
    searchMovies("Batman");
  },[]);

const searchMovies = async(title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  setMovies(data.Search);
};
return (
  
  <div className="app">
    <h1>MovieLand</h1>
    <div className='search'>
      <input value={searchTerm}
        onChange={(e) =>setSearchTerm(e.target.value)}
        placeholder = "search for movies"
      />
      <img src={searchIcon} alt="search" onClick={() =>searchMovies(searchTerm)}/>

    </div>
    {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
    ):(
      <div className='empty'>
      <h2>No Movies Found</h2>
      </div>
    )}
      
  </div>
 
);
    };

export default App;
