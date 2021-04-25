import React from "react";
import "./Footer.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import react_logo from "../../reactjs-icon.svg";
import linkedin_logo from "super-tiny-icons/images/svg/linkedin.svg";
import github_logo from "super-tiny-icons/images/svg/github.svg";
import gmail_logo from "super-tiny-icons/images/svg/gmail.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="icon_row">
        Made with <FavoriteIcon className="heart_icon" color="secondary" />
        {"  "}
        using {"  "}
        <img className="react_icon" src={react_logo} alt="react_logo" />
      </p>
      <br />
      <p className="contact_me">
        Connect with me @{" "}
        <a href="https://www.linkedin.com/in/priyumagrawal" target="_blank">
          <img
            className="contact_icons"
            src={linkedin_logo}
            alt="LinkedIn Logo"
          />
        </a>
        <a href="mailto:priyumagrawal@gmail.com" target="_blank">
          <img className="contact_icons" src={gmail_logo} alt="Gmail Logo" />
        </a>
        <a href="https://github.com/priyum7" target="_blank">
          <img className="contact_icons" src={github_logo} alt="Github Logo" />
        </a>
      </p>
    </div>
  );
}

export default Footer;
