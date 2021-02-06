import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import "./Row.css";

function Row(props) {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

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
            <img
              style={{
                maxHeight: props.isPoster ? "350px" : null,
              }}
              alt={movieObject.original_title || movieObject.original_name}
              src={
                props.isPoster
                  ? `${baseImgUrl}${movieObject.poster_path}`
                  : `${baseImgUrl}${movieObject.backdrop_path}`
              }
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
