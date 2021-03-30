import React, { useState, useEffect, useRef } from "react";
import axios from "../../../axios";
import "./Row.css";
import Poster from "./Poster/Poster";

function Row(props) {
  const [movieList, setMovieList] = useState([]);
  const [movieProfileObject, setMovieProfileObject] = useState(false);
  const maxCharacters = 380;
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const showMovieInfo = (tempMovieObject) => {
    setMovieProfileObject(tempMovieObject);
    props.activeRowChangeHandler(props.title);
    props.setCurrentMovieRows(tempMovieObject);
  };

  useEffect(() => {
    const getMovies = async function () {
      const movies = await axios.get(props.getUrl);
      setMovieList(movies.data.results);
      return movies;
    };

    getMovies();
  }, [props.getUrl]);

  const errorHandlerLandscape = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png";
  };

  const sliceMovieDescription = (MovieDescription) => {
    if (MovieDescription.length == 0) return "Description Unavailable :(";

    return MovieDescription.length < maxCharacters
      ? MovieDescription
      : MovieDescription.search("\\.") < maxCharacters
      ? `${MovieDescription.slice(
          0,
          MovieDescription.slice(0, maxCharacters).lastIndexOf(".") + 1
        )} `
      : `${MovieDescription.slice(
          0,
          MovieDescription.slice(0, maxCharacters).lastIndexOf(" ") + 1
        )}...`;
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
          height: props.currentActiveRow == props.title ? null : "0vw",
          display: window.innerWidth <= 768 ? "none" : null,
        }}
      >
        {props.currentActiveRow == props.title && (
          <>
            <div className="description">
              <h1>
                {movieProfileObject.original_title ||
                  movieProfileObject.original_name}
              </h1>
              <p className="overview">
                {"description" in movieProfileObject
                  ? sliceMovieDescription(movieProfileObject.description)
                  : sliceMovieDescription(movieProfileObject.overview)}
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
                    `?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1`
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
                  onError={errorHandlerLandscape}
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
