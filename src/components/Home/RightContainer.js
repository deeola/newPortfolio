import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  BottomContainer,
  BottomRightContainer,
  EmptyDiv,
  ProjectContainer,
  TopContainer,
  RightContainerDiv,
  Icon,
  EmptyRightDiv,
} from "./Homestyling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const RightContainer = () => {
  return (
    <RightContainerDiv to='/about'>
      <ProjectContainer>
        <TopContainer>
          <EmptyDiv />
          <p>LEARN MORE ABOUT ME</p>
        </TopContainer>
        <BottomContainer>ABOUT</BottomContainer>
      </ProjectContainer>
      <BottomRightContainer>
        <EmptyRightDiv>
        <Icon icon={faLinkedin} />
        <Icon icon={faGithub} />
        </EmptyRightDiv>
        
        <FontAwesomeIcon />
      </BottomRightContainer>
    </RightContainerDiv>
  );
};

export default RightContainer;
