import React, { useState, useEffect, useRef } from "react";
import movieTrailer from "movie-trailer";
import "./Poster.css";

function Poster(props) {
  const [delayFlag, setDelayFlag] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const mouseOverHandler = (movieName) => {
    console.log(`${props.movieName}-Hover In`);
    console.log(trailerUrl);
    if (trailerUrl) setDelayFlag(true);
  };

  useEffect(() => {
    movieTrailer(props.movieName)
      .then((response) => {
        if (response) {
          setTrailerUrl(response.split("v=")[1].substring(0, 11));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const errorHandler = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png";
  };

  const opts = {
    width: "300px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div
      className="Poster"
      onMouseEnter={() => mouseOverHandler(props.movieName)}
      onMouseOut={() => {
        setDelayFlag(false);
        console.log(`${props.movieName}-Hover Out-${delayFlag}`);
      }}
    >
      {delayFlag ? (
        <div className="posterOnHover">
          <iframe
            style={{
              height: "100%",
            }}
            src={`https://www.youtube.com/embed/` + trailerUrl + `?autoplay=1`}
            frameBorder="0"
          />
          <p>{props.movieName}</p>
        </div>
      ) : (
        <img
          className={props.isPoster ? "imgAsPoster" : ""}
          alt={props.movieName}
          src={props.src}
          onError={errorHandler}
        />
      )}
    </div>
  );
}

export default Poster;
