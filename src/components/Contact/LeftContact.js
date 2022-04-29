import React from "react";
import translate from "../../i18nProvider/translate";
import NavLogo from "../Shared/NavLogo";
import {  ContactDetails, ContactSubText, ContactTitle, LeftContainer, SimpleContact } from "./ContactStyling";

const LeftContact = () => {
  return (
    <LeftContainer>
      <NavLogo />
      <SimpleContact>
        <ContactTitle>{translate('navcontact')}</ContactTitle>
        <ContactSubText>
          {translate('question')}
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






