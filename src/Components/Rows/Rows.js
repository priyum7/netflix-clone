import React from "react";
import Row from "./Row/Row";
import requestUrls from "../../requests";

function Rows() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        getUrl={requestUrls.fetchNetflixOriginals}
        isPoster={true}
      />
      <Row
        title="Trending Now"
        getUrl={requestUrls.fetchTrending}
        isPoster={false}
      />
      <Row
        title="Top Rated"
        getUrl={requestUrls.fetchTopRated}
        isPoster={false}
      />
      <Row
        title="Action Movies"
        getUrl={requestUrls.fetchActionMovies}
        isPoster={false}
      />
      <Row
        title="Comedy Movies"
        getUrl={requestUrls.fetchComedyMovies}
        isPoster={false}
      />
      <Row
        title="Horror Movies"
        getUrl={requestUrls.fetchHorrorMovies}
        isPoster={false}
      />
      <Row
        title="Romance Movies"
        getUrl={requestUrls.fetchRomanceMovies}
        isPoster={false}
      />
      <Row
        title="Documentaries"
        getUrl={requestUrls.fetchDocumentaries}
        isPoster={false}
      />
    </>
  );
}

export default Rows;
