import React, { useEffect, useState } from "react";
import "./Nav.css";
import NetflixLogo from "../../Netflix-Logo-PNG3.png";

function Nav() {
  const [scrollFlag, setScrollFlag] = useState(false);

  const minDimension =
    (window.innerHeight -
      window.innerHeight * (1 - window.innerWidth / window.screen.width)) *
    0.9;

  const scrollEvent = () => {
    if (window.pageYOffset < minDimension) {
      setScrollFlag(false);
    }

    if (window.pageYOffset > minDimension) {
      setScrollFlag(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div
      className="Nav"
      style={{
        backgroundColor: scrollFlag ? "#141414" : null,
        opacity: "0.85",
      }}
    >
      <img className="Nav_logo" src={NetflixLogo} alt="Netflix logo" />
      <img
        className="Nav_icon"
        src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"
        alt="Profile Icon"
      />
    </div>
  );
}

export default Nav;
