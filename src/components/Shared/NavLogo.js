import React, { useContext, useEffect, useRef } from "react";
import {gsap} from "gsap";
import {
  CloseHam,
  HamContainer,
  LogoContainer,
  LogoHamContainer,
  OpenHam,
} from "../Home/Homestyling";

import logo from "./../../assets/logonew.svg";
import HamOpen from "../../assets/icons/ham-open.svg";
import HamClose from "../../assets/icons/Xclose.png";
import PortfolioContext from "../../context/portfolioContext";

const NavLogo = () => {
  const profileContext = useContext(PortfolioContext);

  const { DisplayOpenIcon, DisplayCloseIcon, displayMenu, closeMenu } =
    profileContext;

    //Animation
  //get refs

  const logocont = useRef();

  useEffect(() => {
   
    gsap.to(logocont.current, {
      opacity: 1,
      delay: 0.2,
    });
  }, []);

  return (
    <LogoHamContainer ref={logocont}>
      <LogoContainer to='/'>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <HamContainer>
        <OpenHam
          src={HamOpen}
          alt="openMenu"
          style={DisplayOpenIcon()}
          onClick={() => {
            displayMenu();
          }}
        />
        <CloseHam
          src={HamClose}
          alt="closeMenu"
          style={DisplayCloseIcon()}
          onClick={() => {
            closeMenu();
          }}
        />
      </HamContainer>
    </LogoHamContainer>
  );
};

export default NavLogo;
