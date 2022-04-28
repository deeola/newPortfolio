import React from "react";
import { Management, OpenSource, RightContainer, TextManagementWrapper, TextWrapper, Tool, Tools, ToolsTitle, ToolsWrapper } from "./AboutStyling";

const RightAbout = () => {
  return (
    <RightContainer>
      <TextManagementWrapper>
        <TextWrapper>
          Hello, My name is Adeola Bamigboye, and I'm a passionate front-end web
          developer who loves using web technologies to build stuff. The thing I
          enjoy most about web dev is the constant opportunity to solve
          problems. I try to better myself every time I open VS code and
          contribute to open-source projects to push myself. I would love to
          hear from you. Please feel free to contact me for projects, job
          opportunities or even collaborations.
        </TextWrapper>
        <Management>
            <ToolsTitle>Some of the Managament processes and Deployment Tools that I use</ToolsTitle>
            <ToolsWrapper>
                <Tools>
                    <Tool>Git</Tool>
                    <Tool>Github</Tool>
                    <Tool>Gitlab</Tool>
                    <Tool>Netlify</Tool>
                    <Tool>Heroku</Tool>
                </Tools>
                <Tools>
                    <Tool>Jira</Tool>
                    <Tool>Miro</Tool>
                    <Tool>Figma</Tool>
                    <Tool>Scrum</Tool>
                    <Tool>Teams</Tool>
                </Tools>
            </ToolsWrapper>
        </Management>
        <OpenSource href="https://deeola.github.io/open-source/">
           Click Here is the link to some open source projects that i have contributed to.
        </OpenSource>
      </TextManagementWrapper>
    </RightContainer>
  );
};

export default RightAbout;

