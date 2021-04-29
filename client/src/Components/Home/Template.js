import React from "react";
import bg from "../../bg.jpg";
import NetflixLogo from "../../Netflix-Logo-PNG3.png";
import { Link } from "react-router-dom";

function Template(props) {
  return (
    <>
      <div
        style={{
          background: props.isRegister
            ? "#f3f3f3"
            : `linear-gradient(to top, #141414 5% , transparent 50% ),linear-gradient(to bottom, #141414 5% , transparent 50% ),url(${bg})`,
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img
            className="Nav_logo"
            src={NetflixLogo}
            alt="Netflix logo"
            style={{
              position: "absolute",
              left: "3vw",
              top: "0.1rem",
              objectFit: "contain",
              maxHeight: "8.5rem",
              cursor: "pointer",
            }}
          />
        </Link>

        {props.showLogin && (
          <Link to="/login">
            <button
              style={{
                fontSize: "1.7rem",
                backgroundColor: props.isRegister ? "#f3f3f3" : "#e50914",
                border: "0px",
                fontWeight: "600",
                borderRadius: "0.2vw",
                color: props.isRegister ? "#333" : "white",

                height: "3.5rem",
                position: "absolute",
                right: "3vw",
                top: "2rem",
                width: "8rem",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </Link>
        )}

        {props.isRegister && (
          <hr
            style={{
              border: "1px solid #e6e6e6",
              position: "absolute",
              top: "8rem",
              width: "99vw",
            }}
          />
        )}

        <div
          style={{
            minHeight: "50vh",
            width: "70vw",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Template;
