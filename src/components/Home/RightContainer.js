import React,{useRef, useEffect} from "react";

import { gsap } from "gsap";


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
  //get refs

  const middlecont = useRef();
  const aboutRef = useRef();
 
  useEffect(() => {
    gsap.to(middlecont.current, {
      opacity: 1,
      duration: 0.15,
    });

    gsap.to(aboutRef.current, {
      opacity: 1,
      duration: 0.25,
    });
  }, []);
  return (
    <RightContainerDiv to='/about' ref={middlecont}>
      <ProjectContainer>
        <TopContainerMR>
          
          <EmptyAnimatedDiv />
          <p> {translate('more')}</p>
        </TopContainerMR>
        <BottomContainer ref={aboutRef}>{translate('about')}</BottomContainer>
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

