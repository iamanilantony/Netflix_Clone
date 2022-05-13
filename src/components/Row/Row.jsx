import { useState, useEffect, React } from "react";
import axios from "../../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  //Function to extract date
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) : str;
  }


  //Set State
  const [trailerUrl, SetTrailerUrl] = useState("");
  const [movies, SetMovies] = useState([]);

  //Get Movie data from API
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      SetMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //   Pop Up Trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      SetTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          SetTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error());
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie) => (
          <>
          <div className="row_item">
            <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                // className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                className={`row_poster`}
                // className="row_poster"
                src={`${base_url}${
                //   isLargeRow ? movie.poster_path : movie.backdrop_path
                movie.poster_path
                }`}
                alt={movie.name}
            /> 
                    <div className="rowtitle">
                        <span>{`${movie.title}`}</span>  
                        <p>
                        {`${ truncate(movie?.release_date, 5) }`}
                        </p>
                    </div>
            </div>
          </>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
