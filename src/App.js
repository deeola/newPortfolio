import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";
import PortfolioState from "./context/PortfolioState";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <PortfolioState>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Navbar />
        </div>
      </BrowserRouter>
    </PortfolioState>
  );
}

export default App;



