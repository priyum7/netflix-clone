import React, { useState, useRef, useEffect } from "react";
import Row from "./Row/Row";
import requestUrls from "../../requests";
import loadingSVG from "../../Rolling-1s-200px.svg";

import "./Rows.css";
import { MovieRounded } from "@material-ui/icons";

function Rows() {
  const [activeRow, setActiveRow] = useState(null);
  const [movieProfileObject, setMovieProfileObject] = useState();
  const mobileMoviePoster = useRef();
  const mobileMovieIframe = useRef();

  const setCurrentActiveRow = (rowName) => {
    console.log("Active row :" + rowName);
    setActiveRow(rowName);
  };

  const setCurrentMovieRows = (tempMovieObject) => {
    setMovieProfileObject(tempMovieObject);
  };

  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const maxCharacters = 380;

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
      {movieProfileObject && (
        <div
          className="mobile_info"
          style={{
            transform: activeRow ? "translateY(0vh)" : "translateY(200vh)",
            minHeight: "100vh",
            height: "100%",
          }}
          onClick={() => {
            setActiveRow(null);
          }}
        >
          <div
            className="mobile_info_main"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className="mobile_description"
              style={{ display: activeRow ? null : "none" }}
            >
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
              ref={mobileMovieIframe}
              src={
                movieProfileObject.trailerUrl
                  ? `https://www.youtube.com/embed/` +
                    movieProfileObject.trailerUrl +
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
      )}
    </>
  );
}

export default Rows;
