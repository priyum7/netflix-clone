import React, { useEffect, useState } from "react";
import "./Nav.css";
import NetflixLogo from "../../Netflix-Logo-PNG3.png";

function Nav() {
  const [scrollFlag, setScrollFlag] = useState(false);
  const [minScrollLength, setMinScrollLength] = useState(calcMinScrollLength());

  function calcMinScrollLength() {
    return (
      (window.innerHeight -
        window.innerHeight * (1 - window.innerWidth / window.screen.width)) *
      0.85
    );
  }

  const scrollEvent = () => {
    if (window.pageYOffset < minScrollLength) {
      setScrollFlag(false);
    }

    if (window.pageYOffset > minScrollLength) {
      setScrollFlag(true);
    }
  };

  useEffect(() => {
    calcMinScrollLength();
    window.addEventListener("scroll", scrollEvent);
    window.addEventListener("resize", () => {
      setMinScrollLength(calcMinScrollLength());
    });
    return () => {
      window.removeEventListener("scroll", scrollEvent);
      window.removeEventListener("resize", () => {
        setMinScrollLength(calcMinScrollLength());
      });
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
