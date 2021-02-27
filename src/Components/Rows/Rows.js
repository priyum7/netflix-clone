import React, { useState } from "react";
import Row from "./Row/Row";
import requestUrls from "../../requests";
import "./Rows.css";

function Rows() {
  const [activeRow, setActiveRow] = useState();

  const setCurrentActiveRow = (rowName) => {
    console.log("Active row :" + rowName);
    setActiveRow(rowName);
  };

  return (
    <div className="Rows">
      <Row
        title="NETFLIX ORIGINALS"
        getUrl={requestUrls.fetchNetflixOriginals}
        isPoster={true}
        currentActiveRow={activeRow}
        activeRowChangeHandler={setCurrentActiveRow}
      />
      <Row
        title="Trending Now"
        getUrl={requestUrls.fetchTrending}
        isPoster={false}
        currentActiveRow={activeRow}
        activeRowChangeHandler={setCurrentActiveRow}
      />
      <Row
        title="Top Rated"
        getUrl={requestUrls.fetchTopRated}
        isPoster={false}
        currentActiveRow={activeRow}
        activeRowChangeHandler={setCurrentActiveRow}
      />
      <Row
        title="Action Movies"
        getUrl={requestUrls.fetchActionMovies}
        isPoster={false}
        currentActiveRow={activeRow}
        activeRowChangeHandler={setCurrentActiveRow}
      />
      <Row
        title="Comedy Movies"
        getUrl={requestUrls.fetchComedyMovies}
        isPoster={false}
        currentActiveRow={activeRow}
        activeRowChangeHandler={setCurrentActiveRow}
      />
      <Row
        title="Horror Movies"
        getUrl={requestUrls.fetchHorrorMovies}
        isPoster={false}
        currentActiveRow={activeRow}
        activeRowChangeHandler={setCurrentActiveRow}
      />
      <Row
        title="Romance Movies"
        getUrl={requestUrls.fetchRomanceMovies}
        isPoster={false}
        currentActiveRow={activeRow}
        activeRowChangeHandler={setCurrentActiveRow}
      />
      <Row
        title="Documentaries"
        getUrl={requestUrls.fetchDocumentaries}
        isPoster={false}
        currentActiveRow={activeRow}
        activeRowChangeHandler={setCurrentActiveRow}
      />
    </div>
  );
}

export default Rows;
