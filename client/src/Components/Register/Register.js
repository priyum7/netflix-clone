import React, { useState } from "react";
import Template from "../Home/Template";
import "./Register.css";
import WarningIcon from "@material-ui/icons/Warning";
import { Link, Redirect } from "react-router-dom";
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

  const [showError, setShowError] = useState(null);
  const [redirectToApp, setRedirectToApp] = useState(false);

  const checkEmail = () => {
    if (email === "" || email.search(/\w+@\w+.[A-Za-z]+/i) === -1) {
      setEmailError({
        error: "Please enter a valid email address.",
        color: "#b92d2b",
      });
      return false;
    } else {
      setEmailError({
        error: "",
        color: "green",
      });
      return true;
    }
  };

  const checkPassword = () => {
    if (password === "") {
      setPasswordError({
        error: "Password is required.",
        color: "#b92d2b",
      });
      return false;
    } else if (password.length < 4 || password.length > 60) {
      {
        setPasswordError({
          error: "Password should be between 4 and 60 characters long.",
          color: "#b92d2b",
        });
        return false;
      }
    } else {
      setPasswordError({
        error: "",
        color: "green",
      });
      return true;
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
          setShowError({
            errorType: "User Exists",
          });
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
            .then((res) => {
              if (res.success) {
                setRedirectToApp(true);
              } else {
                setShowError({
                  errorType: "Signup Failed",
                });
              }
            })
            .catch((e) => {
              console.error(e);
            });
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  if (redirectToApp) return <Redirect to="/login"></Redirect>;

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
          {showError && (
            <div className="register_errorDialog">
              <WarningIcon
                style={{ fontSize: "2.8rem", paddingRight: "1rem" }}
              />
              {showError.errorType === "User Exists" ? (
                <div>
                  <b>Looks like that account already exists.</b>{" "}
                  <Link to="/login">
                    <span style={{ textDecoration: "underline" }}>
                      Sign into that account
                    </span>
                  </Link>{" "}
                  or try using a different email.
                </div>
              ) : null}

              {showError.errorType === "Signup Failed" ? (
                <div>
                  <b>An error occured. Please try again!</b>
                </div>
              ) : null}
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
            onBlur={checkPassword}
            style={{
              borderColor: passwordError.color,
            }}
          />
          <span className="register_errorBox">{passwordError.error}</span>

          <button
            className="register_input btn"
            onClick={() => {
              setShowError(null);

              if (checkPassword() & checkEmail()) registerUser();
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
