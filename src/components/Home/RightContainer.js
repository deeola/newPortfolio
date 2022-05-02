import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  BottomContainer,
  BottomRightContainer,
  ProjectContainer,
  TopContainerMR,
  RightContainerDiv,
  Icon,
  EmptyRightDiv,
  EmptyAnimatedDiv,
} from "./Homestyling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import translate from "../../i18nProvider/translate";


const RightContainer = () => {
  return (
    <RightContainerDiv to='/about'>
      <ProjectContainer>
        <TopContainerMR>
          
          <EmptyAnimatedDiv />
          <p> {translate('more')}</p>
        </TopContainerMR>
        <BottomContainer>{translate('about')}</BottomContainer>
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

