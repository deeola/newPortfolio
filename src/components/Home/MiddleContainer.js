import React from "react";
import {
  BottomContainer,
  BottomMiddleContainer,
  DownloadCV,
  EmptyAnimatedDiv,
  MiddleContainerDiv,
  ProjectContainer,
  TopContainerMR,
} from "./Homestyling";
import translate from "../../i18nProvider/translate";

const MiddleContainer = () => {
  return (
    <MiddleContainerDiv to='projects'>
      <ProjectContainer>
        <TopContainerMR>
          <EmptyAnimatedDiv></EmptyAnimatedDiv>
          <p> {translate('sample')}</p>
        </TopContainerMR>
        <BottomContainer> {translate('project')}</BottomContainer>
      </ProjectContainer>
      <BottomMiddleContainer>
        <DownloadCV href="#">{translate('download')}</DownloadCV>
      </BottomMiddleContainer>
    </MiddleContainerDiv>
  );
};

export default MiddleContainer;
