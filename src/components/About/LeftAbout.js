import React from "react";
import translate from "../../i18nProvider/translate";
import NavLogo from "../Shared/NavLogo";
import { SharedLeftContainer, Title } from "../Shared/SharedStyles";
import {
  Header,
  HeaderSkills,
  SkillTitle,
  Skills,
  Skill,
} from "./AboutStyling";

const LeftAbout = () => {
  return (
    <SharedLeftContainer>
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

