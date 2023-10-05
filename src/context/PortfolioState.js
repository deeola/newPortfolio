import React, { useState } from "react";
import portfolioContext from "./portfolioContext";
import AllProjects from "../components/Project/Allprojects";
import { LOCALES } from "../i18nProvider";

const PortfolioState = (props) => {
  // Navigation

  const [hamOpen, setHamOpen] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const ulDisplay = () => {
    return hamOpen ? {} : { display: "none" };
  };

  //DISPLAY CLOSE ICON
  const DisplayCloseIcon = () => {
    return closeIcon ? { display: "block" } : { display: "none" };
  };

  //DISPLAY OPEN ICON
  const DisplayOpenIcon = () => {
    return openIcon ? { display: "none" } : { display: "block" };
  };

  

  //MENU STYLE
  const displayMenu = () => {
    setHamOpen(true);
    setCloseIcon(true);
    setOpenIcon(true);
  };

  const closeMenu = () => {
    setHamOpen(false);  
    setCloseIcon(false);
    setOpenIcon(false);
   
  };

  //LOADING
  const [isSubmitted, setIsSubmitted] = useState(false);

  const Submitform = () => {
    setIsSubmitted(true);
  };

  const [signuptrue, setSignuptrue] = useState(false);

  function SubmitSignUp() {
    setSignuptrue(true);
  }

  //caurosel

  let [currents, setCurrent] = useState(0);

  const setProjectNext = () => {
    if (currents >= AllProjects.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(currents + 1);
    }
  };

  function setProjectPrev() {
    if (currents <= 0) {
      setCurrent(AllProjects.length - 1);
    } else {
      setCurrent(currents - 1);
    }
  }

  //i18n

  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <portfolioContext.Provider
      value={{
        DisplayOpenIcon,
        DisplayCloseIcon,
        ulDisplay,
        closeMenu,
        displayMenu,
        isSubmitted,
        Submitform,
        hamOpen,
        signuptrue,
        SubmitSignUp,
        currents,
        setProjectNext,
        setProjectPrev,
        locale,
        setLocale,
      }}
    >
      {props.children}
    </portfolioContext.Provider>
  );
};

export default PortfolioState;
