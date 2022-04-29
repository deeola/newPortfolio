import React,{useContext} from "react";
import { List, NavbarContainer, UnorderedList } from "./NavbarStyled";
import PortfolioContext from "../../context/portfolioContext";
import translate from "../../i18nProvider/translate";


const Navbar = () => {
    const portfolioContext = useContext(PortfolioContext);
    const { ulDisplay,closeMenu } = portfolioContext;
  return (
    <NavbarContainer style={ulDisplay()}>
      <UnorderedList>
        <List onClick={closeMenu} to='/'>{translate('navhome')}</List>
        <List onClick={closeMenu}  to='/projects'>{translate('navproject')}</List>
        <List onClick={closeMenu}  to='/about'>{translate('navabout')}</List>
        <List onClick={closeMenu}  to='/contact'>{translate('navcontact')}</List> 
      </UnorderedList>
    </NavbarContainer>
  );
};

export default Navbar;


