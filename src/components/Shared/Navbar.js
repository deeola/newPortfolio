import React from "react";
import { List, NavbarContainer, UnorderedList } from "./NavbarStyled";

const Navbar = () => {
  return (
    <NavbarContainer>
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
