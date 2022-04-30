import React from "react";
import {
  BottomContainer,
  BottomMiddleContainer,
  DownloadCV,
  EmptyDiv,
  MiddleContainerDiv,
  ProjectContainer,
  TopContainer,
} from "./Homestyling";
import translate from "../../i18nProvider/translate";

const MiddleContainer = () => {
  return (
    <MiddleContainerDiv to='projects'>
      <ProjectContainer>
        <TopContainer>
          <p> {translate('sample')}</p>
        </TopContainer>
        <BottomContainer> {translate('project')}</BottomContainer>
      </ProjectContainer>
      <BottomMiddleContainer>
        <DownloadCV href="#">{translate('download')}</DownloadCV>
      </BottomMiddleContainer>
    </MiddleContainerDiv>
  );
};

export default MiddleContainer;
