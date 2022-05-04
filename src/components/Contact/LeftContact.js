import React,{useRef, useEffect, useContext} from "react";
import translate from "../../i18nProvider/translate";
import NavLogo from "../Shared/NavLogo";
import { SharedLeftContainer, Title } from "../Shared/SharedStyles";
import {  ContactDetails, ContactSubText, ContactTitle, SimpleContact } from "./ContactStyling";
import PortfolioContext from "../../context/portfolioContext";
import gsap from "gsap";

const LeftContact = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { hamOpen } = portfolioContext;

  const leftcont = useRef();


  useEffect(() => {
    gsap.from(leftcont.current, {
      x: -120,
      opacity: 1,
      duration: 0.2,
    });

 
  }, []);

  if(hamOpen){
    gsap.to(leftcont.current, {
      zIndex: 1,
      duration :.1,
      position : 'relative'
    });
  }
  return (
    <SharedLeftContainer ref={leftcont}>
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







