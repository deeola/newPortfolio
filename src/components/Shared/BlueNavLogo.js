import React, { useContext } from "react";
import {
  NCloseHam,
  HamContainer,
  LogoContainer,
  NLogoHamContainer,
} from "../Home/Homestyling";

import logo from "./../../assets/icons/blacklogo.png";
import HamClose from "../../assets/icons/blackclose.png";
import PortfolioContext from "../../context/portfolioContext";

const BlueNavLogo = () => {
  const profileContext = useContext(PortfolioContext);

  const { DisplayCloseIcon, closeMenu } =
    profileContext;

  

  return (
    <NLogoHamContainer>
      <LogoContainer to='/'>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <HamContainer>
        <NCloseHam
          src={HamClose}
          alt="closeMenu"
          style={DisplayCloseIcon()}
          onClick={() => {
            closeMenu();
          }}
        />
      </HamContainer>
    </NLogoHamContainer>
  );
};

export default BlueNavLogo;
