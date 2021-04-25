import React, { useState } from "react";
import Template from "../Home/Template";
import "./Register.css";
import WarningIcon from "@material-ui/icons/Warning";
import { Link } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState({
    error: "",
    color: "",
  });
  const [passwordError, setPasswordError] = useState({
    error: "",
    color: "",
  });

  const [userExists, setUserExists] = useState(false);

  const checkEmail = () => {
    if (email === "" || email.search(/[A-Za-z]+@[A-Za-z]+.[A-Za-z]+/i) === -1) {
      setEmailError({
        error: "Please enter a valid email address.",
        color: "#b92d2b",
      });
    } else {
      setEmailError({
        error: "",
        color: "green",
      });
    }
  };

  const checkPassword = () => {
    if (password === "")
      setPasswordError({
        error: "Password is required.",
        color: "#b92d2b",
      });
    else if (password.length < 4 || password.length > 60) {
      setPasswordError({
        error: "Password should be between 4 and 60 characters long.",
        color: "#b92d2b",
      });
    } else {
      setPasswordError({
        error: "",
        color: "green",
      });
    }
  };

  const registerUser = () => {
    fetch("/checkUser/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.exists) {
          setUserExists(true);
        } else {
          fetch("/register/", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
          })
            .then((res) => res.json())
            .then((res) => {})
            .catch((e) => {
              console.error(e);
            });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <Template isRegister showLogin>
        <div
          style={{
            position: "relative",
            boxSizing: "border-box",
            minHeight: "70vh",
            minWidth: "460px",
            maxWidth: "460px",
            marginTop: "4rem",
            color: "#333",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          {userExists && (
            <div className="register_userExistsBox">
              <WarningIcon
                style={{ fontSize: "2.8rem", paddingRight: "1rem" }}
              />
              <div>
                <b>Looks like that account already exists.</b>{" "}
                <Link to="/login">
                  <span style={{ textDecoration: "underline" }}>
                    Sign into that account
                  </span>
                </Link>{" "}
                or try using a different email.
              </div>
            </div>
          )}

          <span style={{ fontSize: "2.3rem", fontWeight: "550" }}>
            Create a password to start your membership.
          </span>
          <br />
          <br />
          <span style={{ fontSize: "2rem" }}>
            Just a few more steps and you're done! We hate paperwork, too.
          </span>
          <input
            type="text"
            className="register_input"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={() => {
              checkEmail();
            }}
            style={{
              borderColor: emailError.color,
            }}
          />

          <span className="register_errorBox">{emailError.error}</span>

          <input
            type="password"
            className="register_input"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onBlur={() => {
              checkPassword();
            }}
            style={{
              borderColor: passwordError.color,
            }}
          />
          <span className="register_errorBox">{passwordError.error}</span>

          <button
            className="register_input btn"
            onClick={() => {
              setUserExists(false);
              if (!emailError.error && !passwordError.error) registerUser();
            }}
          >
            Sign Up
          </button>
        </div>
      </Template>
    </>
  );
}

export default Register;
