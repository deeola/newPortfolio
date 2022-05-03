import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

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
  //get refs

  const middlecont = useRef();
  const projectRef = useRef();

  useEffect(() => {
    gsap.to(middlecont.current, {
      opacity: 1,
      duration: 0.15,
    });

    gsap.to(projectRef.current, {
      opacity: 1,
      duration: 0.2,
    });

  }, []);

  return (
    <MiddleContainerDiv to="/projects" ref={middlecont}>
      <ProjectContainer>
        <TopContainerMR>
          <EmptyAnimatedDiv />
          <p> {translate("sample")}</p>
        </TopContainerMR>
        <BottomContainer ref={projectRef}>
          {" "}
          {translate("project")}
        </BottomContainer>
      </ProjectContainer>
      <BottomMiddleContainer>
        <DownloadCV href="#">{translate("download")}</DownloadCV>
      </BottomMiddleContainer>
    </MiddleContainerDiv>
  );
};

export default MiddleContainer;
