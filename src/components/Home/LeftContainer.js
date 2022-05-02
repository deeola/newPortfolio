import React, { useContext, useRef, useEffect } from "react";
import { gsap } from "gsap";
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
  EmptyDivMobile,
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

  //Animation
  //get refs

  const leftcont = useRef();
  const bottomref = useRef();

  useEffect(() => {
    gsap.from(leftcont.current, {
      x: -120,
      opacity: 1,
      duration: 0.2,
    });

    gsap.to(bottomref.current, {
      opacity: 1,
      delay: 0.2,
    });
  }, []);

  return (
    <LeftContainerDiv ref={leftcont}>
      <NavLogo />
      <Bottom onClick={closeMenu} ref={bottomref}>
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
          {/* <EmptyDivMobile /> */}
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
