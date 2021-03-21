import React, { useState, useEffect, useRef } from "react";
import axios from "../../../axios";
import "./Row.css";
import Poster from "./Poster/Poster";

function Row(props) {
  const mobileMoviePoster = useRef();
  const [movieList, setMovieList] = useState([]);
  const [movieProfileObject, setMovieProfileObject] = useState(false);
  const maxCharacters = 380;
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const showMovieInfo = (tempMovieObject) => {
    console.log(tempMovieObject);

    setMovieProfileObject(tempMovieObject);
    props.activeRowChangeHandler(props.title);
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

  const errorHandlerPotrait = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg";
  };

  const sliceMovieDescription = (MovieDescription) => {
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
                {movieProfileObject.overview.length < maxCharacters
                  ? movieProfileObject.overview
                  : movieProfileObject.overview.search("\\.") > 0
                  ? `${movieProfileObject.overview.slice(
                      0,
                      movieProfileObject.overview
                        .slice(0, maxCharacters)
                        .lastIndexOf(".") + 1
                    )} `
                  : `${movieProfileObject.overview.slice(
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
                  onError={errorHandlerLandscape}
                />
              )}
            </div>
          </>
        )}
      </div>

      <div
        className="mobile_info"
        style={{
          transform:
            props.currentActiveRow == props.title
              ? "translateY(0vh)"
              : "translateY(200vh)",
          minHeight: "100vh",
          height: "100%",
        }}
        onClick={() => {
          props.activeRowChangeHandler(null);
        }}
      >
        <div
          className="mobile_info_main"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="mobile_description">
            <img
              src={`${baseImgUrl}${movieProfileObject.poster_path}`}
              onError={errorHandlerPotrait}
              style={{
                maxHeight: "20vh",
                boxSizing: "fill",
              }}
              ref={mobileMoviePoster}
            />
            {movieProfileObject && (
              <p style={{ paddingLeft: "2vw", fontSize: "3.1vw" }}>
                {"description" in movieProfileObject
                  ? sliceMovieDescription(movieProfileObject.description)
                  : sliceMovieDescription(movieProfileObject.overview)}
              </p>
            )}
          </div>
          <iframe
            style={{
              maxHeight: "26vh",
              width: "100%",
              height: "100%",
            }}
            src={
              movieProfileObject.trailerUrl
                ? `https://www.youtube.com/embed/` +
                  movieProfileObject.trailerUrl +
                  `?autoplay=1&mute=1&controls=0&playsinline=1`
                : `https://www.youtube.com/embed/` +
                  "_vECE5BJbA0" +
                  `?autoplay=1&mute=1&controls=0&playsinline=1`
            }
            frameBorder="0"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}

export default Row;
