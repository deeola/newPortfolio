import React, {useContext} from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";
import PortfolioState from "./context/PortfolioState";
import GlobalStyle from "./globalStyles";

function App() {

  return (
    <PortfolioState>
      <div className="App">
        <GlobalStyle />
        <Home />
        <Navbar  />
      </div>
    </PortfolioState>
  );
}

export default App;

