import React from "react";
import NavLogo from "../Shared/NavLogo";
import {  ContactDetails, ContactSubText, ContactTitle, LeftContainer, SimpleContact } from "./ContactStyling";

const LeftContact = () => {
  return (
    <LeftContainer>
      <NavLogo />
      <SimpleContact>
        <ContactTitle>Contact</ContactTitle>
        <ContactSubText>
          Do you have any questions or comments? An idea you want to talk about?
          Please feel free to contact me.
        </ContactSubText>
        <ContactDetails>
          <p>workwithdee.tech</p>
          <p>+4915211540178</p>
          <p>clazikar@gmail.com</p>
        </ContactDetails>
      </SimpleContact>
    </LeftContainer>
  );
};

export default LeftContact;



