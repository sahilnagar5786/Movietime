import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./Banner.css";
import requests from './Request';


function Banner() {

    const [movie, setMovie]=useState([]);

    useEffect(() => {
     async function fetchData (){
        const request = await axios.get(requests.requestPopular);
        setMovie(
            request.data.results[
                Math.floor(Math.random()* request.data.results.length-1)
            ]
        );
        return request ;
     }
     fetchData();
    }, []);
    console.log(movie);
    

    function trancate(string, n) {
      return string?.length > n ? string.substr(0, n-1)+'...' : string;
    }

  return (
    <header className="banner" 
    style={{
      objectFit :"contain",
      height : "73vh",
      backgroundRepeat : "no-repeat",
    backgroundSize : "100vw 73vh",  
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, 
    backgroundPosition : "center center" ,}}>

        <div className="banner_content">
            <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name }
            </h1>
            <div className="banner_buttons">
                <button className="banner_button btn btn-light">Play</button>
                <button className="banner_button btn btn-outline-light">My List</button>
            </div>
            <h1 className="banner_description">{trancate (movie?.overview,150)}</h1>
            </div> 
            <div className="banner--fadeBottom"/>  
    </header>
  )
}

export default Banner



// https://static.vecteezy.com/system/resources/previews/005/502/524/original/cinema-background-concept-movie-theater-object-on-red-curtain-background-and-movie-time-with-electric-bulbs-frame-illustration-free-vector.jpg