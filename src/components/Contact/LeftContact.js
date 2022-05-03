import React from "react";
import translate from "../../i18nProvider/translate";
import NavLogo from "../Shared/NavLogo";
import { SharedLeftContainer, Title } from "../Shared/SharedStyles";
import {  ContactDetails, ContactSubText, ContactTitle, SimpleContact } from "./ContactStyling";

const LeftContact = () => {
  return (
    <SharedLeftContainer>
      <NavLogo />
      <SimpleContact>
        <Title>{translate('navcontact')}</Title>
        <ContactSubText>
          {translate('question')}
        </ContactSubText>
        <ContactDetails>
          <p>workwithdee.tech</p>
          <p>+4915211540178</p>
          <p>clazikar@gmail.com</p>
        </ContactDetails>
      </SimpleContact>
    </SharedLeftContainer>
  );
};

export default LeftContact;







