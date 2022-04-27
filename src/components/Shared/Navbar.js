import React,{useContext} from "react";
import { List, NavbarContainer, UnorderedList } from "./NavbarStyled";
import PortfolioContext from "../../context/portfolioContext";

const Navbar = () => {
    const portfolioContext = useContext(PortfolioContext);
    const { ulDisplay } = portfolioContext;
  return (
    <NavbarContainer style={ulDisplay()}>
      <UnorderedList>
        <List>HOME</List>
        <List>PROJECTS</List>
        <List>ABOUT</List>
        <List>CONTACT</List>
      </UnorderedList>
    </NavbarContainer>
  );
};

export default Navbar;
