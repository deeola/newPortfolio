import React,{useEffect, useRef, useContext} from "react";
import translate from "../../i18nProvider/translate";
import NavLogo from "../Shared/NavLogo";
import { SharedLeftContainer, Title } from "../Shared/SharedStyles";
import gsap from "gsap";
import {
  HeaderSkills,
  SkillTitle,
  Skills,
  Skill,
} from "./AboutStyling";
import PortfolioContext from "../../context/portfolioContext";

const LeftAbout = () => {
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
      <HeaderSkills>
        <Title>{translate("aboutme")}</Title>
        <SkillTitle>{translate("languages")}</SkillTitle>
        <Skills>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JAVASCRIPT</Skill>
          <Skill>REACT</Skill>
          <Skill>TYPESCRIPT</Skill>
          <Skill>STORYBOOK</Skill>
          <Skill>SCSS</Skill>
          <Skill>GSAP</Skill>
          <Skill>PYTHON</Skill>
          <Skill>LOKI</Skill>
          <Skill>JQUERY</Skill>
          <Skill>S.COMPONENTS</Skill>
        </Skills>
      </HeaderSkills>
    </SharedLeftContainer>
  );
};

export default LeftAbout;

