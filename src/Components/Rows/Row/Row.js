import React, { useState, useEffect, useRef } from "react";
import axios from "../../../axios";
import "./Row.css";
import Poster from "./Poster/Poster";

function Row(props) {
  const [movieList, setMovieList] = useState([]);
  const [movieProfileObject, setMovieProfileObject] = useState(false);
  const maxCharacters = 400;
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const showMovieInfo = (tempMovieObject) => {
    console.log(tempMovieObject);
    setMovieProfileObject(tempMovieObject);
  };

  useEffect(() => {
    const getMovies = async function () {
      const movies = await axios.get(props.getUrl);
      setMovieList(movies.data.results);
      return movies;
    };

    getMovies();
  }, [props.getUrl]);

  const errorHandler = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png";
  };

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movieList.map((movieObject) => {
          return (
            <Poster
              key={movieObject.original_title || movieObject.original_name}
              movieObject={movieObject}
              isPoster={props.isPoster}
              showMovieInfoOnClick={showMovieInfo}
            />
          );
        })}
      </div>
      <div
        className="movie_info"
        style={{
          height: movieProfileObject ? null : "0vw",
        }}
      >
        {movieProfileObject && (
          <>
            <div className="description">
              <h1>
                {movieProfileObject.original_title ||
                  movieProfileObject.original_name}
              </h1>
              <p className="overview">
                {movieProfileObject.overview.length < maxCharacters
                  ? movieProfileObject.overview
                  : movieProfileObject.overview.search("\\.") > 0
                  ? `${movieProfileObject.overview.slice(
                      0,
                      movieProfileObject.overview
                        .slice(0, maxCharacters)
                        .lastIndexOf(".") + 1
                    )} `
                  : `${movieProfileObject.description.slice(
                      0,
                      maxCharacters
                    )} ...`}
              </p>
            </div>
            <div className="media">
              {movieProfileObject.trailerUrl ? (
                <iframe
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                  src={
                    `https://www.youtube.com/embed/` +
                    movieProfileObject.trailerUrl +
                    `?autoplay=1&mute=1&controls=0&loop=1`
                  }
                  frameBorder="0"
                  allow="autoplay"
                />
              ) : (
                <img
                  alt={
                    movieProfileObject.original_title ||
                    movieProfileObject.original_name
                  }
                  src={`${baseImgUrl}${movieProfileObject.backdrop_path}`}
                  onError={errorHandler}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Row;
