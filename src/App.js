import React, { useContext } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";
import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { I18nPropvider } from "../src/i18nProvider";
import PortfolioContext from "./context/portfolioContext";

function App() {
  const portfolioContext = useContext(PortfolioContext);

  let { locale } = portfolioContext;

  return (
    <I18nPropvider locale={locale}>
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
    </I18nPropvider>
  );
}

export default App;
