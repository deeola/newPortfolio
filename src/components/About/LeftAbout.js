import React from "react";
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
        <Header>About Me</Header>
        <SkillTitle>Languages and Frameworks</SkillTitle>
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
