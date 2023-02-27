import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./row.css"
// import axios from 'axios';

function Row({title, fetchUrl, isLargeRow = false}) {

     const [movies, setMovies]= useState([]);

    //  const base_url = "https://image.tmdb.org/t/p/original/";
     const base_url = "https://image.tmdb.org/t/p/original/";     

     useEffect(() => {
      async function fetchdata () {
        const request =await axios.get(fetchUrl);
        console.log(request.data.results)
        setMovies(request.data.results)
        return request;
      } 
      fetchdata (); 
     }, [fetchUrl]);
     

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
        {movies.map(movie=>(
          <div className="card_container">
            <img className={`row_poster ${isLargeRow && "row_PosterLarge"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt=".." />
            <div className="overlay">
              <p className="movie_title">{movie?.title}</p>
            </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Row