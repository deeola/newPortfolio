import React,{useRef, useEffect} from "react";

import { gsap } from "gsap";


import {
  BottomContainer,
  ProjectContainer,
  TopContainerMR,
  RightContainerDiv,
  EmptyAnimatedDiv,
} from "./Homestyling";
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
      
    </RightContainerDiv>
  );
};

export default RightContainer;


