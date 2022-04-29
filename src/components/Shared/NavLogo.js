import React, { useContext } from "react";
import {
  CloseHam,
  HamContainer,
  LogoContainer,
  LogoHamContainer,
  OpenHam,
} from "../Home/Homestyling";

import logo from "./../../assets/logonew.svg";
import HamOpen from "../../assets/icons/ham-open.svg";
import HamClose from "../../assets/icons/icon-close.svg";
import PortfolioContext from "../../context/portfolioContext";

const NavLogo = () => {
  const profileContext = useContext(PortfolioContext);

  const { DisplayOpenIcon, DisplayCloseIcon, displayMenu, closeMenu } =
    profileContext;

  

  return (
    <LogoHamContainer>
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
