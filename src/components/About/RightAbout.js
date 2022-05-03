import React from "react";
import translate from "../../i18nProvider/translate";
import { SharedRightContainer } from "../Shared/SharedStyles";
import {
  Management,
  OpenSource,
  TextManagementWrapper,
  TextWrapper,
  Tool,
  ToolsTitle,
  ToolsWrapper,
} from "./AboutStyling";

const RightAbout = () => {
  return (
    <SharedRightContainer>
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
    </SharedRightContainer>
  );
};

export default RightAbout;


