import React,{useContext} from "react";
import { List, NavbarContainer, UnorderedList } from "./NavbarStyled";
import PortfolioContext from "../../context/portfolioContext";
import translate from "../../i18nProvider/translate";
import BlueNavLogo from "./BlueNavLogo";
import { NDownloadCV } from "../Home/Homestyling";


const Navbar = () => {
    const portfolioContext = useContext(PortfolioContext);
    const { ulDisplay,closeMenu } = portfolioContext;
  return (
    <NavbarContainer style={ulDisplay()}>
      <BlueNavLogo  />
      <UnorderedList>
        <List onClick={closeMenu} to='/'>{translate('navhome')}</List>
        <List onClick={closeMenu}  to='/projects'>{translate('navproject')}</List>
        <List onClick={closeMenu}  to='/about'>{translate('navabout')}</List>
        <List onClick={closeMenu}  to='/contact'>{translate('navcontact')}</List> 
      </UnorderedList>
      <NDownloadCV>{translate('download')}</NDownloadCV>
    </NavbarContainer>
  );
};

export default Navbar;


