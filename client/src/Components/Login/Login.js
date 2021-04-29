import React, { useState } from "react";
import Template from "../Home/Template";
import { Link, Redirect } from "react-router-dom";
import "../Login/Login.css";
import WarningIcon from "@material-ui/icons/Warning";

function Login() {
  const [emailError, setEmailError] = useState(undefined);
  const [passwordError, setPasswordError] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToApp, setRedirectToApp] = useState(false);
  const [showError, setShowError] = useState(null);

  const checkEmail = () => {
    if (email === "" || email.search(/\w+@\w+.[A-Za-z]+/i) === -1) {
      setEmailError("Please enter a valid email address.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const checkPassword = () => {
    if (password == "" || password.length < 4 || password.length > 60) {
      setPasswordError(
        "Your password must contain between 4 and 60 characters."
      );
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const userLogin = () => {
    fetch("/login", {
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
        if (res.success) setRedirectToApp(true);
        else
          setShowError({
            errorType: "Invalid Credentials",
          });
      });
  };

  console.log(password);

  if (redirectToApp) return <Redirect to="browse" />;

  return (
    <>
      <Template>
        <div
          style={{
            boxSizing: "border-box",
            backgroundColor: "rgba(0,0,0,0.7)",
            minHeight: "70vh",
            minWidth: "460px",
            maxWidth: "460px",
            marginTop: "-10vh",
          }}
        >
          <div
            style={{
              paddingTop: "12%",
              paddingLeft: "15%",
              paddingRight: "15%",
            }}
          >
            {showError && (
              <div className="login_errorDialog">
                <WarningIcon
                  style={{ fontSize: "2.8rem", paddingRight: "1rem" }}
                />
                {showError.errorType === "Invalid Credentials" ? (
                  <div>
                    <b> Enter valid email password</b>{" "}
                  </div>
                ) : null}
              </div>
            )}
            <span
              style={{
                display: "block",
                fontSize: "3rem",
                fontWeight: "bold",
                paddingBottom: "2%",
              }}
            >
              Sign In
            </span>
            <input
              className="login_input"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onBlur={checkEmail}
            />
            <span className="login_errorBox">{emailError}</span>
            <input
              className="login_input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={checkPassword}
            />
            <span className="login_errorBox">{passwordError}</span>
            <button
              className="login_input btn"
              onClick={() => {
                if (checkEmail() & checkPassword()) userLogin();
              }}
            >
              Sign In
            </button>
            <div style={{ marginTop: "2vh", fontSize: "1.6rem" }}>
              <span
                style={{
                  color: "#737373",
                }}
              >
                New to Netflix?{" "}
              </span>{" "}
              <Link to="/register">Sign up now.</Link>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
}

export default Login;
