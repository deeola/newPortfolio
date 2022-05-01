import React from "react";
import translate from "../../i18nProvider/translate";
import {
  Management,
  OpenSource,
  RightContainer,
  TextManagementWrapper,
  TextWrapper,
  Tool,
  Tools,
  ToolsTitle,
  ToolsWrapper,
} from "./AboutStyling";

const RightAbout = () => {
  return (
    <RightContainer>
      <TextManagementWrapper>
        <TextWrapper>{translate("aboutmessage")}</TextWrapper>
        <Management>
          <ToolsTitle>{translate("tools")}</ToolsTitle>
          <ToolsWrapper>
            <Tool>Git</Tool>
            <Tool>Github</Tool>
            <Tool>Gitlab</Tool>
            <Tool>Netlify</Tool>
            <Tool>Heroku</Tool>
            <Tool>Jira</Tool>
            <Tool>Miro</Tool>
            <Tool>Figma</Tool>
            <Tool>Scrum</Tool>
            <Tool>Teams</Tool>
          </ToolsWrapper>
        </Management>
        <OpenSource href="https://deeola.github.io/open-source/">
          {translate("opensource")}
        </OpenSource>
      </TextManagementWrapper>
    </RightContainer>
  );
};

export default RightAbout;
