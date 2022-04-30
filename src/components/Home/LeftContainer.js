import React, { useContext } from "react";
import {
  LeftContainerDiv,
  TextContainer,
  MyName,
  MyAbout,
  LanguageOptions,
  EmptyDiv,
  LanguageDiv,
  Bottom,
  MyAboutMobile,
  Languages,
} from "./Homestyling";

import flag from "../../assets/icons/usaflag.png";
import germanflag from "../../assets/icons/germanflag.png";
import NavLogo from "../Shared/NavLogo";
import PortfolioContext from "../../context/portfolioContext";
import { LOCALES } from "../../i18nProvider";
import translate from "../../i18nProvider/translate";


const LeftContainer = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { closeMenu, setLocale } = portfolioContext;
  return (
    <LeftContainerDiv>
      <NavLogo />
      <Bottom onClick={closeMenu}>
        <TextContainer>
          <MyName>
            <h1>Adeola Bamigboye</h1>  
          </MyName>
          <MyAbout>
            <p>
              {translate("hello-message", {
                file: <span>frontend developer</span>,
              })}
            </p>
          </MyAbout>
          <MyAboutMobile>{translate("aboutmobile")}</MyAboutMobile>
        </TextContainer>
        <LanguageOptions>
          <EmptyDiv />
          <Languages>
            <LanguageDiv>
              <img src={flag} alt="flag" />
              <p onClick={() => setLocale(LOCALES.ENGLISH)}>EN</p>
            </LanguageDiv>
            <LanguageDiv>
              <img src={germanflag} alt="flag" />
              <p onClick={() => setLocale(LOCALES.GERMAN)}>DE</p>
            </LanguageDiv>
          </Languages>
        </LanguageOptions>
      </Bottom>
    </LeftContainerDiv>
  );
};

export default LeftContainer;

