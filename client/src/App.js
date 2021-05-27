import "./App.css";
import "./Components/Rows/Row/Row";
import Rows from "./Components/Rows/Rows";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import { Redirect } from "react-router-dom";
function App() {
  const [showApp, setShowApp] = useState(true);

  fetch("/isLoggedIn", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.isAuthenticated);
      if (!res.isAuthenticated) setShowApp(false);
    })
    .catch((e) => {
      console.error(e);
    });

  if (!showApp) return <Redirect to="/" />;

  return (
    <div className="App">
      <Header />
      <Rows />
      <Footer />
    </div>
  );
}

export default App;
