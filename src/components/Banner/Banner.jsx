import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../request";
import "./banner.css";

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
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner_description">
          {truncate(movie?.overview, 155)}{" "}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button2 ">Play</button>
          <button className="banner_button1">MyList</button>
        </div>
      </div>
      <div className="banner-fadebottom" />
    </header>
  );
}

export default Banner;
