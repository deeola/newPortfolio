import React from "react";
import {
  LeftContainerDiv,
  LogoContainer,
  HamContainer,
  LogoHamContainer,
  TextContainer,
  MyName,
  MyAbout,
  LanguageOptions,
  EmptyDiv,
  LanguageDiv,
  Bottom,
} from "./Homestyling";

import flag from "../../assets/icons/usaflag.png";
import NavLogo from "../Shared/NavLogo";

const LeftContainer = () => {
  return (
    <LeftContainerDiv>
      <NavLogo />
      <Bottom>
      <TextContainer>
        <MyName>
          <h1>Adeola</h1>
          <h1>Bamigboye</h1>
        </MyName>
        <MyAbout>
          <p>
            A highly motivated <span>frontend developer</span> that uses the art of design
            and skill of programming to deliver an immersive and engaging user
            experience through efficient web developement.
          </p>
        </MyAbout>
      </TextContainer>
      <LanguageOptions>
        <EmptyDiv />
        <LanguageDiv>
          <img src={flag} alt="flag" />
          <p>English</p>
        </LanguageDiv>
      </LanguageOptions>
      </Bottom>
      
    </LeftContainerDiv>
  );
};

export default LeftContainer;
