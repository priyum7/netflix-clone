import React, { useState, useEffect, useRef } from "react";
import movieTrailer from "movie-trailer";
import "./Poster.css";

function Poster(props) {
  const [delayFlag, setDelayFlag] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const setDelayflagTimeout = () => {
    if (trailerUrl) setDelayFlag(true);
  };

  let timeout;

  const mouseOverHandler = (movieName) => {
    timeout = setTimeout(setDelayflagTimeout, 800);
  };

  useEffect(() => {
    movieTrailer(props.movieName)
      .then((response) => {
        if (response) {
          setTrailerUrl(response.split("v=")[1].substring(0, 11));
        }
      })
      .catch((error) => {
        console.log(`Cannot fetch ${props.movieName} trailer URL.`);
      });
  }, []);

  const errorHandler = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png";
  };

  return (
    <div
      className="Poster"
      onMouseOver={() => mouseOverHandler(props.movieName)}
      onMouseOut={() => {
        clearTimeout(timeout);
        setDelayFlag(false);
      }}
    >
      {delayFlag ? (
        <div
          className="posterOnHover"
          style={{ backgroundImage: `url(${props.src})` }}
        >
          <iframe
            style={{
              height: "100%",
            }}
            src={
              `https://www.youtube.com/embed/` +
              trailerUrl +
              `?autoplay=1&mute=1&controls=0&loop=1`
            }
            frameBorder="0"
            allow="autoplay"
          />
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
