import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import "./Row.css";
import Poster from "./Poster/Poster";

function Row(props) {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = async function () {
      const movies = await axios.get(props.getUrl);
      setMovieList(movies.data.results);
      return movies;
    };

    getMovies();
  }, [props.getUrl]);

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row_posters">
        {movieList.map((movieObject) => {
          return (
            <Poster
              key={movieObject.original_title || movieObject.original_name}
              movieName={
                movieObject.original_title || movieObject.original_name
              }
              src={
                props.isPoster
                  ? `${baseImgUrl}${movieObject.poster_path}`
                  : `${baseImgUrl}${movieObject.backdrop_path}`
              }
              isPoster={props.isPoster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
