import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../request";
import "./banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, SetMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      SetMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient( 180deg, transparent, rgba(37, 37, 37, 0.7), #111), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top",
      }}
    >
        
        <div className="banner-content">
            <img src={`${base_url}${movie.poster_path}`} alt="movieposter" />
            <div className="banner_contents">
               
                <h1 className="banner_title">
              
                {movie?.title || movie?.name || movie?.original_name}
                {/* {movie?.primary_release_date} */}
                </h1>

                <h1 className="banner_description">
                {truncate(movie?.overview, 255)}{" "}
                </h1>
                <div className="banner_buttons">
                <button className="banner_button2 ">Watch trailer</button>
                <button className="banner_button1">MyList</button>
                </div>
            </div>
      </div>
      <div className="banner-fadebottom" />
    </header>
  );
}

export default Banner;
