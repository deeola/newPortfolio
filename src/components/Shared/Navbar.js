import React,{useContext} from "react";
import { List, NavbarContainer, UnorderedList } from "./NavbarStyled";
import PortfolioContext from "../../context/portfolioContext";


const Navbar = () => {
    const portfolioContext = useContext(PortfolioContext);
    const { ulDisplay } = portfolioContext;
  return (
    <NavbarContainer style={ulDisplay()}>
      <UnorderedList>
        <List to='/'>HOME</List>
        <List to='/projects'>PROJECTS</List>
        <List to='/about'>ABOUT</List>
        <List to='/contact'>CONTACT</List> 
      </UnorderedList>
    </NavbarContainer>
  );
};

export default Navbar;
