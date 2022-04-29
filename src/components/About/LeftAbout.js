import React from "react";
import translate from "../../i18nProvider/translate";
import NavLogo from "../Shared/NavLogo";
import {
  Header,
  HeaderSkills,
  LeftContainer,
  SkillTitle,
  Skills,
  Skill,
  SkillWrapper,
} from "./AboutStyling";

const LeftAbout = () => {
  return (
    <LeftContainer>
      <NavLogo />
      <HeaderSkills>
        <Header>{translate('aboutme')}</Header>
        <SkillTitle>{translate('languages')}</SkillTitle>
        <Skills>
          <SkillWrapper>
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>JAVASCRIPT</Skill>
          </SkillWrapper>
          <SkillWrapper>
            <Skill>REACT</Skill>
            <Skill>TYPESCRIPT</Skill>
            <Skill>STORYBOOK</Skill>
          </SkillWrapper>
          <SkillWrapper>
            <Skill>SCSS</Skill>
            <Skill>GSAP</Skill>
            <Skill>PYTHON</Skill>
          </SkillWrapper>
          <SkillWrapper>
            <Skill>LOKI</Skill>
            <Skill>JQUERY</Skill>
            <Skill>STYLED COMPONENTS</Skill>
          </SkillWrapper>
        </Skills>
      </HeaderSkills>
    </LeftContainer>
  );
};

export default LeftAbout;


