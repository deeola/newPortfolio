import React, { useContext, useState, useEffect } from "react";
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
import LoadingScreen from "./components/Shared/LoadingScreen";

function App() {
  const portfolioContext = useContext(PortfolioContext);

  let { locale } = portfolioContext;

  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 1000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  return (
    <I18nPropvider locale={locale}>
      <BrowserRouter basename={'/newPortfolio'}>
        {loading ? (
          <LoadingScreen height={'100vh'}  />
        ) : (
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
        )}
      </BrowserRouter>
    </I18nPropvider>
  );
}

export default App;
