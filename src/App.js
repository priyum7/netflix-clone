import "./App.css";
import requests from "./requests";
import "./Components/Rows/Row/Row";
import Rows from "./Components/Rows/Rows";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Rows />
    </div>
  );
}

export default App;
