import React,{useContext} from "react";
import { List, NavbarContainer, UnorderedList } from "./NavbarStyled";
import PortfolioContext from "../../context/portfolioContext";


const Navbar = () => {
    const portfolioContext = useContext(PortfolioContext);
    const { ulDisplay,closeMenu } = portfolioContext;
  return (
    <NavbarContainer style={ulDisplay()}>
      <UnorderedList>
        <List onClick={closeMenu} to='/'>HOME</List>
        <List onClick={closeMenu}  to='/projects'>PROJECTS</List>
        <List onClick={closeMenu}  to='/about'>ABOUT</List>
        <List onClick={closeMenu}  to='/contact'>CONTACT</List> 
      </UnorderedList>
    </NavbarContainer>
  );
};

export default Navbar;
