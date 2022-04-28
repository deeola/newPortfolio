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

const MiddleContainer = () => {
  return (
    <MiddleContainerDiv to='projects'>
      <ProjectContainer>
        <TopContainer>
          <EmptyDiv />
          <p>SAMPLE PROJECTS, ALL RESPONSIVE.</p>
        </TopContainer>
        <BottomContainer>PROJECTS</BottomContainer>
      </ProjectContainer>
      <BottomMiddleContainer>
        <DownloadCV href="#">DOWNLOAD CV</DownloadCV>
      </BottomMiddleContainer>
    </MiddleContainerDiv>
  );
};

export default MiddleContainer;
