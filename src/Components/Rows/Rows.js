import React, { useState, useRef, useEffect } from "react";
import Row from "./Row/Row";
import requestUrls from "../../requests";
import loadingSVG from "../../Rolling.svg";

import "./Rows.css";

function Rows() {
  const [activeRow, setActiveRow] = useState(null);

  const [moviePoster, setMoviePoster] = useState(null);
  const [movieDesc, setMovieDesc] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);

  const setCurrentActiveRow = (rowName) => {
    console.log("Active row :" + rowName);
    setActiveRow(rowName);
  };

  const setCurrentMovieRows = (tempMovieObject) => {
    setMoviePoster(tempMovieObject.poster_path);
    setMovieDesc(
      "description" in tempMovieObject
        ? sliceMovieDescription(tempMovieObject.description)
        : sliceMovieDescription(tempMovieObject.overview)
    );
    setMovieTrailer(tempMovieObject.trailerUrl);
  };

  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const maxCharacters = 200;

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

  const errorHandlerPotrait = (e) => {
    e.target.onerror = null;
    e.target.src = loadingSVG;
  };

  return (
    <>
      <div className="Rows">
        <Row
          title="Trending Now"
          getUrl={requestUrls.fetchTrending}
          isPoster={false}
          currentActiveRow={activeRow}
          activeRowChangeHandler={setCurrentActiveRow}
          setCurrentMovieRows={setCurrentMovieRows}
        />

        <Row
          title="NETFLIX ORIGINALS"
          getUrl={requestUrls.fetchNetflixOriginals}
          isPoster={true}
          currentActiveRow={activeRow}
          activeRowChangeHandler={setCurrentActiveRow}
          setCurrentMovieRows={setCurrentMovieRows}
        />

        <Row
          title="Top Rated"
          getUrl={requestUrls.fetchTopRated}
          isPoster={false}
          currentActiveRow={activeRow}
          activeRowChangeHandler={setCurrentActiveRow}
          setCurrentMovieRows={setCurrentMovieRows}
        />
        <Row
          title="Action Movies"
          getUrl={requestUrls.fetchActionMovies}
          isPoster={false}
          currentActiveRow={activeRow}
          activeRowChangeHandler={setCurrentActiveRow}
          setCurrentMovieRows={setCurrentMovieRows}
        />
        <Row
          title="Comedy Movies"
          getUrl={requestUrls.fetchComedyMovies}
          isPoster={false}
          currentActiveRow={activeRow}
          activeRowChangeHandler={setCurrentActiveRow}
          setCurrentMovieRows={setCurrentMovieRows}
        />
        <Row
          title="Horror Movies"
          getUrl={requestUrls.fetchHorrorMovies}
          isPoster={false}
          currentActiveRow={activeRow}
          activeRowChangeHandler={setCurrentActiveRow}
          setCurrentMovieRows={setCurrentMovieRows}
        />
        <Row
          title="Romance Movies"
          getUrl={requestUrls.fetchRomanceMovies}
          isPoster={false}
          currentActiveRow={activeRow}
          activeRowChangeHandler={setCurrentActiveRow}
          setCurrentMovieRows={setCurrentMovieRows}
        />
        <Row
          title="Documentaries"
          getUrl={requestUrls.fetchDocumentaries}
          isPoster={false}
          currentActiveRow={activeRow}
          activeRowChangeHandler={setCurrentActiveRow}
          setCurrentMovieRows={setCurrentMovieRows}
        />
      </div>

      <div
        className="mobile_info"
        style={{
          transform: activeRow ? "translateY(0vh)" : "translateY(100vh)",
          minHeight: "100vh",
          height: "100%",
        }}
        onClick={() => {
          setActiveRow(null);
          setMoviePoster(null);
          setMovieDesc(null);
          setMovieTrailer(null);
        }}
      >
        <div
          className="mobile_info_main"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            id="mobile_description"
            className="mobile_description"
            style={{ minHeight: "20vh", maxHeight: "20vh", height: "100%" }}
          >
            <img
              src={`${baseImgUrl}${moviePoster}`}
              onError={errorHandlerPotrait}
              style={{
                height: "100%",
                boxSizing: "fill",
                backgroundImage: `url("${loadingSVG}")`,
                backgroundSize: "contain",
              }}
            />
            <p
              style={{
                paddingLeft: "2vw",
                width: "100%",
                fontSize: "2vh",
              }}
            >
              {movieDesc}
            </p>
          </div>
          <iframe
            style={{
              display: activeRow ? null : "none",
              maxHeight: "26vh",
              width: "100%",
              height: "100%",
            }}
            src={
              movieTrailer
                ? `https://www.youtube.com/embed/` +
                  movieTrailer +
                  `?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&${
                    Math.random() * 1000000
                  }`
                : `https://www.youtube.com/embed/` +
                  "_vECE5BJbA0" +
                  `?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&disablekb=1&${
                    Math.random() * 1000000
                  }`
            }
            frameBorder="0"
            allow="autoplay"
          />
        </div>
      </div>
    </>
  );
}

export default Rows;
