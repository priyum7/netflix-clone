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

  const backgroundPath =
    headerBack != null
      ? `url("${baseImgUrl}${headerBack.backdrop_path}")`
      : null;

  return (
    <div
      className="header"
      style={{
        backgroundImage: backgroundPath,
      }}
    >
      <Nav />
      <HeaderInfo info={headerBack} />
    </div>
  );
}

export default Header;
