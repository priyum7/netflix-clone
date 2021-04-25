import React, { useState, useEffect } from "react";
import requestUrls from "../../requests";
import axios from "../../axios";
import "./Header.css";
import Nav from "../Nav/Nav";
import HeaderInfo from "./HeaderInfo/HeaderInfo";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Header() {
  const [headerBack, setHeaderBack] = useState(null);

  useEffect(() => {
    const getRandomBackground = async function () {
      const backgroundsObjects = await axios.get(requestUrls.fetchTrending);

      setHeaderBack(
        backgroundsObjects.data.results[
          parseInt(Math.random() * backgroundsObjects.data.results.length - 1)
        ]
      );

      return backgroundsObjects;
    };

    getRandomBackground();
  }, []);

  console.log(headerBack);

  const backgroundPath =
    headerBack != null
      ? window.innerWidth <= 768
        ? `url("${baseImgUrl}${headerBack.poster_path}")`
        : `url("${baseImgUrl}${headerBack.backdrop_path}")`
      : null;

  return (
    <div
      className="header"
      style={{
        backgroundImage: `linear-gradient(to top, #141414 5% , transparent 30%), ${backgroundPath}`,
      }}
    >
      <Nav />
      {headerBack && (
        <HeaderInfo
          info={{
            title: headerBack.original_title || headerBack.original_name,
            description: headerBack.overview,
          }}
        />
      )}
    </div>
  );
}

export default Header;
