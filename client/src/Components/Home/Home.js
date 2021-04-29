import React, { useState } from "react";
import Template from "./Template";
import { Redirect } from "react-router-dom";
const Home = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [userExists, setUserExists] = useState(undefined);

  const checkEmail = () => {
    if (email === "") {
      setError("Email is required.");
      return false;
    } else if (email.search(/\w+@\w+.[A-Za-z]+/i)) {
      setError("Please enter a valid email address.");
      return false;
    } else {
      setError("");
      return true;
    }
  };
  const checkUser = () => {
    if (!checkEmail()) return;
    fetch("/checkUser", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if ("error" in res) {
          throw res.error;
        } else {
          setUserExists(res.exists);
        }
      })
      .catch((error) => {
        setError("Unable to connect to server! Please try again");
        console.error(error);
      });
  };

  if (userExists === true) {
    return <Redirect to="/login" />;
  } else if (userExists === false) {
    return <Redirect to="/register" />;
  }

  return (
    <>
      <Template isHomepage showLogin={true}>
        <span
          style={{
            textAlign: "center",
            fontSize: "4.5rem",
            fontWeight: "bold",
            width: "90%",
          }}
        >
          Unlimited movies, TV shows and more.
        </span>

        <span style={{ fontSize: "2rem", paddingTop: "2vh" }}>
          Watch anywhere. Cancel anytime.
        </span>

        <span
          style={{
            fontSize: "1.8rem",
            paddingTop: "2.5vh",
            textAlign: "center",
            width: "100%",
          }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </span>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            height: "6vh",
            fontFamily:
              "Netflix Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="  Email address"
              style={{
                flex: "6",
                borderRadius: "0.2vw 0 0 0.2vw",
                border: "1px solid gray",
                width: "40vw",
                minWidth: "40rem",
                marginTop: "1.5vw",
                minHeight: "5rem",
                height: "3rem",
                fontSize: "1.2rem",
              }}
            />
            <span
              style={{
                color: "orange",
                alignSelf: "flex-start",
                marginTop: "1vh",
                fontSize: "1.4rem",
              }}
            >
              {error}
            </span>
          </div>
          <button
            onClick={checkUser}
            style={{
              marginLeft: "0.2vw",
              flex: "2",
              backgroundColor: "#e50914",
              borderRadius: "0 0.2vw  0.2vw 0",
              width: "15vw",
              border: "1px solid #e50914",
              minWidth: "15rem",
              maxWidth: "10rem",
              marginTop: "1.5vw",
              minHeight: "5rem",
              height: "3rem",
              color: "white",
              fontSize: "1.7rem",
            }}
          >
            Get Started {">"}
          </button>
        </div>
      </Template>
    </>
  );
};

export default Home;
