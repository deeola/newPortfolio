import React from 'react'
import { HamContainer, LogoContainer, LogoHamContainer } from '../Home/Homestyling';


import logo from "./../../assets/logonew.svg";
import HamOpen from "../../assets/icons/ham-open.svg";

const NavLogo = () => {
  return (
    <LogoHamContainer>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>
        <HamContainer>
          <img src={HamOpen} alt="openMenu" />
        </HamContainer>
      </LogoHamContainer>
  )
}

export default NavLogo

