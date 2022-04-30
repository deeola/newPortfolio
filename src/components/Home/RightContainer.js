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
import translate from "../../i18nProvider/translate";

library.add(fab);

const RightContainer = () => {
  return (
    <RightContainerDiv to='/about'>
      <ProjectContainer>
        <TopContainer>
          <p>{translate('more')}</p>
        </TopContainer>
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
