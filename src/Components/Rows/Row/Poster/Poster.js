import React, { useState, useEffect, useRef } from "react";
import movieTrailer from "movie-trailer";
import "./Poster.css";

function Poster(props) {
  const [trailerUrl, setTrailerUrl] = useState("");

  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const movieName =
    props.movieObject.original_title || props.movieObject.original_name;
  const posterpath = props.isPoster
    ? `${baseImgUrl}${props.movieObject.poster_path}`
    : `${baseImgUrl}${props.movieObject.backdrop_path}`;

  useEffect(() => {
    if (!trailerUrl) {
      movieTrailer(movieName)
        .then((response) => {
          if (response) {
            setTrailerUrl(response.split("v=")[1].substring(0, 11));
          }
        })
        .catch((error) => {
          console.log(`Cannot fetch ${movieName} trailer URL.`);
        });
    }
  }, []);

  const errorHandler = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png";
  };

  return (
    <div
      className="Poster"
      onClick={() => {
        props.showMovieInfoOnClick({
          ...props.movieObject,
          trailerUrl: trailerUrl,
          isPoster: props.isPoster,
        });
      }}
    >
      <img
        className={props.isPoster ? "imgAsPoster" : ""}
        alt={movieName}
        src={posterpath}
        onError={errorHandler}
      />
    </div>
  );
}

export default Poster;
