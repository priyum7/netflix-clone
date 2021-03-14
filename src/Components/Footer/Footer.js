import React from "react";
import "./Footer.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import react_logo from "../../reactjs-icon.svg";
function Footer() {
  return (
    <div className="footer">
      <p>
        Made with <FavoriteIcon className="heart_icon" color="secondary" />
        {"  "}
        using <img className="react_icon" src={react_logo} alt="react_logo" />
      </p>
    </div>
  );
}

export default Footer;
