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
  BottomRightContainer,
  Icon,
  IconLInk,
} from "./Homestyling";

import flag from "../../assets/icons/usaflag.png";
import germanflag from "../../assets/icons/germanflag.png";
import NavLogo from "../Shared/NavLogo";
import PortfolioContext from "../../context/portfolioContext";
import { LOCALES } from "../../i18nProvider";
import translate from "../../i18nProvider/translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LeftContainer = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { closeMenu, setLocale, hamOpen } = portfolioContext;

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

  console.log(hamOpen);

  if (hamOpen) {
    gsap.to(leftcont.current, {
      zIndex: 1,
      duration: 0.1,
      position: "relative",
    });
  }

  return (
    <LeftContainerDiv ref={leftcont}>
      <NavLogo />
      <Bottom onClick={closeMenu} ref={bottomref}>
        <TextContainer>
          <MyName>
            <h1>Adeola Bamigboye</h1>
          </MyName>
          <MyAbout primary>
         
              {translate("hello-message", {
                file: <span>frontend developer</span>,
              })}
       
          </MyAbout>
          <MyAbout>{translate("aboutmobile")}</MyAbout>
          {/* <EmptyDivMobile /> */}
        </TextContainer>

        <LanguageOptions>
          <EmptyDiv />
          <Languages>
            <LanguageDiv>
              <p onClick={() => setLocale(LOCALES.ENGLISH)}>EN</p>
            </LanguageDiv>
            <LanguageDiv>
              <p onClick={() => setLocale(LOCALES.GERMAN)}>DE</p>
            </LanguageDiv>
          </Languages>
          <BottomRightContainer>
            <IconLInk href="https://github.com/deeola" target='_blank'>
              <Icon icon={faGithub} />
            </IconLInk>
            <IconLInk href="https://www.linkedin.com/in/bamigboyeadeola/" target='_blank'>
              <Icon icon={faLinkedin} />
            </IconLInk>
          </BottomRightContainer>
        </LanguageOptions>
      </Bottom>
    </LeftContainerDiv>
  );
};

export default LeftContainer;
